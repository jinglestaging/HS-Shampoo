import React, { Component } from "react";
import Carousel from "../components/Carousel"
import HomepageBackground from "../components/HomepageBackground"

import ArticleList from "../components/ArticleList"

export default function Home() {

  const articles =  [
    {
      title: "ダンドラフとは？",
      subtitle: "記事",
      text: "ふけは、すべての頭皮に存在する微生物から始まります。これは、それに敏感な人々の皮膚剥離を早めます。",
      buttonText: "もっと見せる",
      sex: "",
      float: "left",
      image: "/static/img/longhair-man-clean.png",
      linkHref: "/",
      theme: "default"
    },
    {
      title: "イッチ、頭皮乾燥？",
      subtitle: "記事",
      text: "敏感な頭皮には特別な注意が必要です。私たちの専門家からのアドバイスで敏感な頭皮の世話をする方法を学びます。",
      buttonText: "もっと見せる",
      sex: "",
      float: "right",
      image: "/static/img/longhair-woman.png",
      linkHref: "/",
      theme: "default"
    },
    {
      title: "メンズヘアケア",
      subtitle: "製品",
      text: "基本のヒントを探していても、新鮮なスタイルのインスピレーションを求めていても、ルーチンのすべてのステップに役立つ情報がここにあります。",
      buttonText: "もっと見せる",
      sex: "性別で",
      float: "left",
      image: "/static/img/longhair-man.png",
      linkHref: "/",
      theme: "default"
    },
    {
      title: "女性のヘアケア",
      subtitle: "製品",
      text: "フケのような小さなことで、健康的で美しい髪を邪魔しないでください。あなたの髪のニーズに最適なルーチンを見つけます。",
      buttonText: "もっと見せる",
      sex: "性別で",
      float: "right",
      image: "/static/img/longhair-woman-clean.png",
      linkHref: "/",
      theme: "default"
    },
    {
      title: "製品を見る",
      subtitle: "製品",
      text: "フレッシュなフレグランスから、滑らかでシルクのような髪まで、どんなタイプの頭と肩にも対応します。",
      buttonText: "もっと見せる",
      sex: "",
      float: "left",
      image: "/static/img/shampoo-collection-product.png",
      linkHref: "/",
      theme: "CenterMobile"
    },
    {
      title: "h＆s のメカニズム",
      subtitle: "記事",
      text: "フケのような小さなことで、健康的で美しい髪を邪魔しないでください。あなたの髪のニーズに最適なルーチンを見つけます。",
      buttonText: "もっと見せる",
      sex: "",
      float: "right",
      image: "/static/img/science-glass.png",
      linkHref: "/",
      theme: "default"
    }
  ]

  return (
    <div className="container">
      <main className="container-main">
        <HomepageBackground />
        <Carousel />
        <ArticleList articles={articles} />
      </main>
    </div>
  )
}
