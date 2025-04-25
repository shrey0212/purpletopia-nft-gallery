
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Button from '@/components/Button';

interface FilterSidebarProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  creators: Array<{ id: number; name: string; }>;
  saleTypes: Array<{ id: string; label: string; }>;
  isMobileFilterOpen: boolean;
  toggleMobileFilter: () => void;
}

export function FilterSidebar({
  priceRange,
  setPriceRange,
  creators,
  saleTypes,
  isMobileFilterOpen,
  toggleMobileFilter
}: FilterSidebarProps) {
  return (
    <>
      {/* Filter Sidebar (Desktop) */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-secondary rounded-xl p-6 sticky top-24">
          <h3 className="font-medium text-lg mb-6">Filters</h3>
          
          {/* Price Range */}
          <div className="mb-8">
            <h4 className="font-medium mb-4">Price Range (ETH)</h4>
            <Slider 
              defaultValue={[0, 100]} 
              max={100} 
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">{priceRange[0]} ETH</span>
              <span className="text-sm text-gray-400">{priceRange[1]} ETH</span>
            </div>
          </div>
          
          {/* Creator Filter */}
          <div className="mb-8">
            <h4 className="font-medium mb-4">Creators</h4>
            <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
              {creators.map(creator => (
                <div key={creator.id} className="flex items-center">
                  <Checkbox id={`creator-${creator.id}`} className="border-gray-600" />
                  <label htmlFor={`creator-${creator.id}`} className="ml-2 text-sm text-gray-300 cursor-pointer">
                    {creator.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sale Type */}
          <div className="mb-8">
            <h4 className="font-medium mb-4">Sale Type</h4>
            <div className="space-y-3">
              {saleTypes.map(type => (
                <div key={type.id} className="flex items-center">
                  <Checkbox id={`sale-${type.id}`} className="border-gray-600" />
                  <label htmlFor={`sale-${type.id}`} className="ml-2 text-sm text-gray-300 cursor-pointer">
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Clear Filters Button */}
          <Button variant="secondary" className="w-full">
            Clear Filters
          </Button>
        </div>
      </aside>
    </>
  );
}
