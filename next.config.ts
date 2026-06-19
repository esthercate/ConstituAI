import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,

	typescript: {
		ignoreBuildErrors: true,
	},

	images: {
		unoptimized: true,
	},
};

export default nextConfig;
