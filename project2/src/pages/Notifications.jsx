import React from 'react';

function Notifications() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-white">Notifications</h1>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h3 className="text-white font-semibold">New Project Assignment</h3>
            <p className="text-gray-400">You have been assigned to a new project.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg">
            <h3 className="text-white font-semibold">Meeting Reminder</h3>
            <p className="text-gray-400">Team meeting in 30 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;