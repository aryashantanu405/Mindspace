import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Brain, Heart, Shield } from "lucide-react";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-bgcolor1 to-bgcolor2">
      <nav className="top-0 left-0 flex justify-between items-center px-2 pt-2 -mb-10">
        
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold text-black">MindSpace</span>
        </div>
        <div className="space-x-4 flex">
          <button
            onClick={() => navigate("/sign-in")}
            className="px-2 py-2 text-blue-600 hover:text-purple-300 transition-colors border-blue-400"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="px-2 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Sign up
          </button>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-headingcolor mb-6">
            Your Mental Health Matters
          </h1>
          <p className="text-xl text-descriptioncolor mb-8 max-w-2xl mx-auto">
            Join our community of people who prioritize their mental well-being.
            Get support, track your mood, and connect with professionals.
          </p>
          <button
            onClick={() => navigate("/sign-up")}
            className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-all flex items-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-boxcolor backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-headingcolor mb-2">
              Track Your Mood
            </h3>
            <p className="text-descriptioncolor">
              Monitor your emotional well-being with our daily mood tracker.
            </p>
          </div>
          <div className="bg-boxcolor backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-headingcolor mb-2">
              Professional Support
            </h3>
            <p className="text-subheadingcolor">
              Connect with licensed therapists and counselors.
            </p>
          </div>
          <div className="bg-boxcolor backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-headingcolor mb-2">
              Private & Secure
            </h3>
            <p className="text-subheadingcolor">
              Your data is protected with enterprise-grade security.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
