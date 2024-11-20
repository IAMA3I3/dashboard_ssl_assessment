import React from 'react';
import { Circle } from 'lucide-react';

const GraphComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-sm">
      {/* Main Progress Circle */}
      <div className="relative w-36  aspect-square">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle 
            cx="64" 
            cy="64" 
            r="60"
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="8"
          />
          {/* Purple segment */}
          <circle 
            cx="64" 
            cy="64" 
            r="60"
            fill="none"
            stroke="#6366f1"
            strokeWidth="8"
            strokeDasharray={`${1.8 * 188.5} ${0.8 * 188.5}`}
          />
          {/* Green segment */}
          <circle 
            cx="64" 
            cy="64" 
            r="60"
            fill="none"
            stroke="#4ade80"
            strokeWidth="8"
            strokeDasharray={`${1.2 * 188.5} ${1.4 * 188.5}`}
            strokeDashoffset={-188.5 * 1.8}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">82.3%</span>
          <span className="text-sm text-gray-500">Total</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <svg className="w-full h-full -rotate-90">
              <circle 
                cx="20" 
                cy="20" 
                r="18"
                fill="none"
                stroke="#f0f0f0"
                strokeWidth="3"
              />
              <circle 
                cx="20" 
                cy="20" 
                r="18"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
                strokeDasharray="113.097"
                strokeDashoffset="28.274"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Circle className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-green-500">+18%</div>
            <div className="text-sm text-gray-500">Daily customers</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <svg className="w-full h-full -rotate-90">
              <circle 
                cx="20" 
                cy="20" 
                r="18"
                fill="none"
                stroke="#f0f0f0"
                strokeWidth="3"
              />
              <circle 
                cx="20" 
                cy="20" 
                r="18"
                fill="none"
                stroke="#4ade80"
                strokeWidth="3"
                strokeDasharray="113.097"
                strokeDashoffset="45.238"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Circle className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-green-500">+14%</div>
            <div className="text-sm text-gray-500">Weekly new customers</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <span className="text-sm text-gray-600">Current customers</span>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-sm text-gray-600">New customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;