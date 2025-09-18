import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Sun, Moon, User, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Translation related logic
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
        }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and App Name */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex-shrink-0">
                <img
                  src="/logoTransparent.png"
                  alt="জনতার অভিযোগ"
                  className="h-14 w-14 object-contain"
                />
              </div>
              <div className="hidden md:flex flex-col">
                <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                  }`}>
                  জনতার অভিযোগ
                </span>
                <span className={`text-xs transition-colors ${isScrolled ? "text-gray-500 dark:text-gray-400" : "text-gray-200"
                  } font-medium tracking-wide`}>
                  Digital Complaint Box
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "text-gray-100 hover:bg-white/10"
                }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                    : "text-gray-100 hover:text-white"
                  }`}
              >
                <Globe className="h-4 w-4" />
                <span>{currentLanguage === "en" ? "English" : "বাংলা"}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentLanguage === "en"
                          ? "bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("bn")}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentLanguage === "bn"
                          ? "bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                    >
                      বাংলা
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

            <Link to="/signin">
              <button className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${isScrolled
                  ? "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  : "text-white bg-white/10 border border-white/20 hover:bg-white/20"
                }`}>
                <LogIn className="h-4 w-4" />
                <span>{t('login')}</span>
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 transition-colors">
                {t('getStarted')}
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isScrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-100"
                }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleLanguageDropdown}
              className={`p-2 rounded-md ${isScrolled ? "text-gray-600 dark:text-gray-400" : "text-gray-100"
                }`}
            >
              <Globe className="h-5 w-5" />
            </button>

            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${isScrolled
                  ? "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  : "text-gray-100 hover:text-white"
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Language dropdown for mobile */}
      <AnimatePresence>
        {isLanguageDropdownOpen && (
          <motion.div
            className={`lg:hidden border-t px-4 py-3 ${isScrolled
                ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                : "bg-gray-900 border-gray-700"
              }`}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex space-x-3">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-sm rounded-md ${currentLanguage === "en"
                    ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 font-medium"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"
                      : "text-gray-300 bg-gray-800"
                  }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("bn")}
                className={`px-3 py-1 text-sm rounded-md ${currentLanguage === "bn"
                    ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 font-medium"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"
                      : "text-gray-300 bg-gray-800"
                  }`}
              >
                বাংলা
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`lg:hidden border-t ${isScrolled
                ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                : "bg-gray-900 border-gray-700"
              }`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-4 space-y-4">
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/signin"
                  className="block mb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md ${isScrolled
                      ? "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      : "text-gray-100 bg-gray-800 hover:bg-gray-700"
                    }`}>
                    <LogIn className="h-4 w-4" />
                    <span>{t('login')}</span>
                  </button>
                </Link>
                <Link
                  to="/signup"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full px-4 py-2 text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 transition-colors">
                    {t('getStarted')}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;