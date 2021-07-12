import { gql } from "@apollo/client";

export const ARTICLE_DETAIL = gql`
    query GetArticleDetails($title: String!) {
        article(title: $title) {
            title
            urlToImage
            url
            publishedAt
            author
            content
        }
    }
`

export const ARTICLES_LIST = gql`
    query GetArticles {
        articles {
            title
            urlToImage
            description
        }
    }
`