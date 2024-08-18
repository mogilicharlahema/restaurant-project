import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹150',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹190',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹120',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹135',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹215',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹165',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹250',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹310',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹265',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];


const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Recognized for outstanding culinary achievements.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Acknowledged for promising talent and innovation.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Honored for excellence in hospitality services.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Celebrated for exceptional culinary skills and leadership.',
  },
];

export default { wines, cocktails, awards };
