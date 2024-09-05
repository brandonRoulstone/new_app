/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-images.imagevenue.com'
            }
        ]
    }
};

export default nextConfig;
