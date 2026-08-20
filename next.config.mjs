/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.flowautomation.com.ar" }],
        destination: "https://flowautomation.com.ar/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
