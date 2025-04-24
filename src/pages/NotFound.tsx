
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="inline-block mb-8 purple-glow">
            <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              404
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
