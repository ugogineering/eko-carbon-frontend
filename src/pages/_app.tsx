import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import { NextComponentType } from "next";
import { SWRConfig } from "swr";
import React, { FC } from "react";
import DismissableToast from "../components/main/dismissableToast";
import { LoadingProvider } from "../context/loadingCtx";
import LoadingComp from "../components/main/loader";
import { fetcher } from "../lib/helperFunctions/fetcher";
import { HeaderProvider } from "../context/headerCtx";
// import DefaultLayout from "../layouts/defaultLayout";

type ComponentProp = NextComponentType & {
  getLayout?: () => FC<{}>;
};

type AppProps = NextAppProps & { Component: ComponentProp };

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 10000,
      }}
    >
      <LoadingProvider>
        <HeaderProvider>
          <DismissableToast />
          <LoadingComp />
          <>{getLayout(<Component {...pageProps} />)}</>
        </HeaderProvider>
      </LoadingProvider>
    </SWRConfig>
  );
}

export default MyApp;
