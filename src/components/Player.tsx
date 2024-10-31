import React from 'react';
import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=128&fit=crop"
            alt="Current Media"
            className="w-12 h-12 rounded"
          />
          <div>
            <h4 className="text-sm font-semibold">Current Media Title</h4>
            <p className="text-xs text-gray-400">Creator Name</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <div className="p-2 rounded-full bg-white">
            <Play className="w-6 h-6 text-black" />
          </div>
          <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>
        
        <div className="flex items-center space-x-2">
          <Volume2 className="w-5 h-5 text-gray-400" />
          <div className="w-24 h-1 bg-gray-700 rounded-full">
            <div className="w-1/2 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;