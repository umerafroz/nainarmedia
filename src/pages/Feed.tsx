import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

const posts = [
  {
    id: 1,
    creator: 'Alice Creative',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop',
    content: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=600&h=600&fit=crop',
    caption: 'Creating amazing content for my awesome community! 🚀 #creativity #digitalart',
    type: 'image',
    likes: 1234,
    comments: 89,
    timeAgo: '2h',
  },
  {
    id: 2,
    creator: 'Brand Studio',
    avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=64&h=64&fit=crop',
    content: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop',
    caption: 'Behind the scenes of our latest campaign shoot 📸 #brandstudio #marketing',
    type: 'image',
    likes: 892,
    comments: 45,
    timeAgo: '4h',
  }
];

function Feed() {
  return (
    <div className="max-w-[470px] mx-auto space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
          <div className="p-3 flex items-center space-x-3">
            <img src={post.avatar} alt={post.creator} className="w-8 h-8 rounded-full object-cover" />
            <div className="flex-1">
              <span className="font-semibold text-sm">{post.creator}</span>
              <span className="text-xs text-gray-400 ml-2">{post.timeAgo}</span>
            </div>
            <button className="text-gray-400 hover:text-white">•••</button>
          </div>
          
          <img src={post.content} alt="" className="w-full aspect-square object-cover" />
          
          <div className="p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
              <button className="text-gray-400 hover:text-white">
                <Bookmark className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold">{post.likes.toLocaleString()} likes</p>
              <p className="text-sm">
                <span className="font-semibold">{post.creator}</span>{' '}
                {post.caption}
              </p>
              <button className="text-gray-400 text-sm">
                View all {post.comments} comments
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;