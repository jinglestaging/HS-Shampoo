import React /* , { useEffect } */ from "react"

import ButtonLink from "../../ButtonLink"

export default function ProductCard({ component }) {
    const { title, text, button, image, link } = component;

  return (
        <div className="product-card">
            <div className="product-card__text-wrapper">
                <h2 className="product-card__title">
                    <img src="/static/img/logo.svg" alt="HS Shampoo" className="product-card__logo" />
                    {title}
                </h2>
                <p className="product-card__text">{text}</p>
                <div className="product-card__button">
                    <ButtonLink text={button} link={link} theme="white"/>
                </div>
            </div>
            <div className="product-card__image-wrapper">
                <img src={image} className="product-card__image" alt="" />
            </div>
        </div>
  )
}
