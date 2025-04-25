
import React from 'react';
import { Search, Grid, List } from 'lucide-react';

interface SearchSortProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  statusFilters: Array<{ value: string; label: string; }>;
}

export function SearchSort({ viewMode, setViewMode, statusFilters }: SearchSortProps) {
  return (
    <div className="bg-secondary rounded-xl p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name or creator..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        {/* Sort Dropdown */}
        <div className="flex-shrink-0 w-full md:w-48">
          <select className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
            {statusFilters.map(filter => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* View Toggle */}
        <div className="flex-shrink-0 hidden md:block">
          <div className="flex border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`p-2 ${viewMode === 'grid' ? 'bg-purple-700' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={18} />
            </button>
            <button
              className={`p-2 ${viewMode === 'list' ? 'bg-purple-700' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
