/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // Catch-all redirect: any path other than "/" 302s to "/" while
  // the rest of the site is under construction. Flip this off when
  // real routes go live.
  async redirects() {
    return [
      {
        source: "/:path((?!_next/|favicon.ico|api/|robots.txt).+)",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
