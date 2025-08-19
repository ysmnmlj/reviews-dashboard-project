export interface Review {
  id: string;
  guestName: string;
  listing: string; // listingName (property)
  type: string;
  channel: string;
  reviewText: string;
  categories: { category: string; rating: number }[];
  date: string; // ISO
  rating: number | null;
  approved?: boolean; // Géré en frontend (localStorage)
}