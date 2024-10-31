import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Upload as UploadIcon, DollarSign, MessageSquare, User, Search } from 'lucide-react';

function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Feed', path: '/' },
    { icon: Search, label: 'Search', path: '/explore' },
    { icon: UploadIcon, label: 'Create', path: '/upload' },
    { icon: DollarSign, label: 'Earnings', path: '/earnings' },
    { icon: MessageSquare, label: 'Messages', path: '/inbox' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="w-[72px] xl:w-[244px] bg-gray-900 border-r border-gray-800 p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white hidden xl:block">CreatorHub</h1>
        <h1 className="text-2xl font-bold text-white xl:hidden text-center">C</h1>
      </div>
      <nav className="flex-1">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors mb-1 ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`
            }
          >
            <Icon size={24} />
            <span className="hidden xl:block">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;