import React, { useState } from 'react';
import { Search } from 'lucide-react';

const categories = ['For You', 'Trending', 'Music', 'Gaming', 'Art', 'Technology', 'Fashion'];

const content = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=300&h=300&fit=crop',
    type: 'reel',
    views: '45.2K',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
    type: 'video',
    views: '32.1K',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=300&fit=crop',
    type: 'image',
    views: '28.9K',
  },
];

function Explore() {
  const [activeCategory, setActiveCategory] = useState('For You');

  return (
    <div className="max-w-[935px] mx-auto">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 rounded-lg pl-10 pr-4 py-2 border border-gray-800"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-900 text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
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
              <div className="text-center">
                <p className="text-sm font-semibold">{item.views} views</p>
                <p className="text-xs uppercase">{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;