import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, Star, Shield, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  stockQuantity?: number;
}

export function ProductCard({
  id,
  name,
  nameAr,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isBestSeller,
  stockQuantity = 10,
}: ProductCardProps) {
  const { language, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const displayName = language === 'ar' ? nameAr : name;
  const savings = originalPrice ? (originalPrice - price).toFixed(3) : null;
  const isLowStock = stockQuantity > 0 && stockQuantity <= 3;

  // Craftsmanship details for progressive disclosure (rotate through options)
  const craftDetails = [
    { en: 'Hand-finished brass details', ar: 'تفاصيل نحاسية مصقولة يدوياً' },
    { en: 'Traditional artisan techniques', ar: 'تقنيات حرفية تقليدية' },
    { en: 'Natural materials', ar: 'مواد طبيعية' },
  ];
  // Use product id to deterministically select a craft detail
  const craftIndex = parseInt(id, 10) % craftDetails.length || 0;
  const craftDetail = craftDetails[craftIndex];

  // Badge intelligence: max 2 badges, priority order
  const badges: { type: string; label: string; className: string }[] = [];

  if (isBestSeller) {
    badges.push({
      type: 'bestseller',
      label: t('badge.bestseller'),
      className: 'bg-heritage-gold text-heritage-charcoal'
    });
  }

  if (isLowStock && badges.length < 2) {
    badges.push({
      type: 'lowstock',
      label: language === 'ar' ? `فقط ${stockQuantity}` : `Only ${stockQuantity}`,
      className: 'bg-heritage-charcoal/70 text-heritage-cream'
    });
  }

  if (isNew && !isBestSeller && badges.length < 2) {
    badges.push({
      type: 'new',
      label: t('badge.new'),
      className: 'bg-heritage-green/90 text-heritage-cream'
    });
  }

  // Motion variants for smooth enter/exit
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.08 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.18 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25, delay: 0.12 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`}>
        {/* Card with depth shift instead of scale */}
        <motion.div
          className="relative overflow-hidden rounded bg-card transition-all duration-300"
          animate={{
            y: isHovered ? -6 : 0,
            boxShadow: isHovered
              ? '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)'
              : '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)'
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-secondary/15">
            {/* Shimmer placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-secondary via-secondary/50 to-secondary bg-[length:200%_100%]" />
            )}

            {/* Product Image with fade-in */}
            <motion.img
              src={image}
              alt={displayName}
              className="h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              onLoad={() => setImageLoaded(true)}
              style={{
                transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />

            {/* Subtle vignette */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-heritage-charcoal/20 to-transparent pointer-events-none" />

            {/* Hover Overlay - Desktop only, with progressive disclosure */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0 hidden md:flex flex-col items-center justify-center gap-3 bg-heritage-charcoal/30"
                >
                  {/* Primary CTA - "Explore piece" */}
                  <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-heritage-cream"
                  >
                    {language === 'ar' ? 'استكشف القطعة' : 'Explore piece'}
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </motion.div>

                  {/* Progressive disclosure: craftsmanship detail */}
                  <motion.p
                    variants={revealVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-[11px] text-heritage-cream/70 italic"
                  >
                    {language === 'ar' ? craftDetail.ar : craftDetail.en}
                  </motion.p>

                  {/* Minimal action buttons */}
                  <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-2"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full bg-heritage-cream/90 text-heritage-charcoal shadow-sm hover:bg-heritage-gold transition-colors duration-200"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full bg-heritage-cream/90 text-heritage-charcoal shadow-sm hover:bg-heritage-gold transition-colors duration-200"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="h-3.5 w-3.5" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Badges */}
            {badges.length > 0 && (
              <div className="absolute start-2.5 top-2.5 flex flex-col gap-1 rtl:start-auto rtl:end-2.5">
                {badges.map((badge) => (
                  <span
                    key={badge.type}
                    className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-medium tracking-wide ${badge.className}`}
                  >
                    {badge.type === 'bestseller' && <Star className="h-2.5 w-2.5 fill-current" />}
                    {badge.label}
                  </span>
                ))}
              </div>
            )}

            {/* Savings badge */}
            {savings && (
              <div className="absolute end-2.5 top-2.5 rtl:end-auto rtl:start-2.5">
                <span className="rounded bg-heritage-cream/85 px-1.5 py-0.5 text-[9px] font-medium text-heritage-charcoal/60">
                  {language === 'ar' ? `وفر ${savings}` : `Save ${savings}`} {t('currency')}
                </span>
              </div>
            )}
          </div>

          {/* Content - Eye-path optimized: Price → Title → Trust */}
          <div className="px-4 py-4">
            {/* Category - reduced emphasis */}
            <p className="text-[9px] uppercase tracking-widest text-muted-foreground/40">
              {category}
            </p>

            {/* Price FIRST - strongest anchor */}
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-heading text-lg font-semibold text-heritage-gold">
                {price.toFixed(3)} {t('currency')}
              </span>
              {originalPrice && (
                <span className="text-[10px] text-muted-foreground/35 line-through">
                  {originalPrice.toFixed(3)}
                </span>
              )}
            </div>

            {/* Title - after price for better scanning */}
            <h3 className={`mt-2 line-clamp-2 font-heading font-normal text-foreground ${language === 'ar' ? 'text-[15px] leading-[1.7]' : 'text-[14px] leading-[1.55]'
              }`}>
              {displayName}
            </h3>

            {/* Status signaling for best sellers (replaces generic craftsmanship line) */}
            {isBestSeller ? (
              <p className="mt-2 text-[10px] text-heritage-gold/80 font-medium">
                {language === 'ar' ? 'قطعة مميزة' : 'A signature piece'}
              </p>
            ) : (
              <p className="mt-2 text-[10px] text-muted-foreground/45 italic">
                {language === 'ar' ? 'صناعة يدوية' : 'Handcrafted'}
              </p>
            )}

            {/* Trust cues */}
            <div className="mt-3 flex items-center gap-3 text-[9px] text-muted-foreground/50">
              <div className="flex items-center gap-1">
                <Shield className="h-2.5 w-2.5" />
                <span>{language === 'ar' ? 'أصيل' : 'Authentic'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="h-2.5 w-2.5" />
                <span>{language === 'ar' ? 'الكويت' : 'Kuwait'}</span>
              </div>
            </div>

            {/* Mobile hint */}
            <div className="mt-2.5 flex items-center gap-1 text-[9px] text-muted-foreground/40 md:hidden">
              <span>{language === 'ar' ? 'اضغط للاستكشاف' : 'Tap to explore'}</span>
              <ArrowRight className="h-2 w-2 rtl:rotate-180" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
