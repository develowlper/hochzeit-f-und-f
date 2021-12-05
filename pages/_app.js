import { SessionProvider } from "next-auth/react";

import Layout from "components/layout";

import "tailwindcss/tailwind.css";
import Auth from "components/auth";
import Head from "components/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head />
      <SessionProvider {...session}>
        {Component.anon ? (
          <Component {...pageProps} />
        ) : (
          <Auth>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Auth>
        )}
      </SessionProvider>
    </>
  );
}
