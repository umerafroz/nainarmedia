import React from 'react';
import { Search } from 'lucide-react';

const conversations = [
  {
    id: 1,
    user: 'Alice Creative',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop',
    lastMessage: 'Hey, loved your latest content!',
    time: '2m ago',
    unread: true,
  },
  // Add more conversations
];

function Inbox() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-gray-900 rounded-lg pl-10 pr-4 py-2"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="flex items-center space-x-4 p-4 hover:bg-gray-800 cursor-pointer border-b border-gray-800"
          >
            <img src={conv.avatar} alt={conv.user} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{conv.user}</h3>
                <span className="text-sm text-gray-400">{conv.time}</span>
              </div>
              <p className="text-sm text-gray-400">{conv.lastMessage}</p>
            </div>
            {conv.unread && (
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;