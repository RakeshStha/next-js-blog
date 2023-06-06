/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL: process.env.MONGO_DB_URL,
    DB_NAME: process.env.DB_NAME
  }
}

module.exports = nextConfig
