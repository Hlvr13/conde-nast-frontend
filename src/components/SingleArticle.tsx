import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ArticleProps {}

const Articles = ({}: ArticleProps) => {
  const location = useLocation();
  const [currentrticle, _] = useState<any>(location.state);
  console.log(
    '🚀 ~ file: SingleArticle.tsx ~ line 9 ~ Articles ~ currentrticle',
    currentrticle,
  );

  return (
    <>
      <header className="article-header">
        <div className="container content">
          <div className="content-img">
            <img src={currentrticle.urlToImage} />
          </div>
          <div className="content-header">
            <h3 className="source">{currentrticle.source.name}</h3>
            <h2 className="title">{currentrticle.title}</h2>
            <h5 className="date">{currentrticle.publishedAt}</h5>
          </div>
        </div>
      </header>
      <section className="article-content">
        <p>{currentrticle.content.replace(/\[(.*?)\]/gm, '')} </p>
        <a href={currentrticle.url} rel="noopener noreferrer">
          Go to site
        </a>
      </section>
    </>
  );
};

export default Articles;
