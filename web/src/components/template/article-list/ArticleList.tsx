import React from 'react';
import { ArticleCard, Container, Jumbotron } from 'components';

export function ArticleList() {
  return (
    <>
      <Jumbotron title="Latest News">
        <p>Stay updated with our latest news!</p>
      </Jumbotron>
      <Container>
        <div className="articles-container">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </Container>
    </>
  );
}
