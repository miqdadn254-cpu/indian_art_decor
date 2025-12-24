import { motion } from 'framer-motion';
import { Clock, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const highlights = [
  { icon: Clock, text: '40-200 hours per piece' },
  { icon: Users, text: 'Direct artisan partnerships' },
  { icon: Award, text: '25+ years of excellence' },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden py-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-heritage-md">
              <img
                src={heroBg}
                alt="Heritage Home Art Showroom"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border-2 border-heritage-gold/30" />
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 rounded-sm bg-heritage-charcoal p-6 shadow-heritage-md md:right-8"
            >
              <div className="text-center">
                <span className="font-heading text-3xl font-bold text-heritage-gold">5,000+</span>
                <p className="mt-1 text-sm text-heritage-cream/80">Kuwait Homes</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl font-semibold text-primary md:text-4xl">
              {t('about.title')}
            </h2>
            <div className="mt-2 h-1 w-16 bg-heritage-gold" />
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t('about.description')}
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2"
                >
                  <item.icon className="h-4 w-4 text-heritage-gold" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Quote - Craftsmanship Story */}
            <div className="mt-8 rounded-sm border-l-4 border-heritage-gold bg-secondary p-6">
              <blockquote className="font-heading text-lg italic text-foreground">
                {t('about.quote')}
              </blockquote>
              <p className="mt-4 font-medium text-heritage-gold">{t('about.author')}</p>
            </div>

            {/* Trust Points */}
            <div className="mt-8 space-y-3">
              {[
                'Every piece comes with a certificate of authenticity',
                'Direct relationships with artisan families since 1999',
                'Curated specifically for Kuwait homes',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-heritage-green" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/about">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-heritage-green-light"
                >
                  {t('common.learnMore')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
