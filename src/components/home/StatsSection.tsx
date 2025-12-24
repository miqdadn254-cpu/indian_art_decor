import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  { key: 'stats.clients', value: '3472+' },
  { key: 'stats.products', value: '5929+' },
  { key: 'stats.homes', value: '2997+' },
  { key: 'stats.years', value: '16+' },
];

export const StatsSection = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <section ref={ref} className="border-y border-border py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="font-heading text-4xl font-semibold text-heritage-gold md:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {t(stat.key)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';
