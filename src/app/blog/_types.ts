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
    // Puedes cambiar a "markdown" si luego deseas parsearlo con un lib
    contentHtml: string; // Renderizado en la página de detalle con dangerouslySetInnerHTML
  };
  