import React, { useEffect, useState } from 'react';
import Sidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminDashboard from './AdminDashboard';
import UserProfile from './UserProfile'; // import your User Profile component
import UserTable from './UserDataTable';
import { useAuth } from '../../store/auth';

export default function MainDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const { authorizationToken, user } = useAuth();

  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/users', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log('Fetched Users Data:', data); // Debugging log

      if (Array.isArray(data)) {
        setUsers(data); // Ensure users is an array
      } else {
        console.error('Unexpected response format:', data);
        setUsers([]);
      }
    } catch (error) {
      console.log('Error fetching users:', error);
      setUsers([]);
    }
  };
  console.log(users);

  useEffect(() => {
    getAllUsersData();
  }, []);

  // Function to render component based on activeTab
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <AdminDashboard users={users} />;
      case 'User Profile':
        return <UserProfile user={user} />;
      case 'Table List':
        return <UserTable users={users} />;
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
