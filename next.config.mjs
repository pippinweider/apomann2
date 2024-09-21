/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  images: {
    unoptimized: true,  // Keep your existing configuration
  },
  assetPrefix: assetPrefix,  // For GitHub Pages
  basePath: basePath,        // For GitHub Pages
  trailingSlash: true,       // Ensure URLs end with a slash for static file serving
};

export default nextConfig;

