import { SessionProvider } from "next-auth/react";

import Layout from "components/layout";

import "styles/global.css";
import "tailwindcss/tailwind.css";
import Auth from "components/auth";
import Head from "components/head";
import PlausibleProvider from "next-plausible";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head />
      <SessionProvider {...session}>
        <PlausibleProvider domain="baerenfamilie.wedding">
          {Component.anon ? (
            <Component {...pageProps} />
          ) : (
            <Auth>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Auth>
          )}
        </PlausibleProvider>
      </SessionProvider>
    </>
  );
}
