/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: [
        //   "perenual.com",
        //   "openweathermap.org",
        //   "lh3.googleusercontent.com",
        //   "cdn.worldweatheronline.com",
        //   "cdn.weatherapi.com",
        // ],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};

module.exports = nextConfig
