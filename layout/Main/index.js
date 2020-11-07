import React from "react"

import SiteHeader from "../../components/SiteHeader"
import SiteFooter from "../../components/SiteFooter"
import SiteMain from "../../components/SiteMain"
import SiteMeta from "../../components/SiteMeta"


export default function MainLayout(props) {
    const { children, footer } = props


    return (
        <div className="page-wrapper">
            <SiteMeta />
            <SiteHeader />
            <SiteMain>{children}</SiteMain>
            <SiteFooter data={footer} />
        </div>
    )
}
