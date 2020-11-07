import React from "react"
import Link from "next/link"

export default function NavigationSecondary() {
    return (
        <ul className="nav-secondary" itemScope itemType="https://schema.org/SiteNavigationElement" role="menu">
            <li className="nav-secondary__item is-icon image-search" itemProp="name" role="menuitem">
                <Link href="/" as="/">
                    <a href="/" className="nav-secondary__link" itemProp="url">
                        Search
                    </a>
                </Link>
            </li>
            <li className="nav-secondary__item is-icon image-message" itemProp="name" role="menuitem">
                <a href="/" target="_blank" className="nav-secondary__link" itemProp="url" rel="noopener noreferrer">
                    Messages
                </a>
            </li>
        </ul>
    )
}
