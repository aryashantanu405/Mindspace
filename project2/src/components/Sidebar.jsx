import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Settings, User, Bell, LogOut, Brain } from 'lucide-react';
import { useUser, useClerk } from '@clerk/clerk-react';

function Sidebar() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-white/10 backdrop-blur-sm border-r border-gray-200/20 flex flex-col items-center py-8">
      <NavLink to="/dashboard" className="w-12 h-12 mb-8">
        <Brain className="w-full h-full text-purple-500" />
      </NavLink>

      <div className="w-12 h-12 rounded-full overflow-hidden mb-8">
        {user?.imageUrl ? (
          <img src={user.imageUrl} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {user?.firstName?.[0] || user?.username?.[0] || 'U'}
            </span>
          </div>
        )}
      </div>
      
      <nav className="flex flex-col gap-4 flex-1">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group
              ${isActive ? 'bg-white/80 text-purple-500' : 'text-gray-400 hover:bg-white/20 hover:text-white'}`
            }
          >
            <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => signOut()}
        className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-all duration-300 group"
      >
        <LogOut className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
}

export default Sidebar;