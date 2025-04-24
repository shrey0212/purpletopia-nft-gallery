
import React from 'react';

interface CollectionCardProps {
  thumbnail: string;
  name: string;
  floorPrice: string;
  volume: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  thumbnail,
  name,
  floorPrice,
  volume
}) => {
  return (
    <div className="min-w-[260px] bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:purple-glow">
      <div className="relative h-40">
        <img 
          src={thumbnail} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <div className="flex justify-between mt-2 text-sm">
          <div>
            <p className="text-gray-400">Floor</p>
            <p className="font-medium">{floorPrice} ETH</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Volume</p>
            <p className="font-medium">{volume} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
