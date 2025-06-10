import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3
      }
    })
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -10 },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/careers", label: "Careers" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-slate-800 text-white py-4 px-6 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={logoVariants}
        >
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-blue-400">Code</span>
            <span className="text-white">Forge</span>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              custom={index}
              initial="initial"
              animate="animate"
              variants={navItemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <Link 
                to={link.to} 
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="md:hidden">
          <motion.button 
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 shadow-lg py-4"
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
        >
          <div className="container mx-auto px-6 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <motion.div 
                key={link.to}
                variants={mobileItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={link.to} 
                  className="block py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}; 