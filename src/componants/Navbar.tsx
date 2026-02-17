import { Link, useLocation } from "react-router-dom";
import { Home, Camera, Calendar, Phone, Star } from "lucide-react";
import { Button } from "@/componants/ui/button";
import logo from "@/assets/logo11.jpeg";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tour Plans", path: "/plans" },
    { name: "Photos", path: "/photos" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileQuickLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Plans", path: "/plans", icon: Star },
    { name: "Photos", path: "/photos", icon: Camera },
    { name: "Book", path: "/booking", icon: Calendar },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Fixed Top Navbar - Simplified Responsive Design */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-3 sm:px-6 md:px-8">
          {/* Optimized Height - Smaller on mobile, grows on larger screens */}
          <div className="flex items-center justify-between h-12 md:h-14 lg:h-16 transition-all duration-300">
            
            {/* Logo - Simplified Responsive Sizing */}
            <Link to="/" className="flex-shrink-0 p-0.5">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-all"
              />
            </Link>

            {/* Navigation Links - Simplified Spacing */}
            <nav className="w-max " >
              <div className="flex items-center justify-center gap-3 md:gap-2 px-1 md:px-3 py-1 md:py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-sm">
                {mobileQuickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`group flex flex-col items-center gap-0.5 px-1.5 md:px-2.5 py-1 rounded-lg md:rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 ${
                        isActive(link.path)
                          ? "text-primary bg-primary/20 shadow-md border border-primary/30"
                          : "text-gray-600 hover:text-primary hover:bg-primary/10 active:bg-primary/20"
                      }`}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
                      <span className="text-[8px] md:text-xs font-semibold tracking-tight">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Book Now Button - Simplified */}
            <div className="flex-shrink-0 ml-1">
              <Button 
                asChild 
                size="sm" 
                className="text-xs px-3 md:px-4 py-1 md:py-1.5 font-semibold shadow-sm hover:shadow-md transition-all bg-gradient-to-r from-primary to-primary/90 text-white border-0 rounded-lg md:rounded-xl h-8 md:h-9"
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer - Matches navbar height */}
      <div className="h-12 md:h-14 lg:h-16" />
    </>
  );
};

export default Navbar;
