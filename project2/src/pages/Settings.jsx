import React from 'react';

function Settings() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-white">Settings</h1>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-white">Dark Mode</span>
            <button className="w-12 h-6 bg-purple-500 rounded-full"></button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white">Notifications</span>
            <button className="w-12 h-6 bg-purple-500 rounded-full"></button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white">Email Updates</span>
            <button className="w-12 h-6 bg-purple-500 rounded-full"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;