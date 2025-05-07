
import React from 'react';
import { Button } from './ui/button';

export function AppHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-healthcare-600 font-bold text-xl">HealthCare Admin</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Dashboard</Button>
            <Button variant="ghost" size="sm">Hospitals</Button>
            <Button variant="ghost" size="sm">Departments</Button>
            <Button variant="ghost" size="sm">Staff</Button>
            <div className="h-8 w-8 rounded-full bg-healthcare-100 flex items-center justify-center">
              <span className="text-sm font-medium text-healthcare-800">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
