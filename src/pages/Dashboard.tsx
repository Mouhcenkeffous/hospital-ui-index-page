import React from "react";
import { AppHeader } from "@/components/AppHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Hospital, 
  Users, 
  Activity, 
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Clock,
  Plus
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Hospitals",
      value: "24",
      change: "+2",
      trend: "up",
      icon: Hospital,
      color: "text-healthcare-600"
    },
    {
      title: "Active Staff",
      value: "1,847",
      change: "+12",
      trend: "up", 
      icon: Users,
      color: "text-healing-600"
    },
    {
      title: "Patient Capacity",
      value: "12,450",
      change: "+156",
      trend: "up",
      icon: Activity,
      color: "text-healthcare-500"
    },
    {
      title: "Monthly Growth",
      value: "8.2%",
      change: "+1.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-healing-500"
    }
  ];

  const recentHospitals = [
    {
      id: 1,
      name: "Central Medical Center",
      location: "New York, NY",
      type: "General Hospital",
      status: "active",
      patients: 450,
      staff: 89,
      phone: "+1 (555) 123-4567",
      addedDate: "2 days ago"
    },
    {
      id: 2,
      name: "Children's Specialty Hospital",
      location: "Los Angeles, CA", 
      type: "Specialized Hospital",
      status: "active",
      patients: 230,
      staff: 56,
      phone: "+1 (555) 987-6543",
      addedDate: "1 week ago"
    },
    {
      id: 3,
      name: "Emergency Care Clinic",
      location: "Chicago, IL",
      type: "Emergency Center", 
      status: "active",
      patients: 120,
      staff: 34,
      phone: "+1 (555) 456-7890",
      addedDate: "2 weeks ago"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New hospital added",
      description: "Central Medical Center was added to the system",
      time: "2 hours ago",
      type: "hospital"
    },
    {
      id: 2,
      action: "Staff updated",
      description: "45 new staff members registered across 3 hospitals",
      time: "4 hours ago", 
      type: "staff"
    },
    {
      id: 3,
      action: "Capacity increased",
      description: "Patient capacity expanded by 200 beds",
      time: "1 day ago",
      type: "capacity"
    },
    {
      id: 4,
      action: "System maintenance",
      description: "Scheduled maintenance completed successfully",
      time: "2 days ago",
      type: "system"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Healthcare Dashboard</h1>
            <p className="text-gray-600">Overview of your healthcare network</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="animate-fade-in hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                        <span className="text-sm text-gray-500 ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full bg-healthcare-100 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Hospitals */}
            <div className="lg:col-span-2">
              <Card className="animate-fade-in">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Hospital className="h-5 w-5 text-healthcare-600" />
                    Recent Hospitals
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Hospital
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentHospitals.map((hospital) => (
                      <div key={hospital.id} className="p-4 border border-gray-200 rounded-lg hover:border-healthcare-300 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{hospital.name}</h3>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              {hospital.location}
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {hospital.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Type:</span>
                            <p className="font-medium">{hospital.type}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Patients:</span>
                            <p className="font-medium">{hospital.patients}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Staff:</span>
                            <p className="font-medium">{hospital.staff}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Phone:</span>
                            <p className="font-medium text-healthcare-600">{hospital.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            Added {hospital.addedDate}
                          </div>
                          <Button variant="ghost" size="sm" className="text-healthcare-600 hover:text-healthcare-700">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <div>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Activity className="h-5 w-5 text-healing-600" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-healthcare-500 rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                          <p className="text-xs text-gray-500 mt-2 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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

export default Dashboard;