import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Search, TrendingUp } from 'lucide-react';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NFTCard from '@/components/NFTCard';
import CollectionCard from '@/components/CollectionCard';

const LandingPage = () => {
  // Sample data for NFTs
  const trendingCollections = [
    {
      id: 1,
      name: "Bored Ape Yacht Club",
      thumbnail: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
      floorPrice: "68.5",
      volume: "845.12",
    },
    {
      id: 2,
      name: "CryptoPunks",
      thumbnail: "https://images.unsplash.com/photo-1613208602577-94e7235f8665",
      floorPrice: "42.3",
      volume: "513.78",
    },
    {
      id: 3,
      name: "Art Blocks Curated",
      thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
      floorPrice: "3.4",
      volume: "102.74",
    },
    {
      id: 4,
      name: "Azuki",
      thumbnail: "https://images.unsplash.com/photo-1616860317441-ff581c00ad89",
      floorPrice: "12.7",
      volume: "321.09",
    },
    {
      id: 5,
      name: "Doodles",
      thumbnail: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
      floorPrice: "6.8",
      volume: "97.45",
    },
    {
      id: 6,
      name: "CloneX",
      thumbnail: "https://images.unsplash.com/photo-1633467067670-7c41f13eda69",
      floorPrice: "9.2",
      volume: "156.38",
    },
  ];

  const featuredNFTs = [
    {
      id: 1,
      name: "Cosmic Harmony #238",
      image: "https://images.unsplash.com/photo-1583202061695-0c9164cf4d22",
      creatorName: "AstralArtist",
      creatorAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      price: "2.5",
    },
    {
      id: 2,
      name: "Digital Dreams #42",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca",
      creatorName: "PixelPioneers",
      creatorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
      price: "1.8",
    },
    {
      id: 3,
      name: "Abstract Echoes",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
      creatorName: "TechnoArt",
      creatorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      price: "3.2",
    },
  ];

  const testimonials = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f",
      quote: "PurpleTopia has completely transformed how I collect digital art. The platform is intuitive and the community is incredible.",
      name: "Michael Johnson",
      title: "Digital Art Collector",
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
      quote: "As an artist, I've found my audience on PurpleTopia. Their focus on creator rights and the seamless minting process is unmatched.",
      name: "Sarah Williams",
      title: "NFT Creator",
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "The support from the PurpleTopia team has been outstanding. They truly care about building a sustainable ecosystem for digital collectibles.",
      name: "David Chen",
      title: "Crypto Investor",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/30 to-black z-0"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-64 h-64 rounded-full bg-purple-700/20 blur-3xl top-20 left-20 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl bottom-10 right-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl top-40 right-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 pt-20 pb-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Discover, Collect, and Sell Extraordinary NFTs
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Marketplace for non-fungible tokens. Buy, sell, and discover exclusive digital assets.
              </p>
              <div className="flex space-x-4">
                <Link to="/collections">
                  <Button variant="primary" size="lg">
                    Explore NFTs
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  Create
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Featured Artwork */}
                <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl animate-float purple-glow">
                  <img 
                    src="https://img-cdn.tnwcdn.com/image?url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F03%2F1_4OjfTFl_CSbMvxpkZpmZZQ.jpeg&signature=9c6f0d2f565d5cc711897c2d439bc3f3" 
                    alt="Featured NFT Artwork - Beeple's Everydays: The First 5000 Days" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Collections Section */}
      <section className="py-16 bg-gradient-to-b from-background to-black/80">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Trending Collections</h2>
            <Link to="/collections">
              <Button variant="text">
                View all
              </Button>
            </Link>
          </div>
          
          {/* Collections Scrollable Row */}
          <div className="relative">
            <div className="overflow-x-auto pb-4 -mx-6 px-6">
              <div className="flex space-x-4">
                {trendingCollections.map((collection) => (
                  <CollectionCard 
                    key={collection.id}
                    thumbnail={collection.thumbnail}
                    name={collection.name}
                    floorPrice={collection.floorPrice}
                    volume={collection.volume}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16" id="how-it-works">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="glass-card rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="rounded-full bg-purple-900/50 p-5 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Wallet size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect Your Wallet</h3>
              <p className="text-gray-400">
                Connect with one of our available wallet providers or create a new one.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="glass-card rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="rounded-full bg-purple-900/50 p-5 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Search size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Explore NFTs</h3>
              <p className="text-gray-400">
                Browse through our diverse collection of NFTs from top artists worldwide.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="glass-card rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="rounded-full bg-purple-900/50 p-5 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Buy or Sell</h3>
              <p className="text-gray-400">
                Trade NFTs securely and easily with our smart contract technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <section className="py-16 bg-gradient-to-t from-purple-900/10 to-transparent">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Featured NFTs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNFTs.map((nft) => (
              <NFTCard
                key={nft.id}
                image={nft.image}
                name={nft.name}
                creatorName={nft.creatorName}
                creatorAvatar={nft.creatorAvatar}
                price={nft.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-secondary/50 border border-gray-800 rounded-xl p-6 relative hover:border-purple-500/30 transition-colors"
              >
                <div className="mb-6">
                  <svg width="45" height="36" className="text-purple-500/60" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 18H9C9 12.477 13.477 8 19 8V13.5C16.0152 13.5 13.5 16.0152 13.5 19V36H0V19C0 12.6364 5.16548 7.47092 11.529 7.47092C12.2137 7.47092 12.8808 7.55828 13.5 7.72427V18ZM40.5 18H36C36 12.477 40.477 8 46 8V13.5C43.0152 13.5 40.5 16.0152 40.5 19V36H27V19C27 12.6364 32.1655 7.47092 38.529 7.47092C39.2137 7.47092 39.8808 7.55828 40.5 7.72427V18Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <p className="mb-6 text-gray-300">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-purple-700/10 to-purple-900/20 z-0 animate-gradient-shift"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your NFT journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join thousands of artists and collectors in the world's most vibrant digital marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collections">
                <Button variant="primary" size="lg">
                  Explore Collections
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                Create an Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
