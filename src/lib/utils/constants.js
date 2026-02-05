// ==============================
// App Constants
// ==============================

// ---------- Routes ----------
export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  VERIFY: '/auth/verify',
  DASHBOARD: '/dashboard',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: (id) => `/products/${id}`,
};

// ---------- Categories ----------
export const CATEGORIES = {
  DRESSES: 'Dresses',
  T_SHIRTS: 'T-Shirts',
  HOODIES: 'Hoodies',
  SETS: 'Sets',
};

// ---------- Currency ----------
export const CURRENCY = {
  CODE: 'AED',
  SYMBOL: 'AED',
};

// ---------- Ratings ----------
export const RATINGS = {
  MAX: 5,
  DEFAULT: 4.5,
};

// ---------- Offers ----------
export const OFFERS = {
  DISCOUNT_25: {
    label: '25% OFF',
    value: 25,
  },
};

// ---------- UI Labels ----------
export const UI_TEXT = {
  ADD_TO_CART: 'Add to cart',
  ADD_TO_WISHLIST: 'Add to wishlist',
  OUT_OF_STOCK: 'Out of stock',
};
export const COUNTRY_CODES = [
  { code: '971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '20', name: 'Egypt', flag: '🇪🇬' },
  { code: '965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '974', name: 'Qatar', flag: '🇶🇦' },
  { code: '973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '968', name: 'Oman', flag: '🇴🇲' },
];


// ---------- Mock Products (for UI / Test) ----------
export const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    category: CATEGORIES.DRESSES,
    price: 900,
    oldPrice: null,
    rating: 4.5,
    reviewsCount: 2910,
    colors: ['#C49A8F', '#000000', '#E5E5E5'],
    image: '/images/products/dress-black.png',
    offer: null,
  },
  {
    id: 2,
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    category: CATEGORIES.DRESSES,
    price: 900,
    oldPrice: 1300,
    rating: 4.5,
    reviewsCount: 2910,
    colors: ['#C49A8F', '#000000', '#E5E5E5'],
    image: '/images/products/dress-white.png',
    offer: OFFERS.DISCOUNT_25,
  },
  {
    id: 3,
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    category: CATEGORIES.DRESSES,
    price: 900,
    oldPrice: null,
    rating: 4.5,
    reviewsCount: 2910,
    colors: ['#6B5B4B', '#FFFFFF'],
    image: '/images/products/sweater.png',
    offer: null,
  },
  
];
