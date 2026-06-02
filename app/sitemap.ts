import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://aibfamily.cloud", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://aibfamily.cloud/#protection", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://aibfamily.cloud/#features", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://aibfamily.cloud/#pricing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: "https://aibfamily.cloud/#dashboard", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://aibfamily.cloud/#faq", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
