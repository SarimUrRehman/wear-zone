import { Product, Category, Review, Service, GalleryItem } from '../types';

// Real generated local asset paths
import bespokeSuitImg from '../assets/images/wearzone_bespoke_suit_1791896854246.jpg';
import kurtaWaistcoatImg from '../assets/images/wearzone_shalwar_kurta_1791896855348.jpg';
import groomSherwaniImg from '../assets/images/wearzone_groom_sherwani_1791896855518.jpg';
import tailorCraftImg from '../assets/images/wearzone_tailor_craft_1791896855166.jpg';
import heroModelImg from '../assets/images/hero_menswear_model_1791896853506.jpg';

export { heroModelImg, tailorCraftImg };

export const STORE_INFO = {
  name: 'Wear Zone',
  monogram: 'WZ',
  tagline: 'Stitch & Designer',
  phone: '0335 8193113',
  phoneClean: '03358193113',
  whatsappNumber: '923358193113',
  email: 'info@wearzonekarachi.com',
  address: 'Shop #132, 1st Floor, Dolmen Center, Tariq Road, Block 2, P.E.C.H.S., Karachi, 70050, Pakistan',
  googleRating: 4.9,
  reviewsCount: 79,
  openingHours: 'Mon – Sun: 11:00 AM – 10:00 PM',
  googleMapsUrl: 'https://maps.google.com/?q=Dolmen+Center+Tariq+Road+Karachi',
  mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6417726354897!2d67.05732157597394!3d24.87609204461972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eed89f2df89%3A0xe54e2ca1d2da2db8!2sDolmen%20Centre%2C%20Tariq%20Rd%2C%20Karachi!5e0!3m2!1sen!2s!4v1710325492000!5m2!1sen!2s',
  socials: {
    instagram: 'https://instagram.com/wearzone.official',
    facebook: 'https://facebook.com/wearzonekarachi',
    tiktok: 'https://tiktok.com/@wearzonekarachi'
  }
};

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    title: 'Shalwar Kameez',
    tagline: 'Graceful silhouettes in premium Egyptian & Swiss cottons',
    slug: 'shalwar-kameez',
    image: kurtaWaistcoatImg,
    itemCount: '24 Designs'
  },
  {
    id: 'cat-2',
    title: 'Designer Kurta',
    tagline: 'Handcrafted neckline embroideries with sartorial cuts',
    slug: 'kurta',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    itemCount: '32 Styles'
  },
  {
    id: 'cat-3',
    title: 'Royal Waistcoats',
    tagline: 'Embossed brocade, raw silk, and velvet statements',
    slug: 'waistcoats',
    image: kurtaWaistcoatImg,
    itemCount: '18 Variations'
  },
  {
    id: 'cat-4',
    title: 'Formal Suits & Blazers',
    tagline: 'Italian wool blends tailored to masculine perfection',
    slug: 'suits-blazers',
    image: bespokeSuitImg,
    itemCount: '15 Cuts'
  },
  {
    id: 'cat-5',
    title: 'Casual Shirts',
    tagline: 'Crisp linens and easy-breathe luxury poplins',
    slug: 'casual-shirts',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    itemCount: '20 Designs'
  },
  {
    id: 'cat-6',
    title: 'Trousers & Chinos',
    tagline: 'Clean-front drape with tailored flex waistbands',
    slug: 'trousers',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    itemCount: '12 Cuts'
  },
  {
    id: 'cat-7',
    title: 'Wedding & Groom Wear',
    tagline: 'Hand-zari sherwanis, turbans, and prince coats',
    slug: 'wedding',
    image: groomSherwaniImg,
    itemCount: 'Exclusive Bespoke'
  },
  {
    id: 'cat-8',
    title: 'Winter Wear',
    tagline: 'Cashmere-feel overcoats, tweed jackets, and warm waistcoats',
    slug: 'winter',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    itemCount: '10 Articles'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'wz-001',
    name: 'Imperial Black Velvet Groom Sherwani',
    category: 'wedding',
    categoryLabel: 'Wedding & Groom Wear',
    price: 68500,
    originalPrice: 75000,
    description: 'Regal hand-crafted master sherwani crafted in plush jet-black micro-velvet, embellished with antique matte-gold zardozi hand embroidery on collar, cuffs, and front slit.',
    fabric: 'Pure Royal Velvet with Raw Silk Inner Lining',
    details: [
      'Hand-stitched antique gold zardozi motifs',
      'Padded structured shoulder silhouette',
      'Accompanied by matching gold buttons and silk inner churidar',
      'Custom sizing & master tailor alterations included'
    ],
    image: groomSherwaniImg,
    secondaryImage: heroModelImg,
    isCustomStitchAvailable: true,
    featured: true
  },
  {
    id: 'wz-002',
    name: 'Charcoal Executive Three-Piece Bespoke Suit',
    category: 'suits-blazers',
    categoryLabel: 'Formal Suits & Blazers',
    price: 34500,
    originalPrice: 38000,
    description: 'Crafted with premium Super 120s Italian wool blend in deep charcoal grey. Tailored with peak lapels, double-vented back, and a tailored double-breasted vest.',
    fabric: 'Super 120s Italian Wool Blend with Bemberg Silk Lining',
    details: [
      'Hand-finished pick-stitched lapels',
      'Horn buttons and functional buttonhole cuffs',
      'Includes slim flat-front trousers with side adjusters',
      'Bespoke cut guaranteed to your exact chest & posture'
    ],
    image: bespokeSuitImg,
    secondaryImage: heroModelImg,
    isCustomStitchAvailable: true,
    featured: true
  },
  {
    id: 'wz-003',
    name: 'Ivory Raw Silk Kurta & Embroidered Waistcoat',
    category: 'waistcoats',
    categoryLabel: 'Royal Waistcoats',
    price: 18500,
    originalPrice: 21000,
    description: 'A timeless festive ensemble featuring an ivory raw-silk bandhgala waistcoat adorned with subtle floral gold threadwork, paired with matching cotton-silk kurta.',
    fabric: 'Raw Silk Outer with Pure Egyptian Cotton-Silk Base',
    details: [
      'Gold wire floral embroidery along the mandarin collar',
      'Concealed placket with gold metal statement studs',
      'Breathable, lightweight inner lining for Karachi climate',
      'Available ready-to-wear or custom measured'
    ],
    image: kurtaWaistcoatImg,
    secondaryImage: groomSherwaniImg,
    isCustomStitchAvailable: true,
    featured: true
  },
  {
    id: 'wz-004',
    name: 'Classic Giza Egyptian Cotton Shalwar Kameez',
    category: 'shalwar-kameez',
    categoryLabel: 'Shalwar Kameez',
    price: 11500,
    originalPrice: 13000,
    description: 'The definitive daily luxury suit. Woven from 100% long-staple Giza Egyptian cotton with a crisp liquid-finish drape, contrast thread detailing, and bespoke comfort cuffs.',
    fabric: '100% Giza Egyptian Long-Staple Cotton (Liquid Finish)',
    details: [
      'Wrinkle-resistant luxury finish',
      'Reinforced ban collar and French seam construction',
      'Dual utility hidden pockets',
      'Full tailoring customization for height and fit'
    ],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    secondaryImage: kurtaWaistcoatImg,
    isCustomStitchAvailable: true,
    featured: true
  },
  {
    id: 'wz-005',
    name: 'Midnight Navy Prince Coat with Metal Buttons',
    category: 'wedding',
    categoryLabel: 'Wedding & Groom Wear',
    price: 29500,
    originalPrice: 32000,
    description: 'An aristocratic cross between traditional sherwani and structured western blazer. Features asymmetric overlap styling with regal brass insignia buttons.',
    fabric: 'Textured Jacquard Tropical Wool',
    details: [
      'Architectural high-neck collar structure',
      'Bespoke embossed metal crest buttons',
      'Ideal for wedding receptions, valima, and galas',
      'Custom measured in-store or via video call'
    ],
    image: bespokeSuitImg,
    secondaryImage: groomSherwaniImg,
    isCustomStitchAvailable: true,
    featured: true
  },
  {
    id: 'wz-006',
    name: 'Obsidian Black Festal Embroidered Kurta',
    category: 'kurta',
    categoryLabel: 'Designer Kurta',
    price: 9800,
    originalPrice: 11500,
    description: 'Sleek jet-black textured cotton kurta highlighted by tonal threadwork and subtle gold accents along the collar and chest placket. Perfect for Eid and night festivities.',
    fabric: 'High-Density Mercerized Jet-Black Cotton',
    details: [
      'Hand-accented micro zardozi neckline touch',
      'Modern straight cut with side vents',
      'Deep color retention guarantee across washes',
      'Pairs elegantly with white or black raw silk shalwar'
    ],
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    secondaryImage: kurtaWaistcoatImg,
    isCustomStitchAvailable: true,
    featured: true
  },
  {
    id: 'wz-007',
    name: 'Sartorial British Plaid Wool Blazer',
    category: 'suits-blazers',
    categoryLabel: 'Formal Suits & Blazers',
    price: 24500,
    originalPrice: 27000,
    description: 'An elevated semi-formal blazer tailored from houndstooth plaid wool blend. Offers relaxed elegance when paired with custom trousers or dark denim.',
    fabric: 'Fine Wool & Cashmere Touch Blend',
    details: [
      'Unstructured natural shoulder pads for ease',
      'Patch pockets with genuine horn buttons',
      'Double vents for optimal sitting drape',
      'Customized sleeve length upon fitting'
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    secondaryImage: bespokeSuitImg,
    isCustomStitchAvailable: true,
    featured: false
  },
  {
    id: 'wz-008',
    name: 'Pure Irish Linen Summer Shirt & Chinos Set',
    category: 'casual-shirts',
    categoryLabel: 'Casual Shirts',
    price: 8500,
    originalPrice: 9500,
    description: 'Airy, relaxed-fit button-down made from authentic Irish flax linen. Pre-washed for a supple hand-feel that softens with every wear.',
    fabric: '100% Pure Irish Linen',
    details: [
      'Naturally thermoregulating for Karachi summers',
      'Mother of pearl buttons',
      'Tailored cuffs with roll-up tabs',
      'Available in Sand Beige, Sky Blue, and Pure White'
    ],
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    isCustomStitchAvailable: true,
    featured: false
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Hamza Farooqi',
    role: 'Groom (November 2025)',
    location: 'PECHS, Karachi',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Wear Zone made my wedding sherwani and 3-piece valima suit. The fitting on the first try was 100% on point. The master tailor at Dolmen Center Tariq Road takes real time with you. Best men clothing store in Karachi hands down!',
    occasion: 'Wedding Groom Attire',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Daniyal Tariq',
    role: 'Corporate Executive',
    location: 'Clifton, Karachi',
    rating: 5,
    date: '1 month ago',
    comment: 'I get all my business suits stitched here. The Italian wool fabrics they stock are genuine and the shoulder cuts feel like Savile Row tailoring. 4.9 stars is well-deserved.',
    occasion: 'Bespoke Executive Suit',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Syed Bilal Ahmed',
    role: 'Frequent Client',
    location: 'Gulshan-e-Iqbal, Karachi',
    rating: 5,
    date: '2 months ago',
    comment: 'Ordered 4 Egyptian cotton shalwar kameez sets for Eid. The stitching precision, the collar firmness, and the fabric softness are unmatched. They even delivered them pressed and packaged on time.',
    occasion: 'Eid Shalwar Kameez Collection',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Zeeshan Merchant',
    role: 'Entrepreneur',
    location: 'Defense Phase 6, Karachi',
    rating: 5,
    date: '2 months ago',
    comment: 'Their bespoke waistcoats are royal. Visited their shop #132 on the 1st floor of Dolmen Center. Courteous staff, honest pricing, and master craftsmanship. Will keep coming back.',
    occasion: 'Custom Raw Silk Waistcoats',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Dr. Asad Rizvi',
    role: 'Surgeon & Fashion Enthusiast',
    location: 'Bahadurabad, Karachi',
    rating: 5,
    date: '3 months ago',
    comment: 'Very few tailors in Tariq Road understand the modern slim cut without suffocating the shoulders. Wear Zone master masterfully balanced comfort and a sharp silhouette.',
    occasion: 'Tuxedo & Prince Coat',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Omer Khalid',
    role: 'Overseas Pakistani',
    location: 'Dubai / Visiting Karachi',
    rating: 5,
    date: '4 months ago',
    comment: 'Visited Tariq Road specifically for Wear Zone before flying back. They stitched two complete 3-piece suits within 4 days with express master fitting. Flawless stitch quality and great fabric.',
    occasion: 'Express Custom Stitching',
    verified: true
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Custom Stitching & Tailoring',
    description: 'Individual pattern drafting by master tailors with over 25 years of bespoke cutting expertise, ensuring exact drape to your posture.',
    iconName: 'Scissors',
    highlight: 'Bespoke Pattern Drafting'
  },
  {
    id: 'srv-2',
    title: 'Premium Quality Fabrics',
    description: 'Hand-picked Swiss voile, long-staple Egyptian Giza cottons, raw silks, and imported Italian Super 120s wool blends direct from top mills.',
    iconName: 'Sparkles',
    highlight: '100% Mill-Certified Luxury'
  },
  {
    id: 'srv-3',
    title: 'Perfect Fit Guarantee',
    description: 'We do not hand over your garment until every millimeter sits impeccably. Complimentary fine alterations on all Wear Zone garments.',
    iconName: 'CheckCircle2',
    highlight: 'Zero Compromise Promise'
  },
  {
    id: 'srv-4',
    title: 'Latest Fashion Trends',
    description: 'Contemporary collar shapes, concealed plackets, asymmetric cuts, and modern cuts while preserving South Asian cultural grandeur.',
    iconName: 'Crown',
    highlight: 'Modern Sartorial Vision'
  },
  {
    id: 'srv-5',
    title: 'Wedding & Occasion Wear',
    description: 'Full bridal and groomsmen ensembles — matching turbans (kulla), zardozi sherwanis, prince coats, and customized khussa footwear.',
    iconName: 'Gem',
    highlight: 'Royal Groom Wardrobe'
  },
  {
    id: 'srv-6',
    title: 'Affordable Luxury',
    description: 'Direct boutique-to-client atelier pricing with transparent fabric grading. Get bespoke designer quality without exaggerated boutique markups.',
    iconName: 'ShieldCheck',
    highlight: 'Honest Atelier Value'
  }
];

export const LOOKBOOK_ITEMS: GalleryItem[] = [
  {
    id: 'look-1',
    title: 'Royal Heritage Groom Collection',
    category: 'Wedding',
    image: groomSherwaniImg,
    description: 'Black velvet sherwani with handcrafted antique zardozi'
  },
  {
    id: 'look-2',
    title: 'Bespoke Italian Charcoal 3-Piece',
    category: 'Formal',
    image: bespokeSuitImg,
    description: 'Sharp peak-lapel silhouette with tailored double-breasted vest'
  },
  {
    id: 'look-3',
    title: 'Festive Ivory Raw Silk Ensemble',
    category: 'Traditional',
    image: kurtaWaistcoatImg,
    description: 'Subtle gold threadwork with handmade brass button studs'
  },
  {
    id: 'look-4',
    title: 'Master Cutting Atelier in Action',
    category: 'Craftsmanship',
    image: tailorCraftImg,
    description: 'Precision chalking and manual cutting by our master tailor'
  },
  {
    id: 'look-5',
    title: 'Gala Tuxedo with Satin Shawl Lapel',
    category: 'Formal',
    image: heroModelImg,
    description: 'Timeless black-tie sartorial elegance crafted for grand evenings'
  },
  {
    id: 'look-6',
    title: 'Modern Asymmetric Prince Coat',
    category: 'Occasion',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    description: 'Cross-closure architectural cut with crest gold accents'
  },
  {
    id: 'look-7',
    title: 'Executive Navy Business Cut',
    category: 'Formal',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered for boardrooms with wrinkle-resistant drape'
  },
  {
    id: 'look-8',
    title: 'Classic White Eid Shalwar Kameez',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    description: 'Liquid-finish Swiss voile cotton with hand-hemmed borders'
  }
];
