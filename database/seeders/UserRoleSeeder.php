<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserRoleSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Administrator Utama',
            'email' => 'admin@sekolah.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Pak Budi (Guru RPL)',
            'email' => 'guru@sekolah.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'guru',
        ]);

        User::create([
            'name' => 'Siswa Pembelajar',
            'email' => 'siswa@sekolah.sch.id',
            'password' => Hash::make('password123'),
            'role' => 'siswa',
        ]);
    }
}