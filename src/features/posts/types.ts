export interface Post {
  id: number;
  title: string;
  body: string;
  published: boolean;
  created: string;
  lastEdited: string;
  slug: string;
  tags?: string[];
}