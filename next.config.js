module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fkmgsjkgkaewsfvdjccq.supabase.co', // Replace with your Supabase domain
          port: '',
          pathname:'/storage/v1/object/**'// Adjust based on your storage path
        },
      ],
    },
  };
  