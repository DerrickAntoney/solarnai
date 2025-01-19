import { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fkmgsjkgkaewsfvdjccq.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/solarpics/**',
        search: '',
      },
    ],
  },
};

export default config;
