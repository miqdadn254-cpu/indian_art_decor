import categoryFurniture from '@/assets/category-furniture.jpg';
import categoryDecor from '@/assets/category-decor.jpg';
import categoryDoors from '@/assets/category-doors.jpg';
import categoryStone from '@/assets/category-stone.jpg';
import categoryTextile from '@/assets/category-textile.jpg';
import categoryNavigation from '@/assets/category-navigation.jpg';
import categoryCarpets from '@/assets/category-carpets.jpg';
import categoryJournals from '@/assets/category-journals.jpg';

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  categoryAr: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  stockQuantity: number;
  variants?: {
    size?: string[];
    color?: string[];
    material?: string[];
  };
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Antique Hand Carved Cabinet',
    nameAr: 'خزانة منحوتة يدوياً أثرية',
    description: 'Exquisite hand-carved wooden cabinet featuring traditional Indian motifs. Each piece is a work of art crafted by master artisans.',
    descriptionAr: 'خزانة خشبية منحوتة يدوياً بزخارف هندية تقليدية. كل قطعة هي عمل فني من صنع حرفيين متمرسين.',
    price: 450.000,
    originalPrice: 520.000,
    image: categoryFurniture,
    images: [categoryFurniture],
    category: 'Furniture',
    categoryAr: 'أثاث',
    isBestSeller: true,
    inStock: true,
    stockQuantity: 5,
    variants: {
      size: ['Small', 'Medium', 'Large'],
      material: ['Teak', 'Rosewood', 'Sheesham'],
    },
  },
  {
    id: '2',
    name: 'Brass Temple Lamp Set',
    nameAr: 'مجموعة مصابيح نحاسية للمعبد',
    description: 'Traditional brass lamps perfect for creating an authentic ambiance. Hand polished and crafted with intricate details.',
    descriptionAr: 'مصابيح نحاسية تقليدية مثالية لخلق أجواء أصيلة. مصقولة يدوياً ومصنوعة بتفاصيل دقيقة.',
    price: 85.500,
    image: categoryDecor,
    images: [categoryDecor],
    category: 'Home Décor',
    categoryAr: 'ديكور منزلي',
    isNew: true,
    inStock: true,
    stockQuantity: 12,
  },
  {
    id: '3',
    name: 'Carved Wooden Arch Door',
    nameAr: 'باب قوسي خشبي منحوت',
    description: 'Magnificent carved wooden arch door featuring traditional Islamic geometric patterns. A statement piece for any entrance.',
    descriptionAr: 'باب قوسي خشبي منحوت رائع يتميز بأنماط هندسية إسلامية تقليدية. قطعة مميزة لأي مدخل.',
    price: 1250.000,
    image: categoryDoors,
    images: [categoryDoors],
    category: 'Doors & Arches',
    categoryAr: 'أبواب وأقواس',
    isBestSeller: true,
    inStock: true,
    stockQuantity: 2,
    variants: {
      size: ['Standard', 'Large', 'Custom'],
    },
  },
  {
    id: '4',
    name: 'Sandstone Ganesh Sculpture',
    nameAr: 'تمثال غانيش من الحجر الرملي',
    description: 'Beautiful sandstone Ganesh sculpture carved by skilled artisans. Perfect for meditation spaces and home altars.',
    descriptionAr: 'تمثال غانيش جميل من الحجر الرملي منحوت بواسطة حرفيين مهرة. مثالي لمساحات التأمل والمذابح المنزلية.',
    price: 175.000,
    image: categoryStone,
    images: [categoryStone],
    category: 'Stone Art',
    categoryAr: 'فن الحجر',
    inStock: true,
    stockQuantity: 8,
  },
  {
    id: '5',
    name: 'Zari Embroidered Wall Hanging',
    nameAr: 'لوحة حائط مطرزة بالزري',
    description: 'Luxurious wall hanging featuring traditional zari gold threadwork on rich silk fabric. A masterpiece of Indian textile art.',
    descriptionAr: 'لوحة حائط فاخرة تتميز بتطريز الزري التقليدي بخيوط ذهبية على قماش حريري غني. تحفة من فن النسيج الهندي.',
    price: 320.000,
    originalPrice: 380.000,
    image: categoryTextile,
    images: [categoryTextile],
    category: 'Fabric Art',
    categoryAr: 'فن النسيج',
    isNew: true,
    inStock: true,
    stockQuantity: 4,
  },
  {
    id: '6',
    name: 'Antique Brass Compass Set',
    nameAr: 'مجموعة بوصلة نحاسية أثرية',
    description: 'Vintage-style brass compass set including sundial and navigation tools. Perfect for collectors and nautical enthusiasts.',
    descriptionAr: 'مجموعة بوصلة نحاسية بطراز عتيق تتضمن ساعة شمسية وأدوات ملاحة. مثالية للهواة والمهتمين بالملاحة البحرية.',
    price: 95.000,
    image: categoryNavigation,
    images: [categoryNavigation],
    category: 'Navigation',
    categoryAr: 'أدوات الملاحة',
    isBestSeller: true,
    inStock: true,
    stockQuantity: 15,
  },
  {
    id: '7',
    name: 'Persian Style Hand Woven Carpet',
    nameAr: 'سجادة منسوجة يدوياً بطراز فارسي',
    description: 'Stunning hand-woven carpet featuring intricate Persian-inspired patterns. Made with premium wool and natural dyes.',
    descriptionAr: 'سجادة منسوجة يدوياً مذهلة تتميز بأنماط فارسية معقدة. مصنوعة من الصوف الفاخر والأصباغ الطبيعية.',
    price: 650.000,
    image: categoryCarpets,
    images: [categoryCarpets],
    category: 'Carpets',
    categoryAr: 'سجاد',
    inStock: true,
    stockQuantity: 3,
    variants: {
      size: ['4x6 ft', '6x9 ft', '8x10 ft'],
    },
  },
  {
    id: '8',
    name: 'Handcrafted Leather Journal',
    nameAr: 'دفتر جلدي مصنوع يدوياً',
    description: 'Beautiful leather-bound journal with hand-embossed cover. Features handmade cotton paper and vintage brass closure.',
    descriptionAr: 'دفتر جلدي جميل بغلاف منقوش يدوياً. يتميز بورق قطني مصنوع يدوياً وإغلاق نحاسي عتيق.',
    price: 28.500,
    image: categoryJournals,
    images: [categoryJournals],
    category: 'Journals',
    categoryAr: 'دفاتر',
    isNew: true,
    inStock: true,
    stockQuantity: 25,
    variants: {
      size: ['A5', 'A4'],
      color: ['Brown', 'Tan', 'Black'],
    },
  },
];

// Export with alias for compatibility
export const products = mockProducts;

export const categories = [
  { id: 'furniture', name: 'Hand Carved Furniture', nameAr: 'أثاث منحوت يدوياً' },
  { id: 'decor', name: 'Artistic Home Décor', nameAr: 'ديكور منزلي فني' },
  { id: 'doors', name: 'Antique Doors & Arches', nameAr: 'أبواب وأقواس أثرية' },
  { id: 'stone', name: 'Stone Art', nameAr: 'فن الحجر' },
  { id: 'textile', name: 'Indian Fabric Art', nameAr: 'فن النسيج الهندي' },
  { id: 'navigation', name: 'Navigation Instruments', nameAr: 'أدوات الملاحة' },
  { id: 'carpets', name: 'Carpets & Flooring', nameAr: 'سجاد وأرضيات' },
  { id: 'journals', name: 'Leather Journals', nameAr: 'دفاتر جلدية' },
];
