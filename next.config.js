/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ THIS LINE FIXES YOUR ERROR
  },
};

module.exports = nextConfig;
