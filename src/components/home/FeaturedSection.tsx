import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';

export function FeaturedSection() {
  const { t, language } = useLanguage();
  const { addItem } = useCart();

  // Get best sellers (first 6 products marked as bestseller or first 6)
  const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 6);
  const displayProducts = featuredProducts.length >= 4 ? featuredProducts : products.slice(0, 6);

  const handleQuickAdd = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      nameAr: product.nameAr,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <section className="bg-heritage-warm py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-heritage-gold text-heritage-gold" />
            <span className="text-sm font-semibold uppercase tracking-widest text-heritage-gold">
              {t('featured.badge.bestseller')}
            </span>
            <Star className="h-5 w-5 fill-heritage-gold text-heritage-gold" />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-primary md:text-4xl">
            {t('featured.title')}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t('featured.subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6"
        >
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-card shadow-heritage transition-all hover:shadow-heritage-md"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={language === 'ar' ? product.nameAr : product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute left-2 top-2 flex flex-col gap-1.5">
                  {product.isBestSeller && (
                    <span className="flex items-center gap-1 rounded-sm bg-heritage-gold px-2 py-1 text-xs font-semibold text-heritage-charcoal shadow-sm">
                      <Star className="h-3 w-3 fill-current" />
                      {t('badge.bestseller')}
                    </span>
                  )}
                  {product.isNew && (
                    <span className="flex items-center gap-1 rounded-sm bg-heritage-green px-2 py-1 text-xs font-semibold text-heritage-cream">
                      <Sparkles className="h-3 w-3" />
                      {t('badge.new')}
                    </span>
                  )}
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-heritage-charcoal/0 opacity-0 transition-all duration-300 group-hover:bg-heritage-charcoal/40 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleQuickAdd(product)}
                      className="bg-heritage-cream text-heritage-charcoal shadow-md hover:bg-heritage-gold"
                    >
                      {t('products.quickAdd')}
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-heritage-cream bg-transparent text-heritage-cream hover:bg-heritage-cream hover:text-heritage-charcoal"
                      >
                        {t('products.viewDetails')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mt-1 line-clamp-2 font-heading text-sm font-medium text-foreground md:text-base">
                  {language === 'ar' ? product.nameAr : product.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading text-lg font-semibold text-heritage-gold">
                    {product.price.toFixed(3)} {t('currency')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {product.originalPrice.toFixed(3)}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/products?sort=bestseller">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-heritage-green-light"
            >
              {t('common.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
