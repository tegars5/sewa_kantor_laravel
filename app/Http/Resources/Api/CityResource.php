<?php

namespace App\Http\Resources\Api;

use App\Http\Resources\Api\OfficeSpaceResource;
use App\Models\OfficeSpace;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'photo' => $this->photo,
            'officeSpaces_count' => $this->office_spaces_count,
            'officeSpaces' => OfficeSpaceResource::collection($this->whenLoaded('officeSpaces')),
        ];
    }
}
