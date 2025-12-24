import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const { t, language } = useLanguage();
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  // Empty cart state with elegant messaging
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-md text-center"
          >
            <motion.div
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </motion.div>
            <h1 className="font-heading text-2xl font-semibold text-foreground">
              {language === 'ar' ? 'سلتك فارغة' : 'Your cart is empty'}
            </h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {language === 'ar'
                ? 'يبدو أنك لم تضف أي قطع حتى الآن. استكشف مجموعتنا المنتقاة بعناية.'
                : "Looks like you haven't added any pieces yet. Explore our carefully curated collection."
              }
            </p>
            <Link to="/products">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="mt-6 bg-primary text-primary-foreground hover:bg-heritage-green-light px-8">
                  {language === 'ar' ? 'استكشف المجموعة' : 'Explore Collection'}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="font-heading text-3xl font-semibold">{t('nav.cart')}</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 rounded-sm bg-card p-4 shadow-heritage"
                >
                  <img
                    src={item.image}
                    alt={language === 'ar' ? item.nameAr : item.name}
                    className="h-24 w-24 rounded-sm object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-medium leading-snug">
                        {language === 'ar' ? item.nameAr : item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-sm text-muted-foreground">
                          {item.variant}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>
                      <span className="font-heading font-semibold text-heritage-gold">
                        {(item.price * item.quantity).toFixed(3)} {t('currency')}
                      </span>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <Button
              variant="outline"
              className="mt-4"
              onClick={clearCart}
            >
              {language === 'ar' ? 'إفراغ السلة' : 'Clear Cart'}
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-sm bg-card p-6 shadow-heritage">
              <h2 className="font-heading text-xl font-semibold">
                {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}
                  </span>
                  <span>
                    {totalPrice.toFixed(3)} {t('currency')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === 'ar' ? 'الشحن' : 'Shipping'}
                  </span>
                  <span className="text-heritage-green text-sm">
                    {language === 'ar' ? 'يُحسب عند الدفع' : 'Calculated at checkout'}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-heading font-semibold">
                      {language === 'ar' ? 'الإجمالي' : 'Total'}
                    </span>
                    <span className="font-heading text-xl font-semibold text-heritage-gold">
                      {totalPrice.toFixed(3)} {t('currency')}
                    </span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="mt-6 w-full bg-heritage-gold text-heritage-charcoal hover:bg-heritage-gold-light"
                  >
                    {language === 'ar' ? 'المتابعة للدفع' : 'Proceed to Checkout'}
                    <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                  </Button>
                </motion.div>
              </Link>

              {/* Reassurance microcopy */}
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {language === 'ar'
                  ? 'قطعك محفوظة. ادفع بأمان وثقة.'
                  : 'Your items are reserved. Checkout securely with confidence.'
                }
              </p>

              <Link to="/products">
                <Button variant="outline" className="mt-3 w-full">
                  {language === 'ar' ? 'مواصلة التسوق' : 'Continue Shopping'}
                </Button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 border-t pt-4">
                <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-heritage-green flex-shrink-0" />
                    <span>{language === 'ar' ? 'دفع آمن ومشفر' : 'Secure & Encrypted Payment'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-heritage-green flex-shrink-0" />
                    <span>{language === 'ar' ? 'توصيل لجميع مناطق الكويت' : 'Kuwait-Wide Delivery'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeadphonesIcon className="h-4 w-4 text-heritage-green flex-shrink-0" />
                    <span>{language === 'ar' ? 'دعم على مدار الساعة' : '24/7 Customer Support'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
