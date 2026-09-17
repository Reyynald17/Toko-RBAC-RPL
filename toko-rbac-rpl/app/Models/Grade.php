<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'subject', 'score'];

    public function student()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}