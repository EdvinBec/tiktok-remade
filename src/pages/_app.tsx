import "@/styles/globals.scss";
import "@/styles/NavigationBar.scss";
import "@/styles/SearchBar.scss";
import "@/styles/Button.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
