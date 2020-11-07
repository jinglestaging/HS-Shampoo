import React /* , { useEffect } */ from "react"
import ProductCard from "../Cards/ProductCard"
import Slider from "react-slick";

export default function Carousel(props) {
    // Carousel Settings
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        centerMode: false,
        className: "center",
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        arrows: false
    }

    const cards = [
        {
            title: "プロシリーズ",
            text: "人の体にはさまざまな常在菌が共存しています。たとえば、肌をしっとりツヤツヤに保つために一役買ってい「表皮ブドウ球菌」や、すべての人の地肌に存在する。",
            button: "もっと見せる",
            link: "/",
            image: "static/img/shampoo-collection-small.png"
        },
        {
            title: "プロシリーズ",
            text: "人の体にはさまざまな常在菌が共存しています。たとえば、肌をしっとりツヤツヤに保つために一役買ってい「表皮ブドウ球菌」や、すべての人の地肌に存在する。",
            button: "もっと見せる",
            link: "/",
            image: "static/img/shampoo-collection-big.png"
        },
        {
            title: "プロシリーズ",
            text: "人の体にはさまざまな常在菌が共存しています。たとえば、肌をしっとりツヤツヤに保つために一役買ってい「表皮ブドウ球菌」や、すべての人の地肌に存在する。",
            button: "もっと見せる",
            link: "/",
            image: "static/img/shampoo-collection-small.png"
        },
        {
            title: "プロシリーズ",
            text: "人の体にはさまざまな常在菌が共存しています。たとえば、肌をしっとりツヤツヤに保つために一役買ってい「表皮ブドウ球菌」や、すべての人の地肌に存在する。",
            button: "もっと見せる",
            link: "/",
            image: "static/img/shampoo-collection-big.png"
        },
    ]

  return (
    <section className={`carousel carousel--blue`}>
      {/* Slider */}
      <div className="carousel__slick">
        <Slider {...settings} lazyLoad="ondemand">
            {cards &&
                cards.map((cardEl, index) => (
                    <ProductCard key={`k_${index}`} component={cardEl} />
                ))}
        </Slider>
        </div>


      </section>
  )
}
