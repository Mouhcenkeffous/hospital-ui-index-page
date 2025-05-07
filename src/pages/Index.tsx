
import React from "react";
import { AppHeader } from "@/components/AppHeader";
import { HospitalPageHeader } from "@/components/hospital/HospitalPageHeader";
import { HospitalForm } from "@/components/hospital/HospitalForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-6xl">
          <HospitalPageHeader />
          <HospitalForm />
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 HealthCare Admin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
