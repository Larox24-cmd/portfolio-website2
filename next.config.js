/** @type {import('next').NextConfig} */
const nextConfig = {
  // The whole portfolio is one self-contained page in /public/site.html.
  // Serve it at "/" so the address bar stays clean.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/site.html" }],
    };
  },
};

module.exports = nextConfig;
