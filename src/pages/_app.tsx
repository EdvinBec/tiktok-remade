import "@/styles/globals.scss";
import "@/styles/NavigationBar.scss";
import "@/styles/SearchBar.scss";
import "@/styles/Button.scss";
import "@/styles/Sidebar.scss";
import "@/styles/Sidebar.scss";
import "@/styles/Modal.scss";

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import NavigationBar from "@/container/NavigationBar";
import Sidebar from "@/container/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NavigationBar />
      <div className="inline">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
