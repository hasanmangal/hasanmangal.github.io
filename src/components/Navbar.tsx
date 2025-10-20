import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/about' },
  { name: 'Ürünlerimiz', href: '/products' },
  { name: 'İletişim', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-3 group">
          {/* Logo image */}
          <img
            src="/logo-posnox.png"
            alt="posNox logo"
            className="h-10 w-10 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
            style={{ background: 'white', borderRadius: '12px' }}
          />
          <span className="text-2xl font-extrabold text-primary-700 tracking-tight">posNox</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-base font-semibold px-3 py-2 rounded-lg transition-all duration-200
                ${location.pathname === item.href
                  ? 'text-primary-700 bg-primary-50 shadow-sm'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'}
              `}
            >
              {item.name}
              {location.pathname === item.href && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-primary-200"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-primary-700 hover:scale-105 transition-all"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <HiX className="h-7 w-7" />
          ) : (
            <HiMenu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-primary-100"
          >
            <div className="container space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-lg px-4 py-3 text-lg font-semibold transition-all duration-200
                    ${location.pathname === item.href
                      ? 'text-primary-700 bg-primary-50 shadow'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'}
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block rounded-lg px-4 py-3 text-lg font-semibold text-white bg-primary-600 shadow-lg hover:bg-primary-700 hover:scale-105 transition-all mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 