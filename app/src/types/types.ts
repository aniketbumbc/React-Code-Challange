export interface Animal {
  id: number;
  name: string;
  image: string;
  status: string;
  date: Date;
}

export type SortOrder = 'ascen' | 'desc';
