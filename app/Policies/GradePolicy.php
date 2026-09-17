<?php

namespace App\Policies;

use App\Models\Grade;
use App\Models\User;

class GradePolicy
{
    public function view(User $user, Grade $grade): bool
    {
        if ($user->role === 'admin' || $user->role === 'guru') {
            return true;
        }
        return $user->id === $grade->user_id; //[cite: 1]
    }

    public function create(User $user): bool
    {
        return in_array($user->role, ['admin', 'guru']); //[cite: 1]
    }

    public function delete(User $user, Grade $grade): bool
    {
        return $user->role === 'admin'; //[cite: 1]
    }
}