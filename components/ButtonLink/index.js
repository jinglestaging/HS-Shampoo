import React from "react"

import Link from "next/link"

export default function ButtonLink(props) {

    let theme = ""
    if (!props.theme) theme = "default"
    else theme = props.theme

    return (
        <Link href={props.link} as={props.link}>
            <a href={props.link} className={`button button--${theme}`}>
                {props.text}
            </a>
        </Link>
    )
}
