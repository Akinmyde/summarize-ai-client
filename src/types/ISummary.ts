export type ISummary = {
  url: string;
  summary: string;
  keywords: string[];
  sentiment: {
    Positive: number;
    Neutral: number;
    Negative: number;
  };
  image: string;
  language: string;
  products?: string | string[];
}; 