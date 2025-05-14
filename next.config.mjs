import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default withFlowbiteReact(nextConfig);