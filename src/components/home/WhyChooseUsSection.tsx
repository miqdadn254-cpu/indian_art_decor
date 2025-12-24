import { motion } from 'framer-motion';
import { Award, Shield, Palette, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  {
    titleKey: 'why.authenticity',
    descKey: 'why.authenticity.desc',
    icon: Award,
  },
  {
    titleKey: 'why.heritage',
    descKey: 'why.heritage.desc',
    icon: Shield,
  },
  {
    titleKey: 'why.quality',
    descKey: 'why.quality.desc',
    icon: Star,
  },
  {
    titleKey: 'why.unique',
    descKey: 'why.unique.desc',
    icon: Palette,
  },
];

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-secondary py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-semibold text-heritage-green md:text-4xl">
            {t('why.title')}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-sm bg-card p-6 text-center shadow-heritage transition-all hover:shadow-heritage-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-heritage-gold/10 text-heritage-gold transition-colors group-hover:bg-heritage-gold group-hover:text-heritage-charcoal">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {t(feature.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
