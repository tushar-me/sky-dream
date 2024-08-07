<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $searvices = Package::query()
            ->when(\request()->input('search'), function ($query, $search) {
                $query->where('name', 'LIKE', "%{$search}%");
            })->orderBy(\request()->input('orderBy') ?? 'id', \request()->input('sortBy') ?? 'DESC')
            ->paginate(\request()->input('perPage') ?? 15)
            ->withQueryString();

        return response()->json([
            'message' => 'Data Retrive Successfully Done... ',
            'package' => $searvices
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'price' => 'required',
            'color' => 'nullable',
            'details' => 'nullable',
            'shortDescritions' => 'nullable',
        ]);

        Package::query()->updateOrCreate(['id' => $request->input('id')], $data);
        return response()->json(['message' => "Action Successfully Done...."], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Package::query()->findOrFail($id);
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

        $image = Package::findOrFail($id);
        if(Storage::disk('public')->exists("package/$image->image")){
            Storage::disk('public')->delete("package/$image->image");
        }
        $image->delete();
        return response()->json(['message' => "Action Successfully Done...."], 200);
    }
}
