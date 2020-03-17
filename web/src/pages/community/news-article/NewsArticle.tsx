import React from 'react';
import { Card, Container, Column, Row, Jumbotron, UserLayout, setURL } from 'components';

setURL('community/news/:articleID', <NewsArticle />);

export function NewsArticle() {
  return (
    <UserLayout section="article">
      <Jumbotron
        className="text-center"
        title="Cupid's Garden"
        style={{
          backgroundImage: 'url(https://playrise.me/riseweb/images/news/lpromo_Swan_Lake.png)',
          backgroundSize: '100%',
        }}
      >
        <p>Campaigns & Activities - Feb 2, 2020</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card>
              <p>
                Candy, flowers, heart-shaped notes, what’s not to like about Valentine’s Day? This sweet celebration,
                which happens every year on February 14, is all about spreading the love!
              </p>
              <h5>Cupid's Garden</h5>
              <img
                alt="cupids garden"
                src="https://1.bp.blogspot.com/-fFHdIuAHMKE/XbJQM4aXXsI/AAAAAAABYKk/LcaSuionLiQVx_PRELWGg4LgUV40xjqCwCKgBGAsYHg/s1600/Immagine-RedBus-festa-della-donna.png"
                style={{ float: 'right', height: 155, width: 155 }}
              />
              <p>
                Cupid was the son of Venus, the goddess of love and beauty. There are myths about Cupid and his arrows.
                Cupid's arrows could make you fall in love. In fact, when Cupid shot his arrows into an unsuspecting
                victim, that victim (mortal or god) fell in love with the very next person they saw!
              </p>
              <h5>How to play:</h5>
              <p>
                Make it through Cupid's Garden of love! Walking infront or behind the roses will teleport you to the
                beginning of the maze but standing beside the roses will keep you safe! Can you make it? Complete this
                maze to win the badge shown below!
              </p>
              <div className="article-author flex-container flex-vertical-center mt-3">
                <div className="author-image">
                  <img src="https://playrise.me/riseweb/images/avatar-frank.png" alt="" />
                </div>
                <div className="author-details">
                  <div className="author-name"> Hotel Management</div>
                  <div className="author-function">Administrator</div>
                </div>
              </div>
            </Card>
          </Column>
          <Column side="right">
            <Card header="Recent News">
              <p>Coming soon</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}
