import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, Grid3X3, List, Star, Sparkles, Shield, Award, SlidersHorizontal, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockProducts, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import heroBg from '@/assets/hero-bg.jpg';

type SortOption = 'bestseller' | 'newest' | 'price-low' | 'price-high' | 'name';

export default function Products() {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [sortBy, setSortBy] = useState<SortOption>('bestseller');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get category from URL
  const urlCategory = searchParams.get('category');

  // Initialize selected categories from URL
  useMemo(() => {
    if (urlCategory && !selectedCategories.includes(urlCategory)) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlCategory]);

  // Filter products - prioritize best sellers
  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.some(
          (cat) =>
            product.category.toLowerCase().includes(cat) ||
            product.categoryAr.includes(cat)
        )
      );
    }

    // Filter by price
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort - Best sellers first by default
    switch (sortBy) {
      case 'bestseller':
        filtered.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          return 0;
        });
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) =>
          language === 'ar'
            ? a.nameAr.localeCompare(b.nameAr)
            : a.name.localeCompare(b.name)
        );
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1));
    }

    return filtered;
  }, [selectedCategories, priceRange, sortBy, language]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1500]);
  };

  // Calculate active filter count for mobile badge
  const activeFilterCount = selectedCategories.length + (priceRange[0] > 0 || priceRange[1] < 1500 ? 1 : 0);
  const hasActiveFilters = activeFilterCount > 0;

  // Refined filter content with softer styling
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Clear All - Always visible when filters active */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-3 w-3" />
          {language === 'ar' ? 'مسح الكل' : 'Clear all'}
        </button>
      )}

      {/* Categories - Softer styling */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-foreground/80">
          {language === 'ar' ? 'الفئات' : 'Categories'}
        </h3>
        <div className="space-y-2.5">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2.5 rtl:space-x-reverse">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
                className="border-muted-foreground/40 data-[state=checked]:border-primary"
              />
              <label
                htmlFor={category.id}
                className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors leading-none"
              >
                {language === 'ar' ? category.nameAr : category.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range - Softer styling */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-foreground/80">
          {language === 'ar' ? 'نطاق السعر' : 'Price Range'}
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={1500}
          step={10}
          className="mb-3"
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{priceRange[0]} {t('currency')}</span>
          <span>{priceRange[1]} {t('currency')}</span>
        </div>
      </div>

      {/* Trust Section - More subtle */}
      <div className="pt-4 border-t border-border/50">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
            <Shield className="h-3.5 w-3.5" />
            <span>{language === 'ar' ? 'أصالة مضمونة' : 'Authenticity Guaranteed'}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
            <Award className="h-3.5 w-3.5" />
            <span>{language === 'ar' ? 'حرفية يدوية' : 'Handcrafted Quality'}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={heroBg}
          alt="Products"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-heritage-charcoal/70" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl font-semibold text-heritage-gold md:text-4xl lg:text-5xl"
          >
            {language === 'ar' ? 'مجموعتنا' : 'Our Collection'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 max-w-lg text-sm text-heritage-cream/80 md:text-base"
          >
            {language === 'ar'
              ? 'قطع فريدة مصنوعة يدوياً بحب واهتمام'
              : 'Unique pieces handcrafted with love and care'
            }
          </motion.p>
        </div>
      </section>

      {/* Mobile Sticky Filter/Sort Bar */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border lg:hidden">
        <div className="container py-3 flex items-center justify-between gap-3">
          {/* Filter Button with Count */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                {language === 'ar' ? 'فلتر' : 'Filter'}
                {activeFilterCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>{language === 'ar' ? 'فلتر المنتجات' : 'Filter Products'}</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>

          {/* Sort Dropdown - Compact */}
          <Select
            value={sortBy}
            onValueChange={(value) => setSortBy(value as SortOption)}
          >
            <SelectTrigger className="w-36 text-sm h-9">
              <SelectValue placeholder={language === 'ar' ? 'ترتيب' : 'Sort'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bestseller">
                {language === 'ar' ? 'الأكثر مبيعاً' : 'Best Sellers'}
              </SelectItem>
              <SelectItem value="newest">
                {language === 'ar' ? 'الأحدث' : 'Newest'}
              </SelectItem>
              <SelectItem value="price-low">
                {language === 'ar' ? 'السعر: منخفض' : 'Price: Low'}
              </SelectItem>
              <SelectItem value="price-high">
                {language === 'ar' ? 'السعر: عالي' : 'Price: High'}
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Results count */}
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {filteredProducts.length} {language === 'ar' ? 'قطعة' : 'pieces'}
          </span>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container">
          {/* Category Context Introduction */}
          <div className="mb-8 text-center lg:text-start">
            <p className="text-sm text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {language === 'ar'
                ? 'قطع أصيلة مصنوعة يدوياً، منتقاة بعناية لتناسب الديكورات الداخلية الخالدة.'
                : 'Authentic handcrafted pieces, carefully curated for timeless interiors.'
              }
            </p>
          </div>

          {/* Desktop Toolbar - Hidden on mobile */}
          <div className="mb-6 hidden lg:flex flex-wrap items-center justify-between gap-4">
            {/* Left: Results */}
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{filteredProducts.length}</span>{' '}
              {language === 'ar' ? 'منتج' : 'products'}
            </p>

            {/* Right: Sort + View */}
            <div className="flex items-center gap-3">
              {/* Sort - with better labels */}
              <Select
                value={sortBy}
                onValueChange={(value) => setSortBy(value as SortOption)}
              >
                <SelectTrigger className="w-44 text-sm">
                  <SelectValue placeholder={t('products.sort')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bestseller">
                    <span className="flex items-center gap-2">
                      <Star className="h-3 w-3" />
                      {language === 'ar' ? 'الأكثر مبيعاً' : 'Best Sellers'}
                    </span>
                  </SelectItem>
                  <SelectItem value="newest">
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-3 w-3" />
                      {language === 'ar' ? 'الأحدث' : 'Newest'}
                    </span>
                  </SelectItem>
                  <SelectItem value="price-low">
                    {language === 'ar' ? 'السعر: الأقل للأعلى' : 'Price: Low to High'}
                  </SelectItem>
                  <SelectItem value="price-high">
                    {language === 'ar' ? 'السعر: الأعلى للأقل' : 'Price: High to Low'}
                  </SelectItem>
                  <SelectItem value="name">
                    {language === 'ar' ? 'الاسم' : 'Name'}
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex items-center gap-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar - Softer styling */}
            <aside className="hidden w-56 flex-shrink-0 lg:block">
              <FilterContent />
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div
                className={`grid gap-5 ${viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
                  }`}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      nameAr={product.nameAr}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      category={
                        language === 'ar' ? product.categoryAr : product.category
                      }
                      isNew={product.isNew}
                      isBestSeller={product.isBestSeller}
                      stockQuantity={product.stockQuantity}
                    />
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <motion.div
                  className="py-20 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    <Filter className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {language === 'ar' ? 'لم نجد ما تبحث عنه' : 'No pieces match your search'}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">
                    {language === 'ar'
                      ? 'جرب تعديل الفلاتر لاستكشاف المزيد من مجموعتنا المنسقة بعناية.'
                      : 'Try adjusting your filters to explore more of our carefully curated collection.'
                    }
                  </p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="mt-5"
                      onClick={clearFilters}
                    >
                      {language === 'ar' ? 'مسح الفلاتر' : 'Clear Filters'}
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
