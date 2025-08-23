// src/app/blog/_types.ts
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  category: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  contentHtml: string;
};
