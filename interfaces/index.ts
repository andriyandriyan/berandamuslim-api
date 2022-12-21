export interface Post {
  id: number;
  date: string;
  modified_gmt: string;
  link: string;
  title: Title;
  _embedded?: Embedded;
}

export interface Embedded {
  'wp:featuredmedia': WpFeaturedmedia[];
}

export interface WpFeaturedmedia {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: Title;
  caption: Title;
  alt_text: string;
  source_url: string;
}

export interface Title {
  rendered: string;
}
