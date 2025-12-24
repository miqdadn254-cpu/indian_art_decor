import { motion } from 'framer-motion';
import { ArrowRight, Shield, Home, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const trustIndicators = [
  { icon: Award, key: 'hero.trust1' },
  { icon: Home, key: 'hero.trust2' },
  { icon: Shield, key: 'hero.trust3' },
];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Heritage Home Décor"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-charcoal/95 via-heritage-charcoal/80 to-heritage-charcoal/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[90vh] items-center py-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-heritage-gold/30 bg-heritage-gold/10 px-4 py-1.5 font-medium tracking-[0.15em] text-heritage-gold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-heritage-gold" />
            {t('hero.tagline')}
          </motion.p>

          {/* Main Headline - Emotional Value Prop */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-semibold leading-tight text-heritage-cream md:text-5xl lg:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-heritage-cream/85 md:text-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs - Primary action emphasized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link to="/products?sort=bestseller" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group h-12 w-full bg-heritage-gold px-6 text-base font-semibold text-heritage-charcoal shadow-heritage-glow transition-all hover:bg-heritage-gold-light hover:shadow-lg sm:h-14 sm:w-auto sm:px-8"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 rtl:ml-0 rtl:mr-2 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full border-2 border-heritage-cream/40 bg-transparent px-6 text-base text-heritage-cream transition-all hover:border-heritage-cream hover:bg-heritage-cream hover:text-heritage-charcoal sm:h-14 sm:w-auto sm:px-8"
              >
                {t('hero.secondary')}
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-6 border-t border-heritage-cream/20 pt-8"
          >
            {trustIndicators.map((item, index) => (
              <div key={item.key} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-heritage-gold/20">
                  <item.icon className="h-5 w-5 text-heritage-gold" />
                </div>
                <span className="text-sm font-medium text-heritage-cream/90">{t(item.key)}</span>
                {index < trustIndicators.length - 1 && (
                  <div className="ml-3 hidden h-8 w-px bg-heritage-cream/20 md:block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-heritage-cream/50">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-px bg-gradient-to-b from-heritage-cream/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
