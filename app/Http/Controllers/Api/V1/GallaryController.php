<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Gallary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GallaryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $images = Gallary::query()
            ->orderBy(\request()->input('orderBy') ?? 'id', \request()->input('sortBy') ?? 'DESC')
            ->paginate(\request()->input('perPage') ?? 15)
            ->withQueryString();

        return response()->json([
            'message' => 'Data Retrive Successfully Done... ',
            'gallery' => $images
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data = $request->validate([
            'name' => 'required',
            'image' => 'required|nullable|file|max:1024',
            'description' => 'nullable',
        ]);

        if($request->hasFile('image')) $data['image'] = $request->file('image')->store('/gallery');
        Gallary::query()->updateOrCreate(['id' => $request->input('id')], $data);
        return response()->json(['message' => "Action Successfully Done...."], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $image = Gallary::findOrFail($id);
        if(Storage::disk('public')->exists("services/$image->image")){
            Storage::disk('public')->delete("services/$image->image");
        }
        $image->delete();
        return response()->json(['message' => "Action Successfully Done...."], 200);
    }
}
