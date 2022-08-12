/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';

export default function WebsiteHead({ title }) {
  return (
    <Head>
      <title>{title} - VocaConcert</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* meta tags */}
      <meta name="theme-color" content="#505050" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="title" content="Vocaloid Fan Concert DB" />
      <meta
        name="description"
        content="Database of upcoming and past VOCALOID fan concerts        "
      />
      <meta name="keywords" content="vocaloid, concert" />
      <meta name="author" content="David Ralph" />
      <meta name="language" content="English" />
    </Head>
  );
}
