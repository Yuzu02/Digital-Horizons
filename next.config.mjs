import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";

const withMDX = createMDX({
  //? Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeShiki],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ? Add the remotePatterns to allow the images from the specified hostnames
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/**", //? Include the pathname if necessary
      },
    ],
  },
};

export default withMDX(nextConfig);
