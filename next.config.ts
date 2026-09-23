import type { NextConfig } from "next";

const cloudflareStaticExport = process.env.CLOUDFLARE_PAGES === "true";
const filePreview = process.env.FILE_PREVIEW === "true";

const nextConfig: NextConfig = {
  // Vercel uses the normal Next.js output. Cloudflare Pages uses a static `out/` folder.
  output: cloudflareStaticExport || filePreview ? "export" : undefined,
  assetPrefix: filePreview ? "." : undefined,
};

export default nextConfig;
