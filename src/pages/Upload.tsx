import React, { useState } from 'react';
import { Upload as UploadIcon, Info, DollarSign } from 'lucide-react';

function Upload() {
  const [dragActive, setDragActive] = useState(false);
  const [monetizationType, setMonetizationType] = useState<'none' | 'paid' | 'ads'>('none');
  const [price, setPrice] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const calculateEarnings = (price: string) => {
    const amount = parseFloat(price) || 0;
    const platformFee = amount * 0.25;
    const creatorEarnings = amount - platformFee;
    return { platformFee, creatorEarnings };
  };

  const { platformFee, creatorEarnings } = calculateEarnings(price);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Upload Content</h1>
      
      <div
        className={`border-2 border-dashed rounded-xl p-12 text-center ${
          dragActive ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <UploadIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-lg mb-2">Drag and drop your files here</p>
        <p className="text-sm text-gray-400 mb-4">or</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
          Browse Files
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Supported formats: MP4, MOV, JPG, PNG (Max 100MB)
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Content Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2"
              rows={4}
              placeholder="Enter description"
            />
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Monetization Options</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setMonetizationType('ads')}
                  className={`flex-1 p-4 rounded-lg border-2 ${
                    monetizationType === 'ads'
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <DollarSign className="w-6 h-6 mb-2" />
                  <h4 className="font-medium">Ad Revenue</h4>
                  <p className="text-sm text-gray-400">Earn from ad views (75/25 split)</p>
                </button>
                
                <button
                  onClick={() => setMonetizationType('paid')}
                  className={`flex-1 p-4 rounded-lg border-2 ${
                    monetizationType === 'paid'
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <Info className="w-6 h-6 mb-2" />
                  <h4 className="font-medium">Paid Content</h4>
                  <p className="text-sm text-gray-400">Set price for access</p>
                </button>
              </div>
              
              {monetizationType === 'paid' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Price (SOL)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                      placeholder="0.00"
                    />
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4 text-sm">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Platform Fee (25%)</span>
                      <span>{platformFee.toFixed(3)} SOL</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>Your Earnings (75%)</span>
                      <span>{creatorEarnings.toFixed(3)} SOL</span>
                    </div>
                  </div>
                </div>
              )}
              
              {monetizationType === 'ads' && (
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Ad Revenue Sharing</h4>
                  <ul className="text-sm space-y-2 text-gray-400">
                    <li>• Earn 75% of ad revenue generated from your content</li>
                    <li>• Ads automatically placed at optimal positions</li>
                    <li>• Revenue based on views and engagement</li>
                    <li>• Minimum 1000 views required for ad activation</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
            Upload Content
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;