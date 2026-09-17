<<<<<<< HEAD
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

In addition, [Laracasts](https://laracasts.com) contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

You can also watch bite-sized lessons with real-world projects on [Laravel Learn](https://laravel.com/learn), where you will be guided through building a Laravel application from scratch while learning PHP fundamentals.

## Agentic Development

Laravel's predictable structure and conventions make it ideal for AI coding agents like Claude Code, Cursor, and GitHub Copilot. Install [Laravel Boost](https://laravel.com/docs/ai) to supercharge your AI workflow:

```bash
composer require laravel/boost --dev

php artisan boost:install
```

Boost provides your agent 15+ tools and skills that help agents build Laravel applications while following best practices.

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
=======
# 🔐 Restricted API Middleware & Role Permission Management

## 📚 Tentang Project

Project ini merupakan sistem **API Backend Laravel** yang menerapkan konsep **Authentication, Authorization, Middleware, Policy, dan Role-Based Access Control (RBAC)**.

Sistem memiliki 3 jenis role pengguna:

* 👨‍💼 **Admin**
* 👨‍🏫 **Guru**
* 👨‍🎓 **Siswa**

Setiap role memiliki hak akses yang berbeda terhadap data nilai siswa.

Project ini dibuat untuk mempraktikkan pengamanan API menggunakan **Laravel Sanctum**, **Custom Middleware**, dan **Policy**. Frontend menggunakan **Vanilla JavaScript Fetch API** untuk melakukan pengujian dan interaksi dengan backend.

---

## 🎯 Tujuan Project

Project ini bertujuan untuk memahami:

* Authentication dan Authorization
* Role-Based Access Control (RBAC)
* Laravel Sanctum
* Custom Middleware
* Gate dan Policy
* API menggunakan Laravel
* REST API dengan Fetch API
* Pembatasan akses berdasarkan role
* Pengujian keamanan endpoint API

---

## 🛠️ Teknologi yang Digunakan

| Teknologi       | Keterangan                        |
| --------------- | --------------------------------- |
| Laravel         | Backend Framework                 |
| PHP             | Bahasa pemrograman backend        |
| MySQL           | Database                          |
| Laravel Sanctum | Authentication API                |
| Middleware      | Pembatasan akses berdasarkan role |
| Policy          | Otorisasi berdasarkan resource    |
| HTML            | Struktur frontend                 |
| CSS             | Tampilan frontend                 |
| JavaScript      | Komunikasi frontend dengan API    |
| Fetch API       | Request ke backend                |
| Postman         | Pengujian API                     |

---

# 👥 Role & Hak Akses

| Role        | Melihat Nilai   | Menambah Nilai | Menghapus Nilai |
| ----------- | --------------- | -------------- | --------------- |
| 👨‍💼 Admin | ✅ Semua         | ✅              | ✅               |
| 👨‍🏫 Guru  | ✅ Semua         | ✅              | ❌               |
| 👨‍🎓 Siswa | ✅ Nilai Sendiri | ❌              | ❌               |

### Penjelasan

**Admin**

* Memiliki akses penuh.
* Dapat melihat seluruh nilai.
* Dapat menambahkan nilai.
* Dapat menghapus nilai.

**Guru**

* Dapat melihat seluruh nilai.
* Dapat menambahkan nilai.
* Tidak dapat menghapus nilai.

**Siswa**

* Hanya dapat melihat nilai miliknya sendiri.
* Tidak dapat menambahkan nilai.
* Tidak dapat menghapus nilai.

---

# 🔐 Sistem Keamanan

Alur keamanan API:

```text
HTTP Request
     │
     ▼
Authentication
(Laravel Sanctum)
     │
     ├── Gagal → 401 Unauthorized
     │
     ▼
Custom Middleware
(CheckRole)
     │
     ├── Gagal → 403 Forbidden
     │
     ▼
Policy
(GradePolicy)
     │
     ├── Gagal → 403 Forbidden
     │
     ▼
Controller
     │
     ▼
Database
```

---

# 📁 Struktur Project

```text
project/
│
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Api/
│   │   │       └── GradeController.php
│   │   │
│   │   └── Middleware/
│   │       └── CheckRole.php
│   │
│   ├── Models/
│   │   ├── User.php
│   │   └── Grade.php
│   │
│   └── Policies/
│       └── GradePolicy.php
│
├── database/
│   ├── migrations/
│   │   ├── create_users_table.php
│   │   └── create_grades_table.php
│   │
│   └── seeders/
│       └── UserRoleSeeder.php
│
├── routes/
│   └── api.php
│
└── frontend-rbac-smk/
    ├── index.html
    ├── style.css
    └── app.js
```

---

# 🗄️ Database

## Tabel `users`

Tabel users digunakan untuk menyimpan data pengguna dan role.

| Field      | Keterangan           |
| ---------- | -------------------- |
| id         | ID User              |
| name       | Nama pengguna        |
| email      | Email pengguna       |
| password   | Password             |
| role       | admin / guru / siswa |
| created_at | Waktu dibuat         |
| updated_at | Waktu diperbarui     |

Role yang tersedia:

```text
admin
guru
siswa
```

---

## Tabel `grades`

Tabel `grades` digunakan untuk menyimpan nilai siswa.

| Field      | Keterangan       |
| ---------- | ---------------- |
| id         | ID nilai         |
| user_id    | ID siswa         |
| subject    | Mata pelajaran   |
| score      | Nilai            |
| created_at | Waktu dibuat     |
| updated_at | Waktu diperbarui |

Relasi:

```text
users
  │
  │ 1
  │
  │ *
grades
```

Satu user dapat memiliki beberapa data nilai.

---

# 👤 Akun Testing

Akun berikut digunakan untuk melakukan pengujian RBAC.

| Role  | Email                  | Password      |
| ----- | ---------------------- | ------------- |
| Admin | `admin@sekolah.sch.id` | `password123` |
| Guru  | `guru@sekolah.sch.id`  | `password123` |
| Siswa | `siswa@sekolah.sch.id` | `password123` |

> ⚠️ Akun di atas merupakan akun untuk keperluan testing/pembelajaran.

---

# 🚀 Instalasi & Menjalankan Project

## 1. Clone Project

```bash
git clone URL_REPOSITORY
```

Masuk ke folder project:

```bash
cd nama-project
```

---

## 2. Install Dependency

```bash
composer install
```

---

## 3. Buat File `.env`

```bash
cp .env.example .env
```

Untuk Windows jika perintah tersebut tidak bekerja, buat/copy file `.env.example` menjadi:

```text
.env
```

---

## 4. Generate Application Key

```bash
php artisan key:generate
```

---

## 5. Konfigurasi Database

Buka file:

```text
.env
```

Atur konfigurasi database:

```env
DB_DATABASE=toko_rbac
DB_USERNAME=root
DB_PASSWORD=
```

Sesuaikan dengan konfigurasi MySQL masing-masing.

---

## 6. Jalankan Migration

```bash
php artisan migrate
```

Jika ingin menghapus database/tabel lama dan membuat ulang:

```bash
php artisan migrate:fresh
```

---

## 7. Jalankan Seeder

```bash
php artisan db:seed --class=UserRoleSeeder
```

Seeder akan membuat akun:

```text
Admin
Guru
Siswa
```

---

## 8. Jalankan Laravel

```bash
php artisan serve
```

Backend akan tersedia di:

```text
http://127.0.0.1:8000
```

---

# 🔌 API Endpoint

Base URL:

```text
http://127.0.0.1:8000/api
```

## 🔓 Login

```http
POST /login
```

Contoh request:

```json
{
    "email": "admin@sekolah.sch.id",
    "password": "password123"
}
```

Login akan menghasilkan:

```text
access_token
```

Token tersebut digunakan untuk mengakses endpoint yang dilindungi.

---

## 👤 Profile

```http
GET /me
```

Header:

```text
Authorization: Bearer TOKEN
Accept: application/json
```

---

## 📋 Melihat Nilai

```http
GET /grades
```

Endpoint ini dapat digunakan oleh semua user yang sudah login.

Perbedaannya:

```text
Admin → seluruh nilai
Guru  → seluruh nilai
Siswa → nilai miliknya sendiri
```

---

## ➕ Menambah Nilai

```http
POST /grades
```

Role yang diperbolehkan:

```text
Admin
Guru
```

Contoh JSON:

```json
{
    "user_id": 3,
    "subject": "Pemrograman Web",
    "score": 90
}
```

Siswa yang mencoba endpoint ini akan mendapatkan:

```text
HTTP 403 Forbidden
```

---

## 🗑️ Menghapus Nilai

```http
DELETE /grades/{id}
```

Hanya:

```text
Admin
```

yang diperbolehkan menghapus data.

Contoh:

```http
DELETE /grades/1
```

Guru dan Siswa akan mendapatkan:

```text
HTTP 403 Forbidden
```

---

# 🛡️ Middleware CheckRole

Middleware `CheckRole` digunakan untuk memeriksa role user sebelum request diteruskan ke controller.

Contoh:

```php
Route::middleware('role:admin,guru')->group(function () {
    Route::post('/grades', [GradeController::class, 'store']);
});
```

Artinya hanya:

```text
admin
guru
```

yang dapat mengakses endpoint tersebut.

Untuk Admin saja:

```php
Route::middleware('role:admin')->group(function () {
    Route::delete('/grades/{id}', [GradeController::class, 'destroy']);
});
```

---

# 📜 Grade Policy

`GradePolicy` digunakan untuk memberikan aturan akses terhadap resource `Grade`.

Aturan:

```text
Admin → dapat melihat, menambah, menghapus
Guru  → dapat melihat, menambah
Siswa → hanya dapat melihat nilai miliknya
```

Policy memberikan pengamanan tambahan pada level resource/model.

---

# 💻 Frontend

Frontend menggunakan:

```text
HTML
CSS
Vanilla JavaScript
Fetch API
```

Struktur:

```text
frontend-rbac-smk/
│
├── index.html
├── style.css
└── app.js
```

Frontend memiliki:

* 🔐 Form Login
* 🎓 Dashboard
* 👤 Informasi User
* 🏷️ Badge Role
* 📋 Daftar Nilai
* ➕ Form Tambah Nilai
* 🗑️ Tombol Hapus
* 🚪 Logout

Tampilan akan menyesuaikan role user.

Contoh:

```text
Admin
→ Form Tambah Nilai
→ Tombol Hapus

Guru
→ Form Tambah Nilai
→ Tidak ada tombol Hapus

Siswa
→ Tidak ada Form Tambah
→ Tidak ada tombol Hapus
```

Frontend menggunakan endpoint:

```javascript
const URL_API = 'http://127.0.0.1:8000/api';
```

---

# 🧪 Pengujian RBAC

## Skenario 1 — Siswa Login

Login sebagai:

```text
siswa@sekolah.sch.id
```

Hasil:

```text
✅ Login berhasil
✅ Dashboard tampil
❌ Form tambah nilai disembunyikan
```

---

## Skenario 2 — Siswa POST Nilai

Request:

```http
POST /api/grades
```

Hasil yang diharapkan:

```text
❌ HTTP 403 Forbidden
```

Tujuan:

```text
Membuktikan Middleware CheckRole
berhasil membatasi akses siswa.
```

---

## Skenario 3 — Guru Tambah Nilai

Login sebagai:

```text
guru@sekolah.sch.id
```

Kemudian tambah nilai.

Hasil:

```text
✅ Data berhasil disimpan
```

---

## Skenario 4 — Guru DELETE Nilai

Guru mencoba:

```http
DELETE /api/grades/{id}
```

Hasil:

```text
❌ HTTP 403 Forbidden
```

Karena DELETE hanya diperbolehkan untuk Admin.

---

## Skenario 5 — Admin DELETE Nilai

Login sebagai:

```text
admin@sekolah.sch.id
```

Kemudian hapus nilai.

Hasil:

```text
✅ Data berhasil dihapus
```

---

# 📊 Tabel Hasil Pengujian

| No | Skenario              | Role  | Hasil           |
| -: | --------------------- | ----- | --------------- |
|  1 | Login                 | Siswa | ✅ Berhasil      |
|  2 | POST `/grades`        | Siswa | ❌ 403 Forbidden |
|  3 | POST `/grades`        | Guru  | ✅ Berhasil      |
|  4 | DELETE `/grades/{id}` | Guru  | ❌ 403 Forbidden |
|  5 | DELETE `/grades/{id}` | Admin | ✅ Berhasil      |

---

# 📌 Konsep yang Dipelajari

### Authentication

Memastikan identitas user.

```text
"Siapa kamu?"
```

Contoh:

```text
Login dengan email + password
```

### Authorization

Menentukan apa yang boleh dilakukan user.

```text
"Apa yang boleh kamu lakukan?"
```

Contoh:

```text
Siswa tidak boleh menghapus nilai.
```

### Middleware

Berfungsi sebagai penyaring request sebelum masuk ke Controller.

### Policy

Digunakan untuk memberikan aturan akses terhadap resource/model tertentu.

### RBAC

Hak akses ditentukan berdasarkan role:

```text
Admin
Guru
Siswa
```

---

# 📁 Hasil Akhir Project

Jika seluruh tahap berhasil, sistem dapat:

```text
                    ┌──────────────┐
                    │    LOGIN     │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  SANCTUM     │
                    │ AUTHENTICATE │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ CHECK ROLE    │
                    │  MIDDLEWARE  │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           ADMIN         GURU         SISWA
              │            │            │
              ▼            ▼            ▼
          Full Access   Limited      Own Data
```

---

# 👨‍💻 Project Information

**Project:** Restricted API Middleware & Role Permission Management
**Framework:** Laravel
**Authentication:** Laravel Sanctum
**Authorization:** Middleware + Policy
**Frontend:** Vanilla JavaScript
**Database:** MySQL
**Project Type:** Backend API & RBAC Learning Project

---

## 📚 Referensi Materi

Project ini mengikuti jobsheet **BAB 6: Authorization, Middleware & Role-Based Access Control (RBAC)** dengan target API Laravel yang memiliki 3 role, Custom Middleware `CheckRole`, Policy untuk resource, serta frontend Vanilla JavaScript untuk pengujian.
>>>>>>> 73a3f4e4818335b3d091cb34b6916a0d650eeb57
