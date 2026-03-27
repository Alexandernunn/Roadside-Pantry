export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  gradient: string;
  badge: string;
  category: string;
}

export interface MenuCategory {
  name: string;
  tagline: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Entrees",
    tagline: "The main event. Slow-cooked, seasoned heavy, and built to satisfy.",
    items: [
      {
        id: "smothered-pork-chops",
        name: "Smothered Pork Chops",
        price: 14.99,
        description: "Fall-off-the-bone pork chops slow-cooked in a rich, savory onion gravy. Each chop is seared to lock in the flavor, then braised until the meat pulls apart with ease. Served over white rice with the gravy poured on thick.",
        gradient: "from-amber-700 to-orange-950",
        badge: "Fan Favorite",
        category: "Entrees",
      },
      {
        id: "fried-catfish",
        name: "Fried Catfish",
        price: 13.99,
        description: "Whole catfish fillets hand-dredged in seasoned cornmeal and fried golden in a cast-iron skillet. Nashville-spiced with a crispy crust that holds up against our house hot sauce.",
        gradient: "from-yellow-600 to-amber-900",
        badge: "Nashville Style",
        category: "Entrees",
      },
      {
        id: "oxtails",
        name: "Oxtails",
        price: 18.99,
        description: "Braised low and slow for hours in a rich, herbaceous gravy until the meat melts off the bone like butter. Served over rice with the braising liquid reduced to velvet.",
        gradient: "from-stone-700 to-stone-950",
        badge: "Most Ordered",
        category: "Entrees",
      },
    ],
  },
  {
    name: "Sides",
    tagline: "Don't sleep on the sides. They hit different here.",
    items: [
      {
        id: "mac-and-cheese",
        name: "Mac & Cheese",
        price: 4.99,
        description: "A five-cheese blend — sharp cheddar, gouda, gruyère, colby jack, and cream cheese — folded into al dente macaroni and baked in a cast iron until the top is golden and bubbly.",
        gradient: "from-yellow-500 to-orange-800",
        badge: "Classic",
        category: "Sides",
      },
      {
        id: "candied-yams",
        name: "Candied Yams",
        price: 4.99,
        description: "Fresh sweet potatoes slow-cooked in brown sugar, real butter, cinnamon, nutmeg, and just a touch of vanilla. Sweet, buttery, and absolutely unapologetic about it.",
        gradient: "from-orange-600 to-red-900",
        badge: "Sunday Best",
        category: "Sides",
      },
      {
        id: "collard-greens",
        name: "Collard Greens",
        price: 4.99,
        description: "Fresh collard greens slow-simmered with smoked turkey, onions, garlic, and house seasonings. Cooked down until silky and tender.",
        gradient: "from-emerald-800 to-green-950",
        badge: "Southern Classic",
        category: "Sides",
      },
      {
        id: "cornbread",
        name: "Cornbread",
        price: 2.99,
        description: "Baked fresh every morning in a seasoned cast iron skillet. Golden brown on the outside, moist and slightly sweet on the inside.",
        gradient: "from-yellow-400 to-amber-700",
        badge: "Baked Fresh Daily",
        category: "Sides",
      },
    ],
  },
  {
    name: "Drinks",
    tagline: "Keep it cold, keep it sweet.",
    items: [
      {
        id: "house-lemonade",
        name: "House Lemonade",
        price: 3.49,
        description: "Freshly squeezed lemons, cane sugar, and ice-cold water. Available sweet or unsweet. Made in-house every morning.",
        gradient: "from-yellow-200 to-yellow-600",
        badge: "House Made",
        category: "Drinks",
      },
    ],
  },
];

export const allMenuItems: MenuItem[] = menuCategories.flatMap((c) => c.items);
