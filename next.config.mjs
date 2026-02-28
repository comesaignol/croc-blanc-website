/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Interdire l'inclusion dans des iframes (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Empêcher le MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Forcer HTTPS pendant 2 ans, inclure sous-domaines
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Contrôle du referrer : envoyer uniquement l'origine en cross-origin
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Désactiver les features browser non nécessaires
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
  },
  // CSP : limiter les sources de contenu autorisées
  // 'unsafe-inline' requis pour Next.js (hydration scripts + Tailwind inline styles)
  // object-src 'none' bloque Flash/plugins
  // frame-ancestors 'none' = X-Frame-Options en mode CSP Level 2+
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' https://images.unsplash.com data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  // Ne pas exposer X-Powered-By: Next.js dans les réponses HTTP
  poweredByHeader: false,

  // Ne pas exposer les source maps en production
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
