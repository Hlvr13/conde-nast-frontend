import React, { useEffect, useState, useRef } from 'react';
import ArticleCard from './common/ArticleCard';
import { useTopHeadlines } from '../api';
import Loader from '../components/common/Loader';
import SearchBox from '../components/common/SearchBox';

/** Simple generic Props */
interface ArticleProps {
  [key: string]: any;
}

const Articles = ({}: ArticleProps) => {
  const [selectedArticle, setSelectedArticle] = useState<any>({});
  const [searchRefTimeout, setSearchRefTimeout] = useState(0);
  const [keywordFilter, setKeywordFilter] = useState('');

  /** Obtains top UK Headlines
   * There was no 'uk' as for I used gb instead-
   * Since we are using graphql, we can add all properties that
   * we need.
   * In this situation =>
   *      title, urlToImage, publishedAt, description, content, url, source {name,id}
   */
  const {
    error,
    data: topUKArticles,
    loading,
  } = useTopHeadlines(
    { country: 'gb', q: keywordFilter },
    'title, urlToImage, publishedAt, description, content, url, source {name,id}',
  );

  /** For preview view, which is only visualized in Desktop view,
   *  we set the first article
   */
  useEffect(() => {
    topUKArticles && setSelectedArticle(topUKArticles[0]);
  }, [topUKArticles]);

  if (error)
    return <h1 data-testid="articles-component">Oops! Something went wrong</h1>;

  /** We can use a HOC for every loader. Since it is a simple app, just
   * render it over here.
   */
  if (loading) return <Loader />;

  const handleOnSearchChange = (event: any) => {
    const value = event.target.value;
    clearInterval(searchRefTimeout);
    const timeoutRef = setTimeout(() => {
      setKeywordFilter(value);
    }, 2000);
    setSearchRefTimeout(timeoutRef);
  };

  return (
    <section data-testid="articles-component">
      <div className="container">
        <div className="preview">
          <div className="preview-selected">
            <ArticleCard article={selectedArticle as any} isPreview={true} />
          </div>

          <div className="preview-options">
            {topUKArticles.map((article, i) => (
              <ArticleCard
                article={article as any}
                key={i}
                handleCardClick={(title: string) => {
                  const foundArticle = topUKArticles.find(
                    (article) => article.title === title,
                  );
                  setSelectedArticle(foundArticle);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <SearchBox handleOnChange={handleOnSearchChange} />
    </section>
  );
};

export default Articles;
