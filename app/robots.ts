import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://aibfamily.cloud/sitemap.xml",
    host: "https://aibfamily.cloud",
  };
}
