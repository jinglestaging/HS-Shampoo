import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"

import NavigationPrimary from "./NavigationPrimary"
import NavigationSecondary from "./NavigationSecondary"

const VIEWPORT_LARGE = 993;

function SiteHeader() {

        const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
        const [windowWidth, setWindowWidth] = useState(0);
        const navRefCreator = useRef()
        const isMenuExpanded = isMobileMenuExpanded ? "is-expanded" : ""
        const isBurgerActive = isMobileMenuExpanded ? "is-active" : ""

        const toggleMobileMenu = () => {
            setIsMobileMenuExpanded(!isMobileMenuExpanded);
        }

        useEffect(() => {
            if(windowWidth > VIEWPORT_LARGE) {
                setIsMobileMenuExpanded(false);
            }

            // Close mobile menu after screen wide more then 993px
            const updateWindowDimensions = () => {
                const newWidth = window.innerWidth;
                setWindowWidth(newWidth);
            };

            window.addEventListener("resize", updateWindowDimensions);
            window.addEventListener("orientationchange", updateWindowDimensions);

            return () => {
                window.removeEventListener("resize", updateWindowDimensions);
                window.removeEventListener("orientationchange", updateWindowDimensions);
            }
        
          }, [windowWidth]);

        return (
            <header className={`header ${isMenuExpanded}`}>
                <div className="l-header-container">
                    {/* Logo */}
                    <Link href="/" as="/">
                        <a href="/" role="button" aria-hidden="true">
                            <img src="../../static/img/logo.svg" className="header-branding" alt="HS Shampoo" />
                        </a>
                    </Link>

                    {/* Nav */}
                    <div className={isMobileMenuExpanded ? "header-nav is-expanded" : "header-nav"} ref={navRefCreator}>
                        <div className="header-nav__primary">
                            <NavigationPrimary />
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="header-nav__secondary">
                        <NavigationSecondary />
                    </div>

                    {/* Burger */}
                    <div
                        className="header-burger"
                        onClick={toggleMobileMenu}
                        role="button"
                        aria-label="Menu Button"
                        tabIndex={0}
                    >
                        <div className={`burger ${isBurgerActive}`}>
                            <span className="burger__line" />
                            <span className="burger__line" />
                            <span className="burger__line" />
                        </div>
                    </div>
                </div>
            </header>
        )
    
}

export default SiteHeader
