import './styles.css';
import { useQuery } from "@apollo/client";


import { ListItem, FullView } from "../Article";
import { useState } from 'react';
import { ARTICLES_LIST } from '../../queries/article';

function App() {
  const { loading, error, data } = useQuery<{ articles: [Article] }>(ARTICLES_LIST);
  const [selectedArticle, setSelectedArticle] = useState('')

  const [readArticles, setReadArticles] = useState<string[]>([])

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const articleClickHandler = (title: string): void => {
    setReadArticles([...readArticles, title]);
    setSelectedArticle(title);
  };

  return (
    <main className="App">
      <h1>Articles about things</h1>
      <ul>
        {
          data.articles.map((article) =>
            <ListItem
              wasRead={readArticles.includes(article.title)}
              key={article.title} article={article} clickHandler={articleClickHandler} isCurrentSelected={selectedArticle === article.title} />
          )
        }
      </ul>
      <section className="App-detail">
        {!selectedArticle
          ? '👈 Click an Article!'
          : <FullView articleTitle={selectedArticle} />
        }
      </section>
    </main>)
}

export default App;
