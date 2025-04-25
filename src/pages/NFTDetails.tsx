
import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share, Eye } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NFTDetails = () => {
  const { id } = useParams();

  // This would normally come from an API, but for now we'll use mock data
  const nft = {
    id,
    name: 'Cosmic Harmony #238',
    description: 'A unique piece exploring the harmony between digital art and cosmic elements. This NFT represents the convergence of technology and spiritual energy in the digital age.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    creator: {
      name: 'AstralArtist',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
      verified: true
    },
    price: '2.5',
    likes: 423,
    views: 1205,
    collection: 'Cosmic Series',
    tokenId: '238',
    blockchain: 'Ethereum',
    lastSale: '2.1'
  };

  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - NFT Image */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-secondary">
              <img 
                src={nft.image} 
                alt={nft.name}
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
            
            {/* Collection Info */}
            <Card>
              <CardHeader className="text-lg font-semibold">Collection Details</CardHeader>
              <CardContent className="space-y-2">
                <p><span className="text-muted-foreground">Collection:</span> {nft.collection}</p>
                <p><span className="text-muted-foreground">Token ID:</span> {nft.tokenId}</p>
                <p><span className="text-muted-foreground">Blockchain:</span> {nft.blockchain}</p>
                <p><span className="text-muted-foreground">Last Sale:</span> {nft.lastSale} ETH</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - NFT Details */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{nft.name}</h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <Heart
                    size={24}
                    className={isLiked ? 'fill-purple-500 text-purple-500' : 'text-muted-foreground'}
                  />
                </button>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Share size={24} className="text-muted-foreground" />
                </button>
              </div>
            </div>
            
            {/* Creator Info */}
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={nft.creator.avatar} alt={nft.creator.name} />
                <AvatarFallback>{nft.creator.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">Creator</p>
                <p className="font-semibold">{nft.creator.name}</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Heart size={16} />
                <span>{nft.likes} likes</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={16} />
                <span>{nft.views} views</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground">{nft.description}</p>
            </div>
            
            {/* Price and Action */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="text-3xl font-bold">{nft.price} ETH</p>
                  </div>
                  <Button variant="primary" size="lg">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NFTDetails;
