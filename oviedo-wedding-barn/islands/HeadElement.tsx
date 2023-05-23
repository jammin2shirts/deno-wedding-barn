import { Head } from "$fresh/runtime.ts";

export type HeadProps = {
  url: URL;
  title: string;
  description: string;
  image?: string;
};

export default function HeadElement({ description, image, title, url }: HeadProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.ico" sizes="32x32" />
        <link rel="stylesheet" href="https://use.typekit.net/lds4gch.css" async>
        </link>
        <meta name="description" content={description} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={url.href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={url.hostname} />
        <meta property="twitter:url" content={url.href} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N36TNXG');`,
        }}
      >
      </script>
    </>
  );
}
