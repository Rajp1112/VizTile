import React from 'react';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';
import AdminDashboard from './AdminDashboard';
import UserProfile from './UserProfile'; // import your User Profile component
import UserTable from './UserTable';

export default function MainDashboard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Dashboard');
  console.log(activeTab);

  // Function to render component based on activeTab
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <AdminDashboard />;
      case 'User Profile':
        return <UserProfile />;
      case 'Table List':
        return <UserTable />;
      // Add more cases as needed for Typography, Maps, Notifications, etc.
      default:
        return <AdminDashboard />; // fallback
    }
  };

  return (
    <div className='flex h-screen bg-slate-100 dark:bg-slate-900 text-gray-900 dark:text-white'>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <AdminHeader setSidebarOpen={setSidebarOpen} />
        {renderActiveTabContent()}
      </div>
    </div>
  );
}
