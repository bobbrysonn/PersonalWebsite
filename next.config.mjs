/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
            },
          ],
    },
    webpack: (config) => {
      config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
      return config;
    }
};

export default nextConfig;
