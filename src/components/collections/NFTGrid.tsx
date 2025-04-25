
import React from 'react';
import NFTCard from '@/components/NFTCard';
import { LoadingState } from '@/components/LoadingState';
import { EmptyState } from '@/components/EmptyState';

interface NFT {
  id: number;
  name: string;
  image: string;
  creatorName: string;
  creatorAvatar: string;
  price: string;
}

interface NFTGridProps {
  nfts: NFT[];
  isLoading: boolean;
  viewMode: 'grid' | 'list';
}

export function NFTGrid({ nfts, isLoading, viewMode }: NFTGridProps) {
  return (
    <>
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
        {isLoading ? (
          <LoadingState />
        ) : nfts.length > 0 ? (
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
          <div className="col-span-full">
            <EmptyState />
          </div>
        )}
      </div>

      {/* Pagination */}
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
    </>
  );
}
