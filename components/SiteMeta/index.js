/**
 * Meta.js
 * Here you can import all your meta, links, open graph,...
 */
import React from "react"
import Head from "next/head"


const Meta = function Meta(props) {
    const { data: meta, site } = props

    return (
        <Head>
            <title>Lukáš Hodáč - HS Shampoo | Kindred </title>
            <meta charSet="utf-8" />
            {/*{meta.description && <meta name="description" content={meta.description} />}
            {meta.keywords && <meta name="keywords" content={meta.keywords} />}*/}

            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph  */}
            <meta property="og:type" content="website" />

            {/* Favicon */}
            {/*<link rel="apple-touch-icon" sizes="57x57" href={Container.versionBuilder("/static/img/favicon/apple-icon-57x57.png")} />
            <link rel="apple-touch-icon" sizes="60x60" href={Container.versionBuilder("/static/img/favicon/apple-icon-60x60.png")} />
            <link rel="apple-touch-icon" sizes="72x72" href={Container.versionBuilder("/static/img/favicon/apple-icon-72x72.png")} />
            <link rel="apple-touch-icon" sizes="76x76" href={Container.versionBuilder("/static/img/favicon/apple-icon-76x76.png")} />
            <link rel="apple-touch-icon" sizes="114x114" href={Container.versionBuilder("/static/img/favicon/apple-icon-114x114.png")} />
            <link rel="apple-touch-icon" sizes="120x120" href={Container.versionBuilder("/static/img/favicon/apple-icon-120x120.png")} />
            <link rel="apple-touch-icon" sizes="144x144" href={Container.versionBuilder("/static/img/favicon/apple-icon-144x144.png")} />
            <link rel="apple-touch-icon" sizes="152x152" href={Container.versionBuilder("/static/img/favicon/apple-icon-152x152.png")} />
            <link rel="apple-touch-icon" sizes="180x180" href={Container.versionBuilder("/static/img/favicon/apple-icon-180x180.png")} />
            <link rel="icon" type="image/png" sizes="192x192" href={Container.versionBuilder("/static/img/favicon/android-icon-192x192.png")} />
            <link rel="icon" type="image/png" sizes="32x32" href={Container.versionBuilder("/static/img/favicon/favicon-32x32.png")} />
            <link rel="icon" type="image/png" sizes="96x96" href={Container.versionBuilder("/static/img/favicon/favicon-96x96.png")} />
            <link rel="icon" type="image/png" sizes="16x16" href={Container.versionBuilder("/static/img/favicon/favicon-16x16.png")} />
            <link rel="manifest" href="/static/manifest.json" />/*/}
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />

            <meta name="robots" />
        </Head>
    )
}

export default Meta
