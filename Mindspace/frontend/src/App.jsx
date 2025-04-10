import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp, useUser } from '@clerk/clerk-react';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
function PrivateRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

function PublicRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

function App() {
  if (!PUBLISHABLE_KEY) {
    return <div className="text-red-500">Missing Publishable Key</div>;
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          } />
          <Route path="/sign-in/*" element={
            <PublicRoute>
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <SignIn routing="path" path="/sign-in" />
              </div>
            </PublicRoute>
          } />
          <Route path="/sign-up/*" element={
            <PublicRoute>
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <SignUp routing="path" path="/sign-up" />
              </div>
            </PublicRoute>
          } />
          <Route path="/dashboard/*" element={
            <PrivateRoute>
              <div className=" flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
                <Sidebar />
                <main className="flex-1 justify-center ml-10">
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;