import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const trustBadges = [
  { icon: Shield, text: 'Secure Checkout' },
  { icon: Truck, text: 'Kuwait-Wide Delivery' },
  { icon: Headphones, text: '24/7 Support' },
];

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-heritage-charcoal py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-heritage-gold blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-heritage-gold blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-2xl font-semibold text-heritage-gold md:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-lg text-heritage-cream/80">
            {t('cta.subtitle')}
          </p>
          
          {/* Primary CTA */}
          <Link to="/products?sort=bestseller" className="mt-8 inline-block">
            <Button
              size="lg"
              className="group h-14 bg-heritage-gold px-10 text-base font-semibold text-heritage-charcoal shadow-heritage-glow transition-all hover:bg-heritage-gold-light hover:shadow-lg"
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Reassurance Text */}
          <p className="mt-6 text-sm text-heritage-cream/60">
            {t('cta.reassurance')}
          </p>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-heritage-cream/10 pt-10">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-heritage-gold/10">
                  <badge.icon className="h-5 w-5 text-heritage-gold" />
                </div>
                <span className="text-sm font-medium text-heritage-cream/80">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
