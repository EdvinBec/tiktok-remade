import Head from "next/head";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <Head>
        <title>TikTok - Remade - Edvin</title>
        <meta
          name="description"
          content="Clone of the popular Social Media App - TikTok"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
