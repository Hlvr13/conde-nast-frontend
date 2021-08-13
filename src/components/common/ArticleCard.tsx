import React from 'react';
import { formatDate } from '../../utils';
import { useHistory } from 'react-router-dom';

interface ArticleCardProps {
  article: {
    source: {
      id: string | null;
      name: string;
    };
    title: string;
    urlToImage: string;
    publishedAt: string;
    description: string;
    content: string;
  };
  isPreview?: boolean;
  handleCardClick?: (title: string) => void;
}

const ArticleCard = ({
  article,
  isPreview = false,
  handleCardClick,
}: ArticleCardProps) => {
  const history = useHistory();
  const { title, urlToImage, publishedAt, description } = article;

  /** Event sets new path and needed prperties for Single Article view
   * Over here, we can use state management or a simple react context
   * Since I just wanted a simple view on demand with NO management, I
   * set it on route's state
   *
   * @Note The fallback is that end user WILL need to go throough all
   * articles first and later to a specific one.
   */
  const handleOnReadMore = (event: any) => {
    /** Since it exist a small preview view in Desktop view, clicking on the
     * articles list, we stop that propagation and enters a single article view
     */
    event.stopPropagation();

    history.push(`/articles/${article.source.id}_${article.source.name}`, {
      ...article,
      publishedAt: formatDate(publishedAt), // Quick format before sending it
    });
  };
  return (
    <div
      className={`article-card ${isPreview ? 'preview' : ''}`}
      onClick={() => handleCardClick?.(title)}
    >
      <img src={urlToImage} />
      <div className="content">
        <h3 className="source">{article.source.name}</h3>
        {!isPreview && <h2 className="title">{title}</h2>}
        {isPreview && <p className="description">{description}</p>}
        <h5 className="date">{formatDate(publishedAt)}</h5>
        <p className="read-more" onClick={handleOnReadMore}>
          Read more
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
