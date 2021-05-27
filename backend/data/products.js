const products = [
  {
    name: 'Dr Trust Professional Series Finger Tip Pulse Oximeter',
    image: '/images/oxymeter.jpg',
    description:
      'The Dr Trust Professional Series Fingertip Pulse Oximeter determines your blood oxygen saturation level (SPO2), Perfusion Index, respiratory rate, pulse rate and pulse bar graph accurately',
    brand: 'Dr. Trust',
    category: 'Medical',
    price: 3499,
    countInStock: 50,
    rating: 4.5,
    numReviews: 6,
  },
  {
    name: 'Dr First (German) Steam inhaler vaporizer and steamer vaporizer',
    image: '/images/vapouriser.jpg',
    description:
      'Dr First’s Facial Steamer is a user-friendly device, crafted to perfection- Steam therapy for health and beauty. A multi-utility product, Dr First’s Facial Steamer can be used for immediate relief from severe cold and cough.',
    brand: 'Dr. First',
    category: 'MAEDICAL',
    price: 1299,
    countInStock: 15,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Nitrile Powder-Free Hand Gloves (Large, Blue) - Pack of 100',
    image: '/images/gloves.jpg',
    description:
      'Disposable, Ambidextrous Hospital, dental, laboratory, food and industrial use Single use disposable for multi purpose powder free nitrile examination gloves',
    brand: 'Generic',
    category: 'Safety',
    price: 450,
    countInStock: 20,
    rating: 3,
    numReviews: 4,
  },
  {
    name: 'Dabur Immunity Kit (Set of 6 Immunity Booster Products )',
    image: '/images/immunity.jpg',
    description:
      'Dabur Immunity Kit contains the goodness of 6 ayurvedic Products – Dabur Chyawanprash , Honitus , Stresscom ,Dabur Giloy ki Ghanvati , Dabur Giloy Churna and Dabur Imuda Syurp .Dabur Chyawanprash - Two spoons daily of Dabur Chyawanprash supports immunity and is beneficial for overall health and well being.',
    brand: 'Dabur',
    category: 'Health Care',
    price: 435,
    countInStock: 20,
    rating: 5,
    numReviews: 9,
  },
  {
    name: 'Dettol Original Alcohol based Hand Sanitizer(3 pack)',
    image: '/images/sanitizer.jpg',
    description:
      'DETTOL Hand Sanitizer is protection on the go; whether you are using a public toilet, public transport or simply eating outside, use DETTOL Sanitizer that offers water-less protection against germs. ',
    brand: 'Dettol',
    category: 'Sanitation',
    price: 300,
    countInStock: 12,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Tresemme Hair Fall Defence Shampoo, For Strong Hair',
    image: '/images/shampoo.jpg',
    description:
      'Our hairfall defense system is enriched with Keratin. Reinforces hair strength & prevents hair fall due to breakage. Get longer and stronger hair. Gentle enough for daily use',
    brand: 'Tresemme',
    category: 'Personal Care',
    price: 487,
    countInStock: 10,
    rating: 4,
    numReviews: 8,
  },
  {
    name: 'Cinthol Cool Bath Soap – 99.9% Germ Protection,(8 pack)',
    image: '/images/soap.jpg',
    description:
      'Begin your day with a burst of icy-cool freshness with Cinthol Cool Bath Soap. Give yourself a refreshing shower every day with this bathing soap, as the rush of cooling menthol with Active Deo fragrance leaves you charged for the rest of the day. With Cinthol Cool Soap, being Alive is Awesome.',
    brand: 'Godrej',
    category: 'Personal Care',
    price: 220,
    countInStock: 35,
    rating: 4,
    numReviews: 2,
  },
  {
    name: 'Nestle Everyday Dairy Whitener, Milk Powder for Tea, 400g',
    image: '/images/milkpowder.jpg',
    description:
      'Nestle EVERYDAY is a dairy whitener or dried milk powder that mixes in completely with your tea to lift its taste - so you get a thicker & tastier cup of tea, every time. We at Nestle use milk of the highest quality, and also use our international dairy know-how to carefully dry and balance this milk powder without losing any of its goodness',
    brand: 'Nestle',
    category: 'Food and Suppliments',
    price: 200,
    countInStock: 10,
    rating: 4,
    numReviews: 7,
  },
  {
    name: 'Lee Cooper Unisex sCotton Cloth Mask (Multicolor_One Size)',
    image: '/images/mask.jpg',
    description:
      'The mask has HeiQ Viroblock technology - Tested effectively to achieve anti-viral protection. A swiss technology that kills more than 99.9% of harmful viruses and bacteria upon contact. Wearing this face mouth mask, you could be protected from dust, bacteria small particles on-air, pollen, and much more. Anti-dust, Anti-odor',
    brand: 'Lee Cooper',
    category: 'Safety',
    price: 499,
    countInStock: 50,
    rating: 4,
    numReviews: 4,
  },
  {
    name: 'Wildcraft Original wildcraft w95 Facemask (pack of 6)',
    image: '/images/mask1.jpg',
    description:
      'SUPERMASK W95+ is a reusable outdoor respirator which comes with enhanced protection, comfort and an upgraded design. Powered by the Wildcraft Proprietary Cartridge engineered with a 6-layered triple filtration system, SUPERMASK W95+ is your perfect outdoor companion.',
    brand: 'Wildcraft',
    category: 'Safety',
    price: 237,
    countInStock: 10,
    rating: 4,
    numReviews: 6,
  },
  {
    name: 'Bournvita Health Drink Jar, Chocolate Flavour (1 kg)',
    image: '/images/bournvita.jpg',
    description:
      'Cadbury is a delicious chocolate health drink which is enriched with vitamin (d, b2, b9, b12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development. ',
    brand: 'Cadbury',
    category: 'Health and Suppliments',
    price: 385,
    countInStock: 10,
    rating: 3.5,
    numReviews: 6,
  },
  {
    name: 'Dabur Giloy Juice: Immunity Booster and Skin Health ',
    image: '/images/giloy.jpg',
    description:
      'Dabur Giloy Ras is 100 % pure , safe and natural ayurvedic juice which helps boost immunity. It is free from synthetic colours and flavours and is a natural immunity booster. It has antioxidant properties which helps treat many health problems.',
    brand: 'Dabur',
    category: 'Health and Suppliments',
    price: 237,
    countInStock: 11,
    rating: 3,
    numReviews: 5,
  },
  {
    name: 'Steelbird YS-20 1 unit 7Wings Unisex Helmet Face shield',
    image: '/images/shield.jpg',
    description:
      'This face shield can cover the entire face, which can protect your eyes, mouth and nose well. Preventing inhalation of saliva, dust, pollen, etc. can provide you with good protection',
    brand: 'Steelbird',
    category: 'Safety',
    price: 499,
    countInStock: 30,
    rating: 4.5,
    numReviews: 9,
  },
  {
    name: 'Tide Plus Extra Power Detergent Washing Powder ',
    image: '/images/detergent.jpg',
    description:
      'New Tide plus with extra power detergent, now with the added Power of Bar, has been developed to bring you brilliant whiteness on your clothes. It removes dirt even from washed clothes to give you even better cleaning. The enzyme formula in the washing powder helps in washing away the toughest stains ',
    brand: 'Tide',
    category: 'Sanitation',
    price: 653,
    countInStock: 10,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Tata Salt, No.1 Iodized salt brand, Desh a namak (Pack of 1Kg )',
    image: '/images/salt.jpg',
    description:
      "The pioneer of salt iodisation in India, Tata Salt, holds the distinction of being India's first national branded iodised salt. It has been consistently recognised as one of the country's leading food brands.Today, Tata Salt continues to be a market leader in the salt category",
    brand: 'Tata',
    category: 'Food and Suppliments',
    price: 20,
    countInStock: 20,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Trust Classic Sulphur Less Sugar, (Pack of 1kg )',
    image: '/images/sugar.jpg',
    description:
      'Trust Classic Sulphur Less Sugar dissolves instantly and this is particularly helpful when mixing sugar into cold drinks such as iced tea. It is an ideal sweetener for cold beverages, breakfast cereals and juices, dairy desserts, milk and pudding.',
    brand: 'Trust',
    category: 'Food and Suppliments',
    price: 48,
    countInStock: 25,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Neu.Farm - Value - Cashew/Kaju - Whole W400 - Cashew Nuts',
    image: '/images/cashew.jpg',
    description:
      'Satisfy your hunger by munching this pack of plain cashew nuts from the goodness factory of Nutraj. These delicious and mouth watering cashew nuts are delightful, nutritious and wholesome for the stomach.',
    brand: 'Nutraj',
    category: 'Food and Suppliments',
    price: 549,
    countInStock: 6,
    rating: 3.5,
    numReviews: 5,
  },
  {
    name: 'Nutraj California Almonds 1Kg, Best quality almonds',
    image: '/images/almond.jpg',
    description:
      'Almonds are rich in nutrients, especially magnesium, which help curb down hypertension and maintain good heart health. Helps in weight loss the mono unsaturated fat found in almonds prevents over eating and the dietary fiber makes you feel full',
    brand: 'Nutraj',
    category: 'Food and Suppliments',
    price: 825,
    countInStock: 8,
    rating: 4.5,
    numReviews: 6,
  },
]

export default products
