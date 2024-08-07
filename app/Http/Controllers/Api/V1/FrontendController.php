<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Gallary;
use App\Models\Package;
use App\Models\Service;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function services()
    {
        return response()->json([
            'allServices' => Service::query()->get(),
            'selectedServices' => Service::query()->where('show_home', 1)->take(4)->get()
        ]);
    }
    public function singleServices($id)
    {
        return Service::query()->findOrFail($id);
    }
    public function packages()
    {
        return Package::query()->get();
    }
    public function galleries()
    {
        return Gallary::query()->get();
    }
    public function createContact(Request $request)
    {
        $data = $request->validate([
            'firstname' => 'nullable|max:255',
            'lastname' => 'nullable|max:255',
            'phone' => 'nullable|max:15|min:11',
            'email' => 'required|email', //|dns:rfc
            'message' => 'nullable'
        ]);
        Contact::query()->create($data);
        return response()->json(['message' => "Submitted our queries"], 200);
    }

    public function getSettings()
    {
        $data = request()->all();
        $setting = new BusinessSettingController();
        $response = [];
        foreach (explode(',', $data['name']) as $item){
            $response[$item] = json_decode($setting->get_setting($item));
        }
        return response()->json($response);
    }
}
