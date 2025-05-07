
import React from 'react';
import { Hospital } from 'lucide-react';

export function HospitalPageHeader() {
  return (
    <div className="mb-8 space-y-3">
      <div className="flex items-center space-x-2">
        <div className="p-2 rounded-full bg-healthcare-100 text-healthcare-700">
          <Hospital className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Add New Hospital</h1>
      </div>
      
      <p className="text-gray-600 max-w-3xl">
        Add a new hospital to your healthcare network. Fill out the form below with the hospital's details. 
        Required fields are marked with an asterisk (*).
      </p>
      
      <div className="h-1 w-24 bg-gradient-to-r from-healthcare-500 to-healing-500 rounded-full"></div>
    </div>
  );
}
