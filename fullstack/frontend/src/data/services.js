export const categories = [
  'Alle Services',
  'Traditionelle Thai-Massage',
  'Klassische Massage',
  'Aroma- und Ölmassage',
  'Hot-Stone',
];

// Prices confirmed against the old site's Angebot page. The old site doesn't
// label what the three tiers per service mean (likely session duration) —
// still unconfirmed with the business owner, so we only show price, not a
// guessed duration.
export const services = [
  { id: 'thai-1', category: 'Traditionelle Thai-Massage', name: 'Traditionelle Thai-Massage', price: 70 },
  { id: 'thai-2', category: 'Traditionelle Thai-Massage', name: 'Traditionelle Thai-Massage', price: 120 },
  { id: 'thai-3', category: 'Traditionelle Thai-Massage', name: 'Traditionelle Thai-Massage', price: 170 },
  { id: 'klassisch-1', category: 'Klassische Massage', name: 'Klassische Massage', price: 70 },
  { id: 'klassisch-2', category: 'Klassische Massage', name: 'Klassische Massage', price: 120 },
  { id: 'klassisch-3', category: 'Klassische Massage', name: 'Klassische Massage', price: 170 },
  { id: 'aroma-1', category: 'Aroma- und Ölmassage', name: 'Aroma- und Ölmassage', price: 70 },
  { id: 'aroma-2', category: 'Aroma- und Ölmassage', name: 'Aroma- und Ölmassage', price: 120 },
  { id: 'aroma-3', category: 'Aroma- und Ölmassage', name: 'Aroma- und Ölmassage', price: 170 },
  { id: 'hotstone-1', category: 'Hot-Stone', name: 'Hot-Stone Massage', price: 139 },
  { id: 'hotstone-2', category: 'Hot-Stone', name: 'Hot-Stone Massage', price: 189 },
];
