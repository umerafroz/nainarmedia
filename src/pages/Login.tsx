import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet } from 'lucide-react';
import useAuth from '../hooks/useAuth';

function Login() {
  const { connect } = useAuth();
  const navigate = useNavigate();

  const handleConnect = async () => {
    await connect();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Welcome to CreatorHub</h1>
        <p className="text-gray-400 text-center mb-8">
          Connect your Solana wallet to start creating and earning
        </p>
        
        <div className="space-y-4">
          <button
            onClick={handleConnect}
            className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors"
          >
            <Wallet className="w-5 h-5" />
            <span>Connect Phantom Wallet</span>
          </button>
          
          <button
            onClick={handleConnect}
            className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg transition-colors"
          >
            <Wallet className="w-5 h-5" />
            <span>Connect Solflare Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;