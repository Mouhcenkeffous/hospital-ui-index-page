
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface HospitalType {
  id: string;
  name: string;
  description: string;
}

const hospitalTypes: HospitalType[] = [
  {
    id: "general",
    name: "General Hospital",
    description: "Offers various treatments and has an emergency department"
  },
  {
    id: "specialized",
    name: "Specialized Hospital",
    description: "Focuses on specific medical specialties"
  },
  {
    id: "clinic",
    name: "Clinic",
    description: "Outpatient facility providing consultations and treatments"
  },
  {
    id: "emergency",
    name: "Emergency Center",
    description: "Specializes in emergency medical services"
  }
];

interface HospitalTypeSelectorProps {
  selected: string;
  onSelect: (type: string) => void;
}

export function HospitalTypeSelector({ selected, onSelect }: HospitalTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        Hospital Type
      </Label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
        {hospitalTypes.map((type) => (
          <Card 
            key={type.id}
            className={cn(
              "cursor-pointer hover:border-healthcare-400 transition-colors",
              selected === type.id 
                ? "border-healthcare-500 ring-1 ring-healthcare-500 bg-healthcare-50" 
                : "border-gray-200"
            )}
            onClick={() => onSelect(type.id)}
          >
            <CardContent className="p-3">
              <div className="flex flex-col">
                <span className="font-medium text-sm">{type.name}</span>
                <span className="text-xs text-gray-500">{type.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
