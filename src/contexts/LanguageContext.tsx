import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.categories': 'Categories',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.cart': 'Cart',
    'nav.search': 'Search products...',
    
    // Hero - Emotional Value Proposition
    'hero.tagline': 'HANDCRAFTED WITH HERITAGE',
    'hero.title': 'Transform Your Home Into A Living Legacy',
    'hero.subtitle': 'Each piece is a one-of-a-kind treasure, handcrafted by master artisans whose families have preserved these techniques for generations.',
    'hero.cta': 'Shop Best Sellers',
    'hero.secondary': 'Discover Our Story',
    'hero.trust1': '25+ Years of Excellence',
    'hero.trust2': '5,000+ Happy Homes',
    'hero.trust3': 'Authentic Handcrafted',
    
    // Categories
    'categories.title': 'Explore Timeless Collections',
    'categories.subtitle': 'Find the perfect piece for every room',
    'category.furniture': 'Hand Carved Furniture',
    'category.decor': 'Artistic Home Décor',
    'category.doors': 'Antique Doors & Arches',
    'category.stone': 'Stone Art',
    'category.textile': 'Indian Fabric Art',
    'category.navigation': 'Navigation Instruments',
    'category.carpets': 'Carpets & Flooring',
    'category.journals': 'Leather Journals',
    
    // Featured - Best Sellers Section
    'featured.title': 'Customer Favorites',
    'featured.subtitle': 'Most loved pieces by Kuwait homeowners',
    'featured.badge.bestseller': 'Best Seller',
    'featured.badge.limited': 'Only Few Left',
    'featured.badge.handmade': 'Handmade',
    'featured.badge.new': 'New Arrival',
    
    // About Section - Persuasive
    'about.title': 'More Than Décor — It\'s Your Family\'s Heritage',
    'about.description': 'For over 25 years, we\'ve partnered directly with master artisans from India\'s most renowned craft villages. Every piece you choose carries centuries of tradition, destined to become your family\'s heirloom.',
    'about.quote': '"Each piece in our collection takes 40-200 hours to craft by hand. That\'s not just furniture — that\'s devotion made tangible."',
    'about.author': '— The Founders',
    
    // Why Choose Us - Trust Building
    'why.title': 'Why 5,000+ Kuwait Homes Trust Us',
    'why.authenticity': 'Verified Artisan Network',
    'why.authenticity.desc': 'We personally visit and vet every craftsman',
    'why.heritage': 'Generations of Expertise',
    'why.heritage.desc': 'Techniques passed down for 200+ years',
    'why.quality': 'Premium Materials Only',
    'why.quality.desc': 'Solid wood, genuine leather, natural dyes',
    'why.unique': 'Truly One-of-a-Kind',
    'why.unique.desc': 'No two pieces are ever exactly alike',
    'why.delivery': 'Kuwait-Wide Delivery',
    'why.delivery.desc': 'White-glove delivery to your doorstep',
    'why.guarantee': 'Satisfaction Promise',
    'why.guarantee.desc': 'Your happiness is our priority',
    
    // Team
    'team.title': 'Meet Our Awesome Team',
    'team.subtitle': 'Dedicated professionals committed to excellence',
    
    // Stats - Social Proof
    'stats.clients': 'Happy Clients',
    'stats.products': 'Curated Pieces',
    'stats.homes': 'Homes Furnished',
    'stats.years': 'Years of Trust',
    
    // CTA Section
    'cta.title': 'Ready to Find Your Perfect Piece?',
    'cta.subtitle': 'Join thousands of Kuwait homeowners who\'ve transformed their spaces with authentic handcrafted heritage.',
    'cta.button': 'Browse Best Sellers',
    'cta.reassurance': 'Free consultation • Kuwait-wide delivery • Secure checkout',
    
    // Footer
    'footer.tagline': 'Art has the power to transform, to illuminate, to educate, inspire and motivate.',
    'footer.quicklinks': 'Quick Links',
    'footer.categories': 'Categories',
    'footer.contact': 'Contact Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'Your email address',
    'footer.newsletter.button': 'Subscribe',
    'footer.copyright': '© 2024 Heritage Home Art. All rights reserved.',
    
    // Products
    'products.title': 'Our Collection',
    'products.subtitle': 'Each piece, a masterwork of tradition',
    'products.filter': 'Filter',
    'products.sort': 'Sort By',
    'products.price': 'Price',
    'products.addToCart': 'Add to Cart',
    'products.viewDetails': 'View Details',
    'products.quickAdd': 'Quick Add',
    'products.inStock': 'In Stock',
    'products.lowStock': 'Only {count} left',
    'products.outOfStock': 'Made to Order',
    
    // Product Badges
    'badge.bestseller': 'Best Seller',
    'badge.limited': 'Limited',
    'badge.handmade': 'Handmade',
    'badge.new': 'New',
    
    // Cart & Checkout Trust
    'cart.secure': 'Secure Checkout',
    'cart.delivery': 'Kuwait-Wide Delivery',
    'cart.support': '24/7 Support',
    
    // Currency
    'currency': 'KWD',
    
    // Common
    'common.viewAll': 'View All',
    'common.learnMore': 'Learn More',
    'common.shopNow': 'Shop Now',
    'common.seeMore': 'See More',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.categories': 'الفئات',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'تسجيل الدخول',
    'nav.cart': 'السلة',
    'nav.search': 'البحث عن المنتجات...',
    
    // Hero - Emotional Value Proposition
    'hero.tagline': 'مصنوع يدوياً بإرث أصيل',
    'hero.title': 'حوّل منزلك إلى إرث حي',
    'hero.subtitle': 'كل قطعة كنز فريد من نوعه، مصنوعة يدوياً بواسطة حرفيين ماهرين حافظت عائلاتهم على هذه التقنيات لأجيال.',
    'hero.cta': 'تسوق الأكثر مبيعاً',
    'hero.secondary': 'اكتشف قصتنا',
    'hero.trust1': '+25 سنة من التميز',
    'hero.trust2': '+5,000 منزل سعيد',
    'hero.trust3': 'أصيل مصنوع يدوياً',
    
    // Categories
    'categories.title': 'استكشف مجموعات خالدة',
    'categories.subtitle': 'اعثر على القطعة المثالية لكل غرفة',
    'category.furniture': 'أثاث منحوت يدوياً',
    'category.decor': 'ديكور منزلي فني',
    'category.doors': 'أبواب وأقواس أثرية',
    'category.stone': 'فن الحجر',
    'category.textile': 'فن النسيج الهندي',
    'category.navigation': 'أدوات الملاحة',
    'category.carpets': 'سجاد وأرضيات',
    'category.journals': 'مجلات جلدية',
    
    // Featured - Best Sellers Section
    'featured.title': 'المفضلة لدى العملاء',
    'featured.subtitle': 'القطع الأكثر شعبية لدى أصحاب المنازل في الكويت',
    'featured.badge.bestseller': 'الأكثر مبيعاً',
    'featured.badge.limited': 'قطع قليلة متبقية',
    'featured.badge.handmade': 'مصنوع يدوياً',
    'featured.badge.new': 'وصل حديثاً',
    
    // About Section - Persuasive
    'about.title': 'أكثر من ديكور — إنه إرث عائلتك',
    'about.description': 'لأكثر من 25 عاماً، شاركنا مباشرة مع حرفيين ماهرين من أشهر قرى الحرف اليدوية في الهند. كل قطعة تختارها تحمل قروناً من التقاليد، مقدرة لتصبح إرث عائلتك.',
    'about.quote': '"كل قطعة في مجموعتنا تستغرق 40-200 ساعة لصنعها يدوياً. هذا ليس مجرد أثاث — هذا تفانٍ ملموس."',
    'about.author': '— المؤسسون',
    
    // Why Choose Us - Trust Building
    'why.title': 'لماذا تثق بنا +5,000 منزل كويتي',
    'why.authenticity': 'شبكة حرفيين موثقة',
    'why.authenticity.desc': 'نزور ونتحقق من كل حرفي شخصياً',
    'why.heritage': 'أجيال من الخبرة',
    'why.heritage.desc': 'تقنيات متوارثة لأكثر من 200 عام',
    'why.quality': 'مواد ممتازة فقط',
    'why.quality.desc': 'خشب صلب، جلد أصلي، أصباغ طبيعية',
    'why.unique': 'فريدة حقاً',
    'why.unique.desc': 'لا توجد قطعتان متطابقتان أبداً',
    'why.delivery': 'توصيل لكل الكويت',
    'why.delivery.desc': 'توصيل فاخر إلى باب منزلك',
    'why.guarantee': 'وعد الرضا',
    'why.guarantee.desc': 'سعادتك هي أولويتنا',
    
    // Team
    'team.title': 'تعرف على فريقنا الرائع',
    'team.subtitle': 'محترفون متفانون ملتزمون بالتميز',
    
    // Stats - Social Proof
    'stats.clients': 'عميل سعيد',
    'stats.products': 'قطعة منتقاة',
    'stats.homes': 'منزل مفروش',
    'stats.years': 'سنوات ثقة',
    
    // CTA Section
    'cta.title': 'مستعد لإيجاد قطعتك المثالية؟',
    'cta.subtitle': 'انضم لآلاف أصحاب المنازل الكويتية الذين حولوا مساحاتهم بتراث أصيل مصنوع يدوياً.',
    'cta.button': 'تصفح الأكثر مبيعاً',
    'cta.reassurance': 'استشارة مجانية • توصيل لكل الكويت • دفع آمن',
    
    // Footer
    'footer.tagline': 'للفن القدرة على التحويل والإنارة والتعليم والإلهام والتحفيز.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.categories': 'الفئات',
    'footer.contact': 'اتصل بنا',
    'footer.newsletter': 'النشرة الإخبارية',
    'footer.newsletter.placeholder': 'عنوان بريدك الإلكتروني',
    'footer.newsletter.button': 'اشترك',
    'footer.copyright': '© 2024 تراث الفن المنزلي. جميع الحقوق محفوظة.',
    
    // Products
    'products.title': 'مجموعتنا',
    'products.subtitle': 'كل قطعة، تحفة من التقاليد',
    'products.filter': 'تصفية',
    'products.sort': 'ترتيب حسب',
    'products.price': 'السعر',
    'products.addToCart': 'أضف إلى السلة',
    'products.viewDetails': 'عرض التفاصيل',
    'products.quickAdd': 'إضافة سريعة',
    'products.inStock': 'متوفر',
    'products.lowStock': 'متبقي {count} فقط',
    'products.outOfStock': 'يُصنع حسب الطلب',
    
    // Product Badges
    'badge.bestseller': 'الأكثر مبيعاً',
    'badge.limited': 'محدود',
    'badge.handmade': 'مصنوع يدوياً',
    'badge.new': 'جديد',
    
    // Cart & Checkout Trust
    'cart.secure': 'دفع آمن',
    'cart.delivery': 'توصيل لكل الكويت',
    'cart.support': 'دعم 24/7',
    
    // Currency
    'currency': 'د.ك',
    
    // Common
    'common.viewAll': 'عرض الكل',
    'common.learnMore': 'اعرف المزيد',
    'common.shopNow': 'تسوق الآن',
    'common.seeMore': 'المزيد',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', language);
    
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
