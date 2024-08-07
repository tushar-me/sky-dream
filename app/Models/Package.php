<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Package extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function image(): Attribute
    {
        return Attribute::get(fn ($value) => $value ? Storage::url($value) : env('app_url').'/placeholder.svg');
    }


}
