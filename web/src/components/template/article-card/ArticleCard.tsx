import React from 'react';
import { Link } from 'react-router-dom';

export function ArticleCard() {
  return (
    <div className="article-container">
      <Link
        className="article-content pixelated"
        to="/community/news/1"
        style={{ backgroundImage: 'url(/img/news/swan_lake.png)' }}
      >
        <div className="article-header">
          <div className="article-category">Campaigns & Activities</div>
          <div className="article-separation" style={{ backgroundColor: '#f28600' }} />
          <div className="article-title">Cupid's Garden</div>
        </div>
      </Link>
    </div>
  );
}
