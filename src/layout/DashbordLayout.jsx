import React from "react";
import DashboardSidebar from "../Components/DashboardSidebar";

const DashbordLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <DashboardSidebar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashbordLayout;
