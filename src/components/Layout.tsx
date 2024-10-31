import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-[935px] mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;