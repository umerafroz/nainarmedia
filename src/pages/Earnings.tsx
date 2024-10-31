import React from 'react';
import { DollarSign, TrendingUp, Users, Activity, ArrowUpRight, ArrowDownRight, PlayCircle } from 'lucide-react';

function Earnings() {
  const stats = [
    { icon: DollarSign, label: 'Total Earnings', value: '245.50 SOL' },
    { icon: TrendingUp, label: 'Ad Revenue', value: '32.40 SOL' },
    { icon: Users, label: 'Paid Subscribers', value: '1,234' },
    { icon: Activity, label: 'Content Views', value: '45.2K' },
  ];

  const transactions = [
    {
      id: 1,
      type: 'Ad Revenue',
      content: 'Behind the Scenes',
      amount: '+0.5 SOL',
      earnings: '+0.375 SOL',
      platformFee: '0.125 SOL',
      date: '2024-03-10',
      views: '12.5K',
      status: 'completed',
    },
    {
      id: 2,
      type: 'Content Purchase',
      content: 'Tutorial Series #1',
      amount: '+1.8 SOL',
      earnings: '+1.35 SOL',
      platformFee: '0.45 SOL',
      date: '2024-03-09',
      status: 'completed',
    }
  ];

  const adPerformance = [
    {
      id: 1,
      title: 'Creative Process Revealed',
      type: 'Video',
      views: '15.2K',
      earnings: '0.82 SOL',
      cpm: '0.054 SOL',
      trend: 'up',
    },
    {
      id: 2,
      title: 'Brand Collaboration',
      type: 'Reel',
      views: '10.1K',
      earnings: '0.54 SOL',
      cpm: '0.048 SOL',
      trend: 'down',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Creator Earnings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-gray-900 p-6 rounded-xl">
            <Icon className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Earnings</h2>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm text-gray-400">{tx.content}</p>
                    {tx.views && (
                      <p className="text-xs text-purple-400 mt-1">{tx.views} views</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-green-500">{tx.amount}</p>
                    <p className="text-sm text-gray-400">{tx.date}</p>
                  </div>
                </div>
                <div className="text-sm border-t border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Platform Fee (25%)</span>
                    <span>{tx.platformFee}</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Your Earnings (75%)</span>
                    <span>{tx.earnings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Ad Performance</h2>
          <div className="space-y-4">
            {adPerformance.map((content) => (
              <div key={content.id} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <PlayCircle className="w-4 h-4 text-purple-500" />
                      <p className="font-medium truncate">{content.title}</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{content.type}</p>
                  </div>
                  {content.trend === 'up' ? (
                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
                  <div>
                    <p className="text-gray-400">Views</p>
                    <p className="font-medium">{content.views}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">CPM</p>
                    <p className="font-medium">{content.cpm}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Earned</p>
                    <p className="text-green-400">{content.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earnings;