<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        if ($user->role === 'siswa') {
            $grades = Grade::where('user_id', $user->id)->with('student')->get();
        } else {
            $grades = Grade::with('student')->get();
        }

        return response()->json([
            'status' => true,
            'data' => $grades
        ]);
    }

    public function store(Request $request)
    {
        $this->authorize('create', Grade::class);

        $request->validate([
            'user_id' => 'required|exists:users,id',
            'subject' => 'required|string',
            'score' => 'required|integer|min:0|max:100'
        ]);

        $grade = Grade::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Nilai berhasil disimpan.',
            'data' => $grade
        ], 201);
    }

    public function destroy(Request $request, $id)
    {
        $grade = Grade::findOrFail($id);
        $this->authorize('delete', $grade);
        $grade->delete();

        return response()->json([
            'status' => true,
            'message' => 'Data nilai berhasil dihapus dari database.'
        ]);
    }
}