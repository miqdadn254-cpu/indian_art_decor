import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.products', href: '/products' },
  { key: 'nav.categories', href: '/categories' },
  { key: 'nav.contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language, setLanguage, t, direction } = useLanguage();
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-heritage-charcoal text-heritage-cream">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-heading text-xl font-semibold tracking-wide text-heritage-gold md:text-2xl">
              Indian
            </span>
            <span className="text-xs tracking-[0.2em] text-heritage-cream/80">
              Home Art
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              className={`nav-link text-sm font-medium transition-colors ${isActive(item.href)
                  ? 'text-heritage-gold'
                  : 'text-heritage-cream/80 hover:text-heritage-cream'
                }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-heritage-cream/80 hover:bg-heritage-dark hover:text-heritage-cream"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-heritage-cream/80 hover:bg-heritage-dark hover:text-heritage-cream"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={direction === 'rtl' ? 'start' : 'end'}>
              <DropdownMenuItem
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'bg-secondary' : ''}
              >
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage('ar')}
                className={language === 'ar' ? 'bg-secondary' : ''}
              >
                🇰🇼 العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Account */}
          <Link to="/login">
            <Button
              variant="ghost"
              size="icon"
              className="text-heritage-cream/80 hover:bg-heritage-dark hover:text-heritage-cream"
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-heritage-cream/80 hover:bg-heritage-dark hover:text-heritage-cream"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-heritage-gold text-xs font-medium text-heritage-charcoal">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-heritage-cream/80 hover:bg-heritage-dark hover:text-heritage-cream lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-heritage-dark"
          >
            <div className="container py-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t('nav.search')}
                  className="w-full rounded-sm bg-heritage-dark py-3 pl-12 pr-4 text-heritage-cream placeholder:text-heritage-cream/50 focus:outline-none focus:ring-2 focus:ring-heritage-gold"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-heritage-dark lg:hidden"
          >
            <nav className="container flex flex-col gap-2 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-sm px-4 py-3 text-sm font-medium transition-colors ${isActive(item.href)
                      ? 'bg-heritage-gold text-heritage-charcoal'
                      : 'text-heritage-cream/80 hover:bg-heritage-dark hover:text-heritage-cream'
                    }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
