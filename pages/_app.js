import { SessionProvider } from "next-auth/react";

import Layout from "components/layout";

import "tailwindcss/tailwind.css";
import Auth from "components/auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
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
  );
}
