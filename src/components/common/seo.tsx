import { NextSeo } from 'next-seo';
import React from 'react';

const SEO = () => (
  <NextSeo
    title="Demi Olaleye"
    titleTemplate="Demi Olaleye"
    defaultTitle="Demi Olaleye"
    description="An innovative marketer and branding expert fueled by a passion for product enhancement, equipped with a robust blend of strategic thinking and cutting-edge industry insights."
    canonical="https://okino.dev/"
    openGraph={{
      type: 'website',
      site_name: 'Okino',
      url: 'https://okino.dev/',
      title: 'Okino - Developer & Designer',
      description:
        'Software Engineer, Designer, and UI enthusiast with a passion for crafting scalable digital products and intuitive, aesthetically pleasing user experiences',
      images: [
        {
          url: '/images/og/og-1200.webp',
          width: 1200,
          height: 630,
          alt: 'Open graph image 1200',
        },
        {
          url: '/images/og/og-500.webp',
          width: 500,
          height: 500,
          alt: 'Open graph image 500',
        },
      ],
    }}
    twitter={{
      cardType: 'summary_large_image',
      site: '@yaseerokino',
      handle: '@yaseerokino',
    }}
    additionalLinkTags={[
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ]}
    additionalMetaTags={[
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
    ]}
  />
);

export default SEO;
