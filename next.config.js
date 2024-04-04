/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
        },
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          port: "",
        },
      ],
    },
  };