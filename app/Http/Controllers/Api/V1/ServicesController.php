<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $searvices = Service::query()
            ->when(\request()->input('search'), function ($query, $search){
                $query->where('name', 'LIKE', "%{$search}%");
            })->orderBy(\request()->input('orderBy') ?? 'id', \request()->input('sortBy') ?? 'DESC')
            ->paginate(\request()->input('perPage') ?? 15)
            ->withQueryString();

        return response()->json([
            'message' => 'Data Retrive Successfully Done... ',
            'services' => $searvices
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
           'speciality' => 'nullable',
           'details' => 'nullable',
           'shortDescritions' => 'nullable',
        ]);

        if(empty($request->input('id'))){
            $request->validate([
                'image' => 'required|nullable|file|mimes:jpg,jpeg,png|max:1024'
            ]);
        }

        if($request->hasFile('image')) $data['image'] = $request->file('image')->store('/services');
        Service::query()->updateOrCreate(['id' => $request->input('id')], $data);

        return response()->json(['message' => "Action Successfully Done...."], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $service = Service::query()->findOrFail($id);
        if(\request()->input('type') == 'toggle'){
            $service->show_home = !$service->show_home;
            $service->save();
        }
        return $service;
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
        $image = Service::findOrFail($id);

        if(Storage::disk('public')->exists("services/$image->image")){
            Storage::disk('public')->delete("services/$image->image");
        }
        $image->delete();
        return response()->json(['message' => "Action Successfully Done...."], 200);
    }
}
