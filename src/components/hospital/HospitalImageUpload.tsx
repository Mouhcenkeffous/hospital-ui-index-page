
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Building2 } from 'lucide-react';

interface HospitalImageUploadProps {
  onChange: (imageUrl: string | null) => void;
}

export function HospitalImageUpload({ onChange }: HospitalImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewUrl(result);
        onChange(result);
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="space-y-2">
      <Label htmlFor="hospitalImage" className="text-sm font-medium">
        Hospital Image
      </Label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
        <div className="space-y-1 text-center">
          {previewUrl ? (
            <div className="flex flex-col items-center">
              <img 
                src={previewUrl} 
                alt="Hospital preview" 
                className="h-32 w-auto object-cover rounded-md"
              />
              <button 
                type="button"
                onClick={() => {
                  setPreviewUrl(null);
                  onChange(null);
                }}
                className="mt-2 text-sm text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <Building2 className="h-12 w-12 text-gray-300" />
              </div>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="hospitalImage"
                  className="relative cursor-pointer rounded-md font-medium text-healthcare-600 hover:text-healthcare-500 focus-within:outline-none"
                >
                  <span>Upload hospital image</span>
                  <input
                    id="hospitalImage"
                    name="hospitalImage"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
