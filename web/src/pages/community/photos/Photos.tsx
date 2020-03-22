import React from 'react';
import { UserLayout, setURL, Jumbotron } from 'components';

setURL('community/photos', <Photos />);

export function Photos() {
  return (
    <UserLayout section="community_photos">
      <Jumbotron title="The best moments in the Hotel">
        <p>All the latest photos from the community.</p>
      </Jumbotron>
    </UserLayout>
  );
}
