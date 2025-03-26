import React from 'react';
import { useUser } from '@clerk/clerk-react';

function Profile() {
  const { user } = useUser();

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-white">Profile</h1>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <div className="flex flex-col items-center space-y-4">
          {user?.imageUrl ? (
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-4xl">
                {user?.firstName?.[0] || user?.username?.[0] || 'U'}
              </span>
            </div>
          )}
          <h2 className="text-2xl font-bold text-white">
            {user?.firstName ? `${user.firstName} ${user.lastName || ''}` : user?.username || 'User'}
          </h2>
          <p className="text-gray-400">{user?.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;