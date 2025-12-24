import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Heart,
  Share2,
  Check,
  Shield,
  Truck,
  Award,
  Clock,
  Sparkles,
  Star,
  ChevronRight,
  Minus,
  Plus,
  Package
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { mockProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-semibold">Product Not Found</h1>
            <Link to="/products" className="mt-4 inline-block text-primary underline">
              Return to Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const displayName = language === 'ar' ? product.nameAr : product.name;
  const displayDescription = language === 'ar' ? product.descriptionAr : product.description;
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;
  const isLowStock = product.stockQuantity > 0 && product.stockQuantity <= 5;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        nameAr: product.nameAr,
        price: product.price,
        image: product.image,
      });
    }
  };

  const benefits = [
    { icon: Award, text: language === 'ar' ? 'حرفية يدوية أصيلة' : 'Authentic Handcrafted Quality' },
    { icon: Clock, text: language === 'ar' ? 'مصنوع ليدوم أجيالاً' : 'Made to Last Generations' },
    { icon: Sparkles, text: language === 'ar' ? 'قطعة فريدة من نوعها' : 'One-of-a-Kind Piece' },
    { icon: Shield, text: language === 'ar' ? 'ضمان الأصالة' : 'Authenticity Guaranteed' },
  ];

  const trustPoints = [
    { icon: Truck, text: language === 'ar' ? 'توصيل مجاني في الكويت' : 'Free Kuwait Delivery' },
    { icon: Shield, text: language === 'ar' ? 'دفع آمن' : 'Secure Payment' },
    { icon: Package, text: language === 'ar' ? 'إرجاع سهل خلال 14 يوم' : 'Easy 14-Day Returns' },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/30">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-foreground transition-colors">
              {language === 'ar' ? 'المنتجات' : 'Products'}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{displayName}</span>
          </nav>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-sm bg-secondary">
                <img
                  src={product.image}
                  alt={displayName}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Badges */}
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {product.isBestSeller && (
                  <Badge className="bg-heritage-gold text-heritage-charcoal shadow-sm">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    {language === 'ar' ? 'الأكثر مبيعاً' : 'Best Seller'}
                  </Badge>
                )}
                {product.isNew && (
                  <Badge className="bg-heritage-green text-heritage-cream">
                    <Sparkles className="mr-1 h-3 w-3" />
                    {language === 'ar' ? 'جديد' : 'New Arrival'}
                  </Badge>
                )}
                {discount > 0 && (
                  <Badge className="bg-heritage-terracotta text-heritage-cream">
                    -{discount}%
                  </Badge>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Category */}
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                {language === 'ar' ? product.categoryAr : product.category}
              </p>

              {/* Name */}
              <h1 className="mt-2 font-heading text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
                {displayName}
              </h1>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-heading text-2xl font-bold text-heritage-gold md:text-3xl">
                  {product.price.toFixed(3)} {t('currency')}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice.toFixed(3)} {t('currency')}
                  </span>
                )}
              </div>

              {/* Stock Status - Soft Scarcity */}
              <div className="mt-4">
                {product.inStock ? (
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-heritage-green" />
                    <span className="text-sm text-heritage-green">
                      {language === 'ar' ? 'متوفر' : 'In Stock'}
                    </span>
                    {isLowStock && (
                      <span className="text-sm text-heritage-terracotta">
                        – {language === 'ar' ? `فقط ${product.stockQuantity} متبقية` : `Only ${product.stockQuantity} left`}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'غير متوفر' : 'Out of Stock'}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {displayDescription}
              </p>

              {/* Why You'll Love This */}
              <div className="mt-6 rounded-sm border border-border bg-secondary/30 p-4">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  {language === 'ar' ? 'لماذا ستحب هذه القطعة' : "Why You'll Love This"}
                </h3>
                <ul className="mt-3 space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <benefit.icon className="h-4 w-4 flex-shrink-0 text-heritage-gold" />
                      {benefit.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Variants */}
              {product.variants?.size && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-foreground">
                    {language === 'ar' ? 'الحجم' : 'Size'}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.variants.size.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-sm border px-4 py-2 text-sm transition-all ${selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-foreground hover:border-primary'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-foreground">
                  {language === 'ar' ? 'الكمية' : 'Quantity'}
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </motion.button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-8 space-y-4">
                {/* Primary CTA with premium hover effect */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full gap-2 bg-primary py-6 text-lg font-semibold text-primary-foreground hover:bg-heritage-green-light hover:shadow-heritage-glow transition-all duration-200"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
                  </Button>
                </motion.div>

                {/* Handcrafted reassurance line */}
                <p className="text-center text-xs text-muted-foreground">
                  {language === 'ar'
                    ? '✓ مصنوع يدوياً بعناية • يُشحن إلى جميع مناطق الكويت'
                    : '✓ Handcrafted with care • Ships to all of Kuwait'
                  }
                </p>

                {/* Secondary Actions - Wishlist less prominent */}
                <div className="flex gap-3">
                  <motion.div className="flex-1" whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`w-full gap-2 transition-colors duration-200 ${isWishlisted ? 'border-heritage-terracotta text-heritage-terracotta bg-heritage-terracotta/5' : ''}`}
                    >
                      <motion.div
                        animate={{ scale: isWishlisted ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                      </motion.div>
                      {language === 'ar' ? 'المفضلة' : 'Wishlist'}
                    </Button>
                  </motion.div>
                  <motion.div className="flex-1" whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="w-full gap-2">
                      <Share2 className="h-4 w-4" />
                      {language === 'ar' ? 'مشاركة' : 'Share'}
                    </Button>
                  </motion.div>
                </div>

                {/* Trust Points with subtle background */}
                <div className="rounded-sm bg-secondary/50 p-3">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                    {trustPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <point.icon className="h-3.5 w-3.5 text-heritage-green" />
                        <span>{point.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Accordion Details */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="craftsmanship">
                  <AccordionTrigger className="font-heading text-base">
                    {language === 'ar' ? 'الحرفية والمواد' : 'Craftsmanship & Materials'}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {language === 'ar'
                      ? 'كل قطعة مصنوعة يدوياً بواسطة حرفيين متمرسين يستخدمون تقنيات توارثوها عبر الأجيال. نستخدم فقط أجود المواد المختارة بعناية لضمان الجودة والمتانة.'
                      : 'Each piece is handcrafted by master artisans using techniques passed down through generations. We use only the finest materials, carefully selected to ensure quality and durability that stands the test of time.'
                    }
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger className="font-heading text-base">
                    {language === 'ar' ? 'العناية والصيانة' : 'Care & Maintenance'}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {language === 'ar'
                      ? 'لضمان طول عمر قطعتك، نوصي بتنظيفها بقطعة قماش جافة. تجنب أشعة الشمس المباشرة والرطوبة الزائدة. مع العناية المناسبة، ستستمر هذه القطعة لأجيال.'
                      : 'To ensure the longevity of your piece, we recommend cleaning with a dry cloth. Avoid direct sunlight and excessive moisture. With proper care, this piece will last for generations to come.'
                    }
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="font-heading text-base">
                    {language === 'ar' ? 'الشحن والتوصيل' : 'Shipping & Delivery'}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {language === 'ar'
                      ? 'توصيل مجاني لجميع الطلبات في الكويت. يتم شحن الطلبات خلال 3-5 أيام عمل. يتم تغليف كل قطعة بعناية لضمان وصولها بحالة ممتازة.'
                      : 'Free delivery on all orders within Kuwait. Orders are shipped within 3-5 business days. Each piece is carefully packaged to ensure it arrives in perfect condition.'
                    }
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
