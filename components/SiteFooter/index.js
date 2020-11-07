import React from "react"

import Link from "next/link"


export default function SiteFooter(props) {
    const { data } = props

    return (
        <footer className="footer">
            <div className="row">

                <div className="col-lg-6">
                    <span className="footer__title">{data[0].title}</span>

                        {/* Women Nav */}
                        <ul className="footer-nav">
                            {data &&
                                data[0].subnav.map((navEl, index) => (
                                    <div key={`k_${index}`}>
                                        <span className="footer__subtitle">{navEl.title}</span>
                                        {data &&
                                            navEl.fields.map((linkEl, index) => (
                                                <li key={`k_${index}`} className="footer-nav__item">
                                                    <Link href={linkEl.link} as={linkEl.link}>
                                                        <a className="footer-nav__link" href={linkEl.link} rel="noopener noreferrer">
                                                            {linkEl.title}
                                                        </a>
                                                    </Link>  
                                                </li>
                                            ))}
                                    </div>
                            ))}
                        </ul>
                </div>

                <div className="col-lg-6">
                    <span className="footer__title">{data[1].title}</span>

                        {/* Men Nav */}
                        <ul className="footer-nav">
                            {data &&
                                data[1].subnav.map((navEl, index) => (
                                    <div key={`k_${index}`}>
                                        <span className="footer__subtitle">{navEl.title}</span>
                                        {data &&
                                            navEl.fields.map((linkEl, index) => (
                                                <li key={`k_${index}`} className="footer-nav__item">
                                                    <Link href={linkEl.link} as={linkEl.link}>
                                                        <a className="footer-nav__link" href={linkEl.link} rel="noopener noreferrer">
                                                            {linkEl.title}
                                                        </a>
                                                    </Link>  
                                                </li>
                                            ))}
                                    </div>
                            ))}
                        </ul>
                </div>

                <div className="col-lg-6">
                    <span className="footer__title">{data[2].title}</span>

                        {/* TVCM Nav */}
                        <ul className="footer-nav">
                            {data &&
                                data[2].subnav.map((navEl, index) => (
                                    <div key={`k_${index}`}>
                                        <span className="footer__subtitle">{navEl.title}</span>
                                        {data &&
                                            navEl.fields.map((linkEl, index) => (
                                                <li key={`k_${index}`} className="footer-nav__item">
                                                    <Link href={linkEl.link} as={linkEl.link}>
                                                        <a className="footer-nav__link" href={linkEl.link} rel="noopener noreferrer">
                                                            {linkEl.title}
                                                        </a>
                                                    </Link>  
                                                </li>
                                            ))}
                                    </div>
                            ))}
                        </ul>
                </div>
                
                <div className="col-lg-6">
                    <span className="footer__title">{data[3].title}</span>

                        {/* Love Nav */}
                        <ul className="footer-nav">
                            {data &&
                                data[3].subnav.map((navEl, index) => (
                                    <div key={`k_${index}`}>
                                        <span className="footer__subtitle">{navEl.title}</span>
                                        {data &&
                                            navEl.fields.map((linkEl, index) => (
                                                <li key={`k_${index}`} className="footer-nav__item">
                                                    <Link href={linkEl.link} as={linkEl.link}>
                                                        <a className="footer-nav__link" href={linkEl.link} rel="noopener noreferrer">
                                                            {linkEl.title}
                                                        </a>
                                                    </Link>  
                                                </li>
                                            ))}
                                    </div>
                            ))}
                        </ul>
                </div>

                <div className="col-lg-6">
                    <span className="footer__title">{data[4].title}</span>

                        {/* Social Nav */}
                        <ul className="footer-nav">
                            {data &&
                                data[4].social.map((socialEl, index) => (
                                    <li key={`k_${index}`} className="footer-nav__item">
                                        <a href={socialEl.link} target="_blank" rel="noopener noreferrer" aria-label={socialEl.title}>
                                            <img src={socialEl.image} className="footer-nav__icon" alt={socialEl.description} />
                                        </a> 
                                    </li>
                            ))}
                        </ul>
                </div>
            </div>
        </footer>
    )
}
