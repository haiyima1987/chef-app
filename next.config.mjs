/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_SUPABASE_API_KEY: process.env.NEXT_SUPABASE_API_KEY
  },
};

export default nextConfig;
