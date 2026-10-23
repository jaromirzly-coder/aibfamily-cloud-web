/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/cookies", destination: "/privacy-policy", permanent: true },
      { source: "/gdpr", destination: "/privacy-policy", permanent: true },
      { source: "/withdrawal", destination: "/terms", permanent: true },
    ];
  },
};

module.exports = nextConfig;
