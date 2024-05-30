import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "production";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? "/portfolio" : "",
    },
  },
};

export default config;
