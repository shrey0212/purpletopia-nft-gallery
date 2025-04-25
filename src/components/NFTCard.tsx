import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Button from './Button';

interface NFTCardProps {
  id?: number;
  image: string;
  name: string;
  creatorName: string;
  creatorAvatar: string;
  price: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ 
  id = 1,  // Default to 1 if no id provided
  image, 
  name, 
  creatorName, 
  creatorAvatar, 
  price 
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Link to={`/nft/${id}`} className="block">
      <div className="bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:purple-glow">
        <div className="relative">
          <div className="relative pt-[56.25%]">
            <img 
              src={image} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <button 
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-sm transition-transform hover:scale-110"
          >
            <Heart 
              size={18} 
              className={`${isFavorited ? 'fill-purple-500 text-purple-500' : 'text-white'}`}
            />
          </button>
        </div>
        
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          
          <div className="flex items-center space-x-2">
            <img 
              src={creatorAvatar} 
              alt={creatorName}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-gray-300">{creatorName}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-xs text-gray-400">Current Price</p>
              <p className="font-semibold">{price} ETH</p>
            </div>
            <Button variant="primary" size="sm">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
