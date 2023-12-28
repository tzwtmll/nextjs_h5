/**
 * @description 渲染根节点
 */
import type { AppProps } from "next/app";
import "./global.css";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("amfe-flexible");
  }, []);
  return (
    <>
      <Head>
        <meta name="renderer" content="webkit" />
        <title>title</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
