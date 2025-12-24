import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

import categoryFurniture from '@/assets/category-furniture.jpg';
import categoryDecor from '@/assets/category-decor.jpg';
import categoryDoors from '@/assets/category-doors.jpg';
import categoryStone from '@/assets/category-stone.jpg';
import categoryTextile from '@/assets/category-textile.jpg';
import categoryNavigation from '@/assets/category-navigation.jpg';
import categoryCarpets from '@/assets/category-carpets.jpg';
import categoryJournals from '@/assets/category-journals.jpg';

const categories = [
  { key: 'category.furniture', image: categoryFurniture, slug: 'furniture' },
  { key: 'category.decor', image: categoryDecor, slug: 'decor' },
  { key: 'category.doors', image: categoryDoors, slug: 'doors' },
  { key: 'category.stone', image: categoryStone, slug: 'stone' },
  { key: 'category.textile', image: categoryTextile, slug: 'textile' },
  { key: 'category.navigation', image: categoryNavigation, slug: 'navigation' },
  { key: 'category.carpets', image: categoryCarpets, slug: 'carpets' },
  { key: 'category.journals', image: categoryJournals, slug: 'journals' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function CategoriesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-heritage-dark py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-semibold text-heritage-gold md:text-4xl">
            {t('categories.title')}
          </h2>
          <p className="mt-4 text-heritage-cream/70">
            {t('categories.subtitle')}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div key={category.key} variants={itemVariants}>
              <Link
                to={`/products?category=${category.slug}`}
                className="category-card group block aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={category.image}
                  alt={t(category.key)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="category-card-content">
                  <h3 className="font-heading text-sm font-medium uppercase tracking-wider text-heritage-cream md:text-base">
                    {t(category.key)}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
