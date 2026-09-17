const URL_API = 'http://127.0.0.1:8000/api';
const kotakLogin = document.getElementById('kotak-login');
const kotakDashboard = document.getElementById('kotak-dashboard');
const formLogin = document.getElementById('form-login');
const pesanError = document.getElementById('pesan-error');
const btnLogout = document.getElementById('btn-logout');
const labelUser = document.getElementById('label-user');
const badgeRole = document.getElementById('badge-role');
const areaTambahNilai = document.getElementById('area-tambah-nilai');
const formNilai = document.getElementById('form-nilai');
const tabelData = document.getElementById('tabel-data');

document.addEventListener('DOMContentLoaded', () => {
let token = localStorage.getItem('token_rbac');
if (token) {
muatProfilDanData();
}
});

// 1. PROSES LOGIN
formLogin.addEventListener('submit', async (e) => {
e.preventDefault();
let emailInput = document.getElementById('pilih-role').value;
let passwordInput = document.getElementById('password').value;
try {
let response = await fetch(`${URL_API}/login`, {
method: 'POST',
headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
body: JSON.stringify({ email: emailInput, password: passwordInput })
});
let result = await response.json();
if (response.ok && result.status) {
localStorage.setItem('token_rbac', result.access_token);
muatProfilDanData();
} else {
pesanError.textContent = result.message || "Login gagal!";
}
} catch (err) {
pesanError.textContent = "Gagal terhubung ke server backend Laravel!";
}
});

// 2. AMBIL DATA USER (CEK ROLE UNTUK MENGATUR TAMPILAN FRONTEND)
async function muatProfilDanData() {
let token = localStorage.getItem('token_rbac');
try {
let response = await fetch(`${URL_API}/me`, {
headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
});
if (!response.ok) {
logout();
return;
}
let result = await response.json();
let user = result.user;
// Tampilkan Identitas Profil
labelUser.textContent = user.name;
badgeRole.textContent = user.role;
badgeRole.className = `badge ${user.role}`;
// SESUAIKAN TAMPILAN SESUAI HAK AKSES ROLE (UI ADAPTIVE)
if (user.role === 'admin' || user.role === 'guru') {
areaTambahNilai.classList.remove('sembunyi');
} else {
areaTambahNilai.classList.add('sembunyi');
}
kotakLogin.classList.add('sembunyi');
kotakDashboard.classList.remove('sembunyi');
// Muat Data Nilai
ambilDataNilai(user.role);
} catch (err) {
console.error("Error profil:", err);
}
}

// 3. GET DATA NILAI
async function ambilDataNilai(userRole) {
let token = localStorage.getItem('token_rbac');
try {
let response = await fetch(`${URL_API}/grades`, {
headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
});
let result = await response.json();
if (response.ok) {
let html = '';
result.data.forEach(item => {
html += `
<tr>
<td>${item.id}</td>
<td>${item.student ? item.student.name : 'Siswa ID: ' + item.user_id}</td>
<td>${item.subject}</td>
<td><strong>${item.score}</strong></td>
<td>
${userRole === 'admin'
? `<button onclick="hapusNilai(${item.id})" class="btn merah" style="padding: 3px 8px; font-size:
11px;">Hapus (Admin Only)</button>`
: '<span style="color:#aaa; font-size:12px;">No Access</span>'}
</td>
</tr>
`;
});
tabelData.innerHTML = html;
}
} catch (err) {
console.error("Error nilai:", err);
}
}

// 4. POST SIMPAN NILAI (ADMIN & GURU)
formNilai.addEventListener('submit', async (e) => {
e.preventDefault();
let token = localStorage.getItem('token_rbac');
let payload = {
user_id: document.getElementById('input-siswa-id').value,
subject: document.getElementById('input-mapel').value,
score: document.getElementById('input-nilai').value
};
try {
let response = await fetch(`${URL_API}/grades`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${token}`,
'Accept': 'application/json'
},
body: JSON.stringify(payload)
});
let result = await response.json();
if (response.ok) {
alert('Nilai berhasil disimpan!');
formNilai.reset();
muatProfilDanData();
} else {
alert('Gagal Simpan (HTTP ' + response.status + '): ' + result.message);
}
} catch (err) {
alert('Terjadi kesalahan jaringan/server.');
}
});

// 5. DELETE NILAI (EKSKLUSIF ADMIN)
async function hapusNilai(id) {
if (!confirm('Apakah Anda yakin ingin menghapus data nilai ini?')) return;
let token = localStorage.getItem('token_rbac');
try {
let response = await fetch(`${URL_API}/grades/${id}`, {
method: 'DELETE',
headers: {
'Authorization': `Bearer ${token}`,
'Accept': 'application/json'
}
});
let result = await response.json();
if (response.ok) {
alert(result.message);
muatProfilDanData();
} else {
alert('Akses Ditolak (HTTP ' + response.status + '): ' + result.message);
}
} catch (err) {
alert('Gagal menghapus data.');
}
}

// 6. LOGOUT
function logout() {
localStorage.removeItem('token_rbac');
kotakLogin.classList.remove('sembunyi');
kotakDashboard.classList.add('sembunyi');
}
btnLogout.addEventListener('click', logout);
