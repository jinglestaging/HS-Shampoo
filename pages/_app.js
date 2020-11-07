import React from "react"
import MainLayout from "../layout/Main"
import JSONGetContent from "../src/JSONGetContent"

import '../static/scss/bundle.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HSApp({ Component, pageProps }) {

  const footer = JSONGetContent("home", "footer");

  return (
        <MainLayout footer={footer}>
            <Component {...pageProps} />
        </MainLayout>
      )
}

export default HSApp
