import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.products', href: '/products' },
  { key: 'nav.contact', href: '/contact' },
];

const categories = [
  { key: 'category.furniture', href: '/products?category=furniture' },
  { key: 'category.decor', href: '/products?category=decor' },
  { key: 'category.doors', href: '/products?category=doors' },
  { key: 'category.carpets', href: '/products?category=carpets' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-heritage-charcoal text-heritage-cream">
      {/* Newsletter Section */}
      <div className="border-b border-heritage-dark">
        <div className="container py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-heritage-gold">
                {t('footer.newsletter')}
              </h3>
              <p className="mt-2 text-heritage-cream/70">
                Subscribe to receive updates on new arrivals and special offers.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 rounded-sm bg-heritage-dark px-4 py-3 text-heritage-cream placeholder:text-heritage-cream/50 focus:outline-none focus:ring-2 focus:ring-heritage-gold"
              />
              <Button className="bg-heritage-gold text-heritage-charcoal hover:bg-heritage-gold-light">
                {t('footer.newsletter.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-heading text-xl font-semibold tracking-wide text-heritage-gold">
                  Heritage
                </span>
                <span className="text-xs tracking-[0.2em] text-heritage-cream/80">
                  Home Art
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm italic text-heritage-cream/70">
              "{t('footer.tagline')}"
            </p>
            <p className="mt-2 text-xs text-heritage-cream/50">- Harvey Fierstein</p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-heritage-dark text-heritage-cream/70 transition-colors hover:bg-heritage-gold hover:text-heritage-charcoal"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-heritage-dark text-heritage-cream/70 transition-colors hover:bg-heritage-gold hover:text-heritage-charcoal"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-heritage-dark text-heritage-cream/70 transition-colors hover:bg-heritage-gold hover:text-heritage-charcoal"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-heritage-gold">
              {t('footer.quicklinks')}
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-sm text-heritage-cream/70 transition-colors hover:text-heritage-gold"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-heritage-gold">
              {t('footer.categories')}
            </h4>
            <ul className="mt-4 space-y-3">
              {categories.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-sm text-heritage-cream/70 transition-colors hover:text-heritage-gold"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-heritage-gold">
              {t('footer.contact')}
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-heritage-gold" />
                <span className="text-sm text-heritage-cream/70">
                  Kuwait City, Kuwait
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-heritage-gold" />
                <span className="text-sm text-heritage-cream/70">
                  +965 1234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-heritage-gold" />
                <span className="text-sm text-heritage-cream/70">
                  info@heritagehomeart.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-heritage-dark">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-heritage-cream/50">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm text-heritage-cream/50">
            <Link to="/privacy" className="hover:text-heritage-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-heritage-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
