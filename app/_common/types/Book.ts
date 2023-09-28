export type BookCategory = 'Motivational' | 'Business' | 'Entrepreneurship';
export type BookLabel = 'Creative' | 'Self-help';

export type Book = {
  id: number; //TODOKELVIN: should be unique id
  title: string;
  available: boolean;
  authors: string[];
  year?: number;
  categories: BookCategory[];
  labels: BookLabel[];
  ratings: number;
  readCount: number;
  likes: number;
  imageUrl: string;
  featured?: boolean;
  recentlyAdded?: boolean; //TODOKELVIN: Ideally business should tell us how to resolve this from date, otherwise, a boolean field is just fine for now
  hasOptions?: boolean; //TODOKELVIN: just one book has more options, business will tell us when we show more options
};
