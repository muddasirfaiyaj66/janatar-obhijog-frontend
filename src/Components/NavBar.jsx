import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-router";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        className="w-full bg-white shadow-sm font-sans"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo and App Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10"
                src={"../../public/logoTransparent.png"}
                alt="Logo"
              />
            </div>
            <Link to={'/'}>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">
                  জনতার অভিযোগ
                </span>
                <span className="text-sm text-gray-500">
                  Digital Complaint Box
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors btn">
              <Globe className="h-4 w-4" />
              <span className="text-base">English</span>
            </button>
            <Link to={"/signin"}>
              <button
             
                className="px-5 py-2 text-base font-semibold text-gray-700 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors"
              >
                <p>লগইন করুন</p>
              </button>
            </Link>

            <Link to={"/signup"}>
              <button className="px-5 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 transition-colors">
                শুরু করুন
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="text-base">English</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="bg-gray-50 px-2 pt-2 pb-3 space-y-2">
                <Link to={'/signIn'}>
                  <button className="w-full px-5 py-2 text-base font-semibold text-gray-700 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
                    লগইন করুন
                  </button>
                </Link>
                <Link to={'/signUp'}>
                  <button className="w-full px-5 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 transition-colors">
                    শুরু করুন
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default NavBar;
