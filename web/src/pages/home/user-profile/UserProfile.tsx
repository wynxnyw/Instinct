import React from 'react';
import { Container, Column, Row, UserLayout, setURL, Icon } from 'components';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  return (
    <UserLayout section="profile">
      <Container>
        <Row>
          <Column side="right">
            <aside id="pprofile" className="default-section">
              <div className="profile-header">
                <div
                  className="header-content flex-container flex-vertical-center"
                  style={{ backgroundColor: '#47AEE' }}
                >
                  <img
                    src="https://playrise.me/avatarimage/avatarimage.php?figure=sh-908-92.hd-180-1015.lg-285-77.hr-828-158640.ch-210-153640&amp;action=std,crr=3&amp;gesture=std&amp;direction=2&amp;head_direction=2&amp;size=l&amp;img_format=png"
                    alt="lechris"
                    className="pixelated"
                  />
                  <div className="header-details">
                    <div className="header-title">lechris</div>
                    <div className="header-description" />
                    <div className="profile-icon">
                      <img
                        alt="credits"
                        src="https://playrise.me/riseweb/images/icon-credits.png"
                        style={{ position: 'relative', top: 8 }}
                      />{' '}
                      5,000
                    </div>
                    <div className="profile-icon">
                      <img
                        alt="diamonds"
                        src="https://playrise.me/riseweb/images/icon-diamonds.png"
                        style={{ position: 'relative', top: 8 }}
                      />
                      5
                    </div>
                    <div className="profile-icon">
                      <img
                        alt="flames"
                        src="https://playrise.me/riseweb/images/icon-flames.png"
                        style={{ position: 'relative', top: 5 }}
                      />
                      0
                    </div>
                    <div className="profile-icon">
                      <img
                        alt="gamewins"
                        src="https://playrise.me/riseweb/images/profiles/gamewins.png"
                        style={{ position: 'relative', top: 0 }}
                      />
                      0
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-content">
                <div className="details-container">
                  <Icon type="user" />
                  Registered since <b>27/12/2019</b>
                </div>
                <div className="details-container">
                  <Icon type="hotel" />
                  Currently <strong className="offline">offline</strong>
                </div>
                <div className="details-container">
                  <Icon type="door-open" />
                  Last logged in
                </div>
                <div className="details-container">
                  <Icon type="headphones-alt" />
                  <a href="https://youtu.be/GfxcnX7XWfg" target="_blank" rel="noopener noreferrer">
                    https://youtu.be/GfxcnX7XWfg
                  </a>
                </div>
              </div>

              <div className="profile-askfriend-button" data-id="1">
                <a className="rounded-button custom" href="https://playrise.me/settings/profile">
                  Edit Profile
                </a>
              </div>
            </aside>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}
