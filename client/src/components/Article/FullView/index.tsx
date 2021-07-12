import { useQuery } from "@apollo/client";
import { ARTICLE_DETAIL } from "../../../queries/article";
import styles from './styles.module.css';

const locale = 'en-GB'

interface FullViewArticleProps {
    articleTitle: string
}

function FullView({ articleTitle }: FullViewArticleProps) {
    const { loading, error, data } = useQuery<{ article: Article }>(ARTICLE_DETAIL, { variables: { title: articleTitle } });

    if (loading || !data) return <p>Loading details...</p>;
    if (error) return <p>Error :(</p>;

    const { article: { title, urlToImage, content, author, url, publishedAt = '' } } = data;

    return (
        <article className={styles.container}>
            <img src={urlToImage} alt="" width="50%" />
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.meta}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                    Author: {author || "Unknown"}
                </a>

                <span>
                    Published in: <time dateTime={publishedAt}>{Intl.DateTimeFormat(locale).format(new Date(publishedAt))}</time>
                </span>
            </div>
            <p>
                {content}
            </p>
        </article>
    )
}

export default FullView;
