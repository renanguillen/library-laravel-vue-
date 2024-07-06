<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index()
    {
        return Author::all();
    }

    public function store(Request $request)
    {
        $author = Author::create($request->all());
        return response()->json($author, 201);
    }

    public function show(Author $author)
    {
        return $author;
    }

    public function update(Request $request, Author $author)
    {
        $author->update($request->all());
        return response()->json($author, 200);
    }

    public function destroy(Author $author)
    {
        $author->delete();
        return response()->json(null, 204);
    }
}
