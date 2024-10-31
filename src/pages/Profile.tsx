import React from 'react';
import { Settings, Grid, Play, Bookmark } from 'lucide-react';

function Profile() {
  const user = {
    name: 'Alice Creative',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop',
    bio: 'Digital creator & Web3 enthusiast\n🎨 Creating daily content\n🌟 Open for brand collaborations',
    followers: '10.5K',
    following: '892',
    posts: '156',
  };

  const content = [
    {
      id: 1,
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
    },
    {
      id: 3,
      type: 'reel',
      thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="max-w-[935px] mx-auto">
      <div className="mb-8">
        <div className="flex items-start gap-8">
          <img src={user.avatar} alt={user.name} className="w-36 h-36 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-xl">{user.name}</h1>
              <button className="px-4 py-1.5 bg-purple-600 rounded-lg text-sm font-semibold">
                Edit Profile
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex space-x-8 mb-4">
              <div>
                <span className="font-semibold">{user.posts}</span>
                <span className="text-gray-400 ml-1">posts</span>
              </div>
              <div>
                <span className="font-semibold">{user.followers}</span>
                <span className="text-gray-400 ml-1">followers</span>
              </div>
              <div>
                <span className="font-semibold">{user.following}</span>
                <span className="text-gray-400 ml-1">following</span>
              </div>
            </div>
            
            <div className="whitespace-pre-line text-sm">{user.bio}</div>
          </div>
        </div>
      </div>

      <div className="flex border-t border-gray-800 mb-6">
        <button className="flex items-center space-x-2 px-12 py-3 border-t-2 border-purple-500">
          <Grid className="w-4 h-4" />
          <span className="text-xs font-semibold">POSTS</span>
        </button>
        <button className="flex items-center space-x-2 px-12 py-3 text-gray-400 hover:text-white">
          <Play className="w-4 h-4" />
          <span className="text-xs font-semibold">REELS</span>
        </button>
        <button className="flex items-center space-x-2 px-12 py-3 text-gray-400 hover:text-white">
          <Bookmark className="w-4 h-4" />
          <span className="text-xs font-semibold">SAVED</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {content.map((item) => (
          <div key={item.id} className="relative aspect-square group cursor-pointer">
            <img
              src={item.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="uppercase text-sm font-semibold">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;