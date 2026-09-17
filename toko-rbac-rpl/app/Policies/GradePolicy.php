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
        return $user->id === $grade->user_id;
    }

    public function create(User $user): bool
    {
        return in_array($user->role, ['admin', 'guru']);
    }

    public function delete(User $user, Grade $grade): bool
    {
        return $user->role === 'admin';
    }
}