const BASE = import.meta.env.BASE_URL;

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  gradient: string;
  image: string | null;
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
        description: "Bone-in pork chops seared hard, then slow-braised in a thick, savory onion gravy until the meat gives up without a fight. Served over white rice and drowned in that gravy — the way your grandmother meant it to be.",
        gradient: "from-amber-700 to-orange-950",
        image: `${BASE}pork-chop.jpg`,
        badge: "Fan Favorite",
        category: "Entrees",
      },
      {
        id: "fried-catfish",
        name: "Fried Catfish",
        price: 13.99,
        description: "Hand-dredged in seasoned cornmeal and fried golden in cast iron. The crust snaps, the fish melts, and our Nashville-spiced kick stays with you. Get it hot or mild — either way, you're coming back for more.",
        gradient: "from-yellow-600 to-amber-900",
        image: `${BASE}catfish.jpg`,
        badge: "Nashville Style",
        category: "Entrees",
      },
      {
        id: "chicken-sandwich",
        name: "Chicken Sandwich",
        price: 12.99,
        description: "A thick, juicy chicken breast seasoned and fried to a perfect golden crunch, stacked with melted cheese, crisp greens, and grilled onions on a soft toasted bun. This isn't fast food — it's the sandwich that makes you skip the drive-thru for good.",
        gradient: "from-orange-500 to-amber-800",
        image: `${BASE}chicken-sandwich.jpg`,
        badge: "New",
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
        description: "Five cheeses — sharp cheddar, gouda, gruyère, colby jack, and cream cheese — folded into macaroni and baked in cast iron until the top goes golden and bubbly. Creamy all the way through. No powder. No shortcuts. Just cheese doing what cheese does.",
        gradient: "from-yellow-500 to-orange-800",
        image: `${BASE}mac-cheese-baked.jpg`,
        badge: "Classic",
        category: "Sides",
      },
      {
        id: "baked-beans",
        name: "Baked Beans",
        price: 4.99,
        description: "Navy beans slow-simmered in a smoky, brown-sugar sauce with thick-cut bacon and our house blend of seasonings. Sweet up front, smoky on the back end, and rich enough to steal the plate from your main. Don't underestimate them.",
        gradient: "from-orange-600 to-red-900",
        image: `${BASE}baked-beans.jpg`,
        badge: "Crowd Pleaser",
        category: "Sides",
      },
      {
        id: "collard-greens",
        name: "Collard Greens",
        price: 4.99,
        description: "Fresh greens slow-cooked with smoked turkey, onions, garlic, and house seasonings until they're silky, tender, and carrying the depth of every ingredient. No bitterness — just soul in a bowl. Ask for the pot liquor if you know what's good.",
        gradient: "from-emerald-800 to-green-950",
        image: `${BASE}collard-greens-new.jpg`,
        badge: "Southern Classic",
        category: "Sides",
      },
      {
        id: "cornbread",
        name: "Cornbread",
        price: 2.99,
        description: "Cast-iron baked every single morning. Golden crust on the outside, warm and slightly sweet on the inside. It pairs with everything on this menu and soaks up every drop of gravy. Honestly, you might want two.",
        gradient: "from-yellow-400 to-amber-700",
        image: `${BASE}cornbread.jpg`,
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
        description: "Fresh-squeezed lemons, real cane sugar, and ice-cold water — made in-house every morning so it's never from concentrate. Sweet or unsweet, your call. But we're partial to sweet, and once you try it, you will be too.",
        gradient: "from-yellow-200 to-yellow-600",
        image: `${BASE}house-lemonade.jpg`,
        badge: "House Made",
        category: "Drinks",
      },
    ],
  },
];

export const allMenuItems: MenuItem[] = menuCategories.flatMap((c) => c.items);
