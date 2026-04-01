export interface Issue {
  id: string;
  title: string;
  category: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'solved' | 'rejected';
  timestamp: string;
  location: string;
  upvotes: number;
  reporter: string;
  imageUrl?: string;
  isAnonymous: boolean;
  ward: string;
}

export const CATEGORIES = [
  'Road',
  'Water',
  'Electricity',
  'Garbage',
  'Drainage',
  'Street Light',
  'Other',
];

export const WARDS = [
  'Ward 12 (Boring Rd)',
  'Ward 23 (Kankarbagh)',
  'Ward 31 (Patna City)',
  'Ward 45 (Rajendra Nagar)',
  'Ward 14 (Fraser Road)',
];
