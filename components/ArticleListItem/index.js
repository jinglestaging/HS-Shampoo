import React from "react"

import Link from "next/link"


export default function ArticleListItem({ component }) {
    const { title, subtitle, text, buttonText, image, float, sex, linkHref, theme } = component

    // Center image on mobile
    // const isCenterMobile = theme === 'CenterMobile' ? "is-centered" : "";

    // Silver container config
    const isReversedArticle = float === 'left' ? "is-reversed" : "";
   
    return (
        <div className={`about-hs-item ${isReversedArticle}`}>
            <div className="col-lg-6 is-cover">

                {/* Title */}
                <div className="about-hs-item-content-wrapper">
                    <div className="about-hs-item-content-wrapper-item__subtitle">
                        {subtitle}
                    </div>
                    {sex && (<div className="about-hs-item-content-wrapper-item__sex">
                        {sex}
                    </div>)}
                    <h3 className="about-hs-item-content-wrapper-item__title">
                        <Link href={linkHref} as={linkHref}>
                            <a href={linkHref}>{title}</a>
                        </Link>
                    </h3>
                </div>

                {/* Text */}
                <div className="about-hs-item-text-wrapper">
                    <div className="about-hs-item-text-wrapper-item__description">
                        {text}
                    </div>

                    <Link href={linkHref} as={linkHref}>
                        <a href={linkHref} className="button button--default">
                            {buttonText}
                        </a>
                    </Link>
                </div>
            </div>
            
            <div className="col-lg-6 is-nopadding">
                {/* Image */}
                <div className="about-hs-item-item__image-wrapper">
                    <img src={image} alt="HS Shampoo" className="about-hs-item-image" />
                </div>
            </div>

            {/* Gradient */}
            <div className="about-hs-item-item__gradient" />

        </div>
    )
}