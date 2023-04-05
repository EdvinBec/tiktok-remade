import "@/styles/globals.scss";
import "@/styles/NavigationBar.scss";
import "@/styles/SearchBar.scss";
import "@/styles/Button.scss";

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import NavigationBar from "@/container/NavigationBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NavigationBar />
      <Component {...pageProps} />
    </Layout>
  );
}
