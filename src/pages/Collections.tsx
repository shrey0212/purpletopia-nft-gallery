
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, SlidersHorizontal, Grid, List } from 'lucide-react';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NFTCard from '@/components/NFTCard';

const CollectionsPage = () => {
  // State for filters
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sample NFT data
  const nfts = [
    {
      id: 1,
      name: "Cosmic Harmony #238",
      image: "https://images.unsplash.com/photo-1583202061695-0c9164cf4d22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "AstralArtist",
      creatorAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "2.5",
    },
    {
      id: 2,
      name: "Digital Dreams #42",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "PixelPioneers",
      creatorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "1.8",
    },
    {
      id: 3,
      name: "Abstract Echoes",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "TechnoArt",
      creatorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "3.2",
    },
    {
      id: 4,
      name: "Neon Wilderness",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "DigitalDreamer",
      creatorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "5.4",
    },
    {
      id: 5,
      name: "Ethereal Landscape",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "VirtualVisions",
      creatorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "2.2",
    },
    {
      id: 6,
      name: "Cyberspace Odyssey",
      image: "https://images.unsplash.com/photo-1578632767815-f9c5a1d30257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "FutureFusion",
      creatorAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "4.6",
    },
    {
      id: 7,
      name: "Digital Genesis",
      image: "https://images.unsplash.com/photo-1633467067670-7c41f13eda69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "CryptoCreator",
      creatorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "1.9",
    },
    {
      id: 8,
      name: "Quantum Reflections",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f2c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      creatorName: "DigitalAlchemist",
      creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      price: "3.7",
    },
  ];

  // Creators
  const creators = [
    { id: 1, name: "AstralArtist" },
    { id: 2, name: "PixelPioneers" },
    { id: 3, name: "TechnoArt" },
    { id: 4, name: "DigitalDreamer" },
    { id: 5, name: "VirtualVisions" },
  ];

  // Sale types
  const saleTypes = [
    { id: "buyNow", label: "Buy Now" },
    { id: "auction", label: "Auction" },
    { id: "new", label: "New" },
  ];

  // Status filters
  const statusFilters = [
    { value: "recent", label: "Recently Added" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "trending", label: "Trending" },
  ];

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Explore Collections</h1>
          <p className="text-gray-400 mt-2">Discover the best NFT collections from artists around the world</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
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

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2" onClick={toggleMobileFilter}>
              <SlidersHorizontal size={18} />
              Filters
            </Button>
          </div>

          {/* Mobile Filter Sidebar */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 lg:hidden overflow-y-auto">
              <div className="bg-background p-6 max-w-sm mx-auto my-8 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium text-lg">Filters</h3>
                  <button onClick={toggleMobileFilter} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                
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
                  <div className="space-y-3">
                    {creators.map(creator => (
                      <div key={creator.id} className="flex items-center">
                        <Checkbox id={`mobile-creator-${creator.id}`} className="border-gray-600" />
                        <label htmlFor={`mobile-creator-${creator.id}`} className="ml-2 text-sm text-gray-300 cursor-pointer">
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
                        <Checkbox id={`mobile-sale-${type.id}`} className="border-gray-600" />
                        <label htmlFor={`mobile-sale-${type.id}`} className="ml-2 text-sm text-gray-300 cursor-pointer">
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="secondary" className="flex-1">
                    Clear
                  </Button>
                  <Button variant="primary" className="flex-1" onClick={toggleMobileFilter}>
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search & Sort Component */}
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

            {/* NFT Grid */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
              {nfts.length > 0 ? (
                nfts.map((nft) => (
                  <NFTCard
                    key={nft.id}
                    image={nft.image}
                    name={nft.name}
                    creatorName={nft.creatorName}
                    creatorAvatar={nft.creatorAvatar}
                    price={nft.price}
                  />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="rounded-full bg-gray-800 p-4 mb-4">
                    <Search size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No NFTs found</h3>
                  <p className="text-gray-400 max-w-md">
                    We couldn't find any NFTs matching your search criteria. Try adjusting your filters or search terms.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination (could be replaced with infinite scroll) */}
            <div className="mt-12 flex justify-center">
              <nav className="flex space-x-1">
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
                  Previous
                </button>
                <button className="px-3 py-1 rounded-md bg-purple-700 text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
                  2
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
                  3
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const X = ({ size = 24, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default CollectionsPage;
