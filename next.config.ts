import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the hero portrait so it stays crisp when enlarged.
    qualities: [75, 90],
  },
};

export default nextConfig;
