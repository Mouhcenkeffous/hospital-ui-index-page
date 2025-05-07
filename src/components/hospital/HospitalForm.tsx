
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Hospital, MapPin, Plus } from "lucide-react";
import { toast } from "sonner";
import { HospitalImageUpload } from "./HospitalImageUpload";
import { HospitalTypeSelector } from "./HospitalTypeSelector";

export interface HospitalFormData {
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  type: string;
  status: "active" | "inactive";
  image: string | null;
}

export function HospitalForm() {
  const [formData, setFormData] = useState<HospitalFormData>({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    email: "",
    website: "",
    description: "",
    type: "general",
    status: "active",
    image: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (imageUrl: string | null) => {
    setFormData((prev) => ({ ...prev, image: imageUrl }));
  };

  const handleTypeChange = (type: string) => {
    setFormData((prev) => ({ ...prev, type }));
  };

  const handleStatusChange = (status: "active" | "inactive") => {
    setFormData((prev) => ({ ...prev, status }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.address || !formData.city || !formData.state) {
      toast.error("Please fill in all required fields", {
        description: "Name, Address, City and State are required",
      });
      return;
    }
    
    console.log("Hospital data submitted:", formData);
    
    toast.success("Hospital added successfully", {
      description: `${formData.name} has been added to the system`,
      icon: <CheckCircle className="h-4 w-4" />,
    });
    
    // Reset form or redirect
    // setFormData({ name: "", address: "", ... }); // Reset form if needed
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <Card className="shadow-md border-healthcare-100">
        <CardHeader className="bg-gradient-to-r from-healthcare-500 to-healing-600 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <Hospital className="h-6 w-6" />
            <h2 className="text-xl font-bold">Hospital Information</h2>
          </div>
          <p className="text-healthcare-50">Enter the details of the new hospital</p>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Hospital Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter hospital name"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Brief description of the hospital"
                    className="mt-1 h-32"
                  />
                </div>

                <HospitalTypeSelector 
                  selected={formData.type} 
                  onSelect={handleTypeChange} 
                />

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Status</Label>
                  <RadioGroup 
                    defaultValue={formData.status} 
                    onValueChange={(value) => handleStatusChange(value as "active" | "inactive")}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active" className="cursor-pointer">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inactive" id="inactive" />
                      <Label htmlFor="inactive" className="cursor-pointer">Inactive</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Location & Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2 text-healthcare-800">
                  <MapPin className="h-4 w-4" />
                  <h3 className="text-sm font-semibold">Location Information</h3>
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-sm font-medium">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address"
                    className="mt-1"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="city" className="text-sm font-medium">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-sm font-medium">
                      State <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="postalCode" className="text-sm font-medium">
                    Postal Code
                  </Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="website" className="text-sm font-medium">
                    Website
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website URL"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <HospitalImageUpload onChange={handleImageChange} />
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 border-t px-6 py-4 flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button 
            type="submit" 
            className="bg-healthcare-600 hover:bg-healthcare-700"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Hospital
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
