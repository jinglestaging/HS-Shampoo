import React from "react"
import Link from "next/link"

export default function NavigationPrimary() {
    return (
        <nav>
            <ul className="nav-primary" itemScope itemType="https://schema.org/SiteNavigationElement" role="menu">
                <li className="nav-primary__item" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" className="nav-primary__link" itemProp="url">
                            ショップ商品
                        </a>
                    </Link>
                </li>

                <li className="nav-primary__item" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" as="/" className="nav-primary__link" itemProp="url">
                            頭皮の心配
                        </a>
                    </Link>
                </li>

                <li className="nav-primary__item" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" as="/" className="nav-primary__link" itemProp="url">
                            頭皮アドバイザ
                        </a>
                    </Link>
                </li>

                <li className="nav-primary__item" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" as="/" className="nav-primary__link" itemProp="url">
                            美しい髪
                        </a>
                    </Link>
                </li>

                <li className="nav-primary__item" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" as="/" className="nav-primary__link" itemProp="url">
                            新着情報
                        </a>
                    </Link>
                </li>

                <li className="nav-primary__item" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" as="/" className="nav-primary__link" itemProp="url">
                            約
                        </a>
                    </Link>
                </li>

                <li className="nav-primary__item is-icon image-search" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" as="/" className="nav-primary__link" itemProp="url" />
                    </Link>
                </li>

                <li className="nav-primary__item is-icon image-message" itemProp="name" role="menuitem">
                    <Link href="/" as="/" activeClassName="is-active">
                        <a href="/" as="/" className="nav-primary__link" itemProp="url" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
