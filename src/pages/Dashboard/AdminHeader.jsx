import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

export default function AdminHeader({ setSidebarOpen }) {
  return (
    <header className='flex items-center gap-4 px-4 py-3 bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-40'>
      {/* Mobile hamburger */}
      <button
        className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 lg:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className='w-5 h-5' />
      </button>

      {/* Search bar */}
      <div className='flex items-center flex-1 max-w-xs gap-2 bg-secondary rounded-xl px-3 py-2'>
        <Search className='w-4 h-4 text-gray-400 shrink-0' />
        <input
          type='text'
          placeholder='Search'
          className='w-full bg-transparent text-sm focus:outline-none placeholder:text-gray-400'
        />
      </div>

      {/* Notification */}
      <button className='relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700'>
        <Bell className='w-5 h-5 text-gray-600 dark:text-gray-300' />
        <span className='absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] leading-none rounded-full bg-primary text-white'>
          5
        </span>
      </button>
    </header>
  );
}
