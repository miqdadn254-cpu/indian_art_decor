import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import { Layout } from '@/components/layout/Layout';

import categoryFurniture from '@/assets/category-furniture.jpg';
import categoryDecor from '@/assets/category-decor.jpg';
import categoryDoors from '@/assets/category-doors.jpg';
import categoryStone from '@/assets/category-stone.jpg';
import categoryTextile from '@/assets/category-textile.jpg';
import categoryNavigation from '@/assets/category-navigation.jpg';
import categoryCarpets from '@/assets/category-carpets.jpg';
import categoryJournals from '@/assets/category-journals.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const categoryImages: Record<string, string> = {
  furniture: categoryFurniture,
  decor: categoryDecor,
  doors: categoryDoors,
  stone: categoryStone,
  textile: categoryTextile,
  navigation: categoryNavigation,
  carpets: categoryCarpets,
  journals: categoryJournals,
};

export default function Categories() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-64 overflow-hidden">
        <img
          src={heroBg}
          alt="Categories"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-heritage-charcoal/70" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold text-heritage-gold md:text-5xl"
          >
            {t('nav.categories')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-heritage-cream/80"
          >
            Explore Our Collections
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="group block overflow-hidden rounded-sm shadow-heritage transition-shadow hover:shadow-heritage-md"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={categoryImages[category.id] || categoryFurniture}
                      alt={language === 'ar' ? category.nameAr : category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal/80 via-heritage-charcoal/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-lg font-semibold text-heritage-cream">
                        {language === 'ar' ? category.nameAr : category.name}
                      </h3>
                      <p className="mt-1 text-sm text-heritage-gold">
                        Explore Collection →
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
