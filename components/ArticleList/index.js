import React from "react"

import ArticleListItem from "../ArticleListItem"


function ArticleList(props) {
    const { articles } = props

    return (
        <div className="container container-content-wide">
            <div className="about-hs__article-list row row-no-padding">
                {articles &&
                    articles.map((pageEl, index) => (
                        <div className="col-12 is-nopadding" key={`k_${index}`}>
                            <ArticleListItem key={`k_${index}`} component={pageEl} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ArticleList
