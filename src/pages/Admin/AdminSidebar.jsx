import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  User,
  Table,
  Type,
  MapPin,
  BellRing,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SidebarButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full rounded-lg px-4 py-2 text-sm font-medium
      ${
        active
          ? 'bg-primary/20 text-primary'
          : 'text-gray-700 dark:text-gray-200'
      }
      hover:bg-secondary/60`}
  >
    <Icon className='h-5 w-5 shrink-0' />
    {label}
  </button>
);

export default function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'User Profile', icon: User },
    { label: 'Table List', icon: Table },
    { label: 'Typography', icon: Type },
    { label: 'Maps', icon: MapPin },
    { label: 'Notifications', icon: BellRing },
  ];
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <>
      {/* Mobile Sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.aside
            key='sidebar'
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 shadow-lg flex flex-col p-4 md:hidden'
          >
            <div className='flex items-center justify-between mb-6'>
              <h1 className='text-xl font-bold text-primary tracking-wide'>
                Creative Tim
              </h1>
              <button
                onClick={() => setSidebarOpen(false)}
                className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700'
              >
                <X className='w-5 h-5' />
              </button>
            </div>
            <nav className='space-y-1'>
              {tabs.map(({ label, icon }) => (
                <SidebarButton
                  key={label}
                  icon={icon}
                  label={label}
                  active={activeTab === label}
                  onClick={() => setActiveTab(label)}
                />
              ))}
            </nav>

            <div className='mt-6 flex-1 overflow-auto text-sm text-gray-500 dark:text-gray-400'>
              {activeTab === 'Dashboard' && <p>Dashboard content here</p>}
              {activeTab === 'User Profile' && <p>User Profile content here</p>}
              {activeTab === 'Table List' && <p>Table List content here</p>}
              {activeTab === 'Typography' && <p>Typography content here</p>}
              {activeTab === 'Maps' && <p>Maps content here</p>}
              {activeTab === 'Notifications' && (
                <p>Notifications content here</p>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className='hidden lg:flex lg:flex-col lg:w-64 bg-white dark:bg-slate-800 border-r border-black/5 dark:border-white/10 p-4'>
        <h1 className='text-xl font-bold text-primary tracking-wide mb-16 text-center'>
          <button
            onClick={handleBack}
            className='absolute top-4 left-4 bg-white text-black px-4 py-2 rounded'
          >
            Back
          </button>
        </h1>
        <nav className='space-y-1'>
          {tabs.map(({ label, icon }) => (
            <SidebarButton
              key={label}
              icon={icon}
              label={label}
              active={activeTab === label}
              onClick={() => setActiveTab(label)}
            />
          ))}
        </nav>
        <div className='mt-6 flex-1 overflow-auto text-sm text-gray-500 dark:text-gray-400'>
          {activeTab === 'Dashboard' && <p>Dashboard content here</p>}
          {activeTab === 'User Profile' && <p>User Profile content here</p>}
          {activeTab === 'Table List' && <p>Table List content here</p>}
          {activeTab === 'Typography' && <p>Typography content here</p>}
          {activeTab === 'Maps' && <p>Maps content here</p>}
          {activeTab === 'Notifications' && <p>Notifications content here</p>}
        </div>
      </aside>
    </>
  );
}
