import React, { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FilterSidebar } from '@/components/collections/FilterSidebar';
import { SearchSort } from '@/components/collections/SearchSort';
import { NFTGrid } from '@/components/collections/NFTGrid';

const CollectionsPage = () => {
  // State for filters
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          {/* Filter Sidebar */}
          <FilterSidebar 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            creators={creators}
            saleTypes={saleTypes}
            isMobileFilterOpen={isMobileFilterOpen}
            toggleMobileFilter={toggleMobileFilter}
          />

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
                
                <FilterSidebar 
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  creators={creators}
                  saleTypes={saleTypes}
                  isMobileFilterOpen={isMobileFilterOpen}
                  toggleMobileFilter={toggleMobileFilter}
                />
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search & Sort Component */}
            <SearchSort 
              viewMode={viewMode}
              setViewMode={setViewMode}
              statusFilters={statusFilters}
            />

            {/* NFT Grid */}
            <NFTGrid 
              nfts={nfts}
              isLoading={isLoading}
              viewMode={viewMode}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CollectionsPage;
