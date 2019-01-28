import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes, css, Global } from '@emotion/core';

import STYLES_GLOBAL from '~/common/styles/global';

import Navigation from '~/components/Navigation';

const ComponentPage = styled.div``;

const ComponentWireframeNotice = styled.marquee`
  font-size: 32px;
  color: red;
  position: fixed;
  font-weight: 400;
  bottom: 0;
  left: 0;
`;

const ComponentSingleColumn = styled.div`
  margin: 6rem auto 2rem auto;
  padding: 0 24px 0 24px;
  max-width: 768px;
  width: 100%;
  text-align: center;
`;

const ComponentAvatar = styled.span`
  display: inline-flex;
  height: 112px;
  width: 112px;
  border-radius: 88px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ComponentFooter = styled.div`
  padding-top: 24px;
  padding-bottom: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 88px auto 0 auto;
  border-top: 1px solid #ececec;
`;

const ComponentFooterLeft = styled.span`
  flex-shrink: 0;
`;

const ComponentFooterRight = styled.span`
  min-width: 25%;
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`;

const ComponentFooterLink = styled.span`
  display: inline-flex;
  margin-right: 16px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 40px;
  max-width: 320px;
  margin: 16px auto 0 auto;
`;

const DESC = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 320px;
  margin: 16px auto 0 auto;
  text-align: center;
`;

const StatCard = styled.span`
  margin: 0 16px 0 16px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StatCardNumber = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const StatCardBottom = styled.div`
  font-size: 14px;
  margin-top: 8px;
  font-weight: 400;
`;

const StatSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 16px 0;
`;

const ComponentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 1056px;
  margin: 48px auto 48px auto;
  width: 100%;
`;

const Card = styled.span`
  display: inline-flex;
  flex-direction: column;
  padding: 16px;
  width: 25%;
`;

const CardContent = styled.div`
  background-position: 50% 50%;
  background-size: cover;
  height: 260px;
  padding: 16px;
`;

const CardContentTitle = styled.h3`
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
`;

const CardContentMeta = styled.div`
  margin-top: 8px;
  font-size: 12px;
`;

const CONTENT = [
  { type: 'game', image: 'profile-game-1.gif' },
  { type: 'doc', title: 'Tutorial: Rendering Circles' },
  { type: 'doc', title: 'Tutorial: Creating a spritesheet' },
  { type: 'blog', title: 'Developer Log: Pixel Hollow Knight' },
  { type: 'game', image: 'profile-game-2.gif' },
  { type: 'blog', title: 'Developer Log: 3D in Love2D' },
  { type: 'doc', title: 'Tutorial: Draw Loop' },
  { type: 'game', image: 'profile-game-3.jpg' },
  { type: 'doc', title: 'Tutorial: Multiplayer API' },
  { type: 'doc', title: 'Tutorial: Presence Channels' },
  { type: 'game', image: 'profile-game-4.gif' },
  { type: 'doc', title: 'Tutorial: Your First Game' },
];

export default class ProfilePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>@Castle - Profile</title>
        </Head>
        <Navigation />
        <ComponentPage>
          <ComponentSingleColumn>
            <ComponentAvatar
              style={{
                backgroundImage: `url(/static/a-7.jpg)`,
              }}
            />

            <H1>Castle</H1>
            <DESC>
              The official account of the Castle Team. Follow us on Twitter{' '}
              <strong>@playcastle_io</strong>
            </DESC>

            <StatSection>
              <StatCard>
                <StatCardNumber>4</StatCardNumber>
                <StatCardBottom>Games</StatCardBottom>
              </StatCard>
              <StatCard>
                <StatCardNumber>16</StatCardNumber>
                <StatCardBottom>Favorites</StatCardBottom>
              </StatCard>
              <StatCard>
                <StatCardNumber>0</StatCardNumber>
                <StatCardBottom>Subscribers</StatCardBottom>
              </StatCard>
            </StatSection>
          </ComponentSingleColumn>

          <ComponentGrid>
            {CONTENT.map(c => {
              if (c.type === 'game') {
                return (
                  <Card>
                    <CardContent
                      style={{
                        backgroundImage: `url(/static/${c.image})`,
                        borderRadius: 6,
                        boxShadow: `0 1px 4px rgba(0, 0, 0, 0.09)`,
                      }}
                    >
                      &nbsp;
                    </CardContent>
                  </Card>
                );
              }

              if (c.type === 'blog') {
                return (
                  <Card>
                    <CardContent>
                      <CardContentTitle>{c.title}</CardContentTitle>
                      <CardContentMeta>11-11-19</CardContentMeta>
                    </CardContent>
                  </Card>
                );
              }

              return (
                <Card>
                  <CardContent>
                    <CardContentTitle>{c.title}</CardContentTitle>
                    <CardContentMeta>11-11-19</CardContentMeta>
                  </CardContent>
                </Card>
              );
            })}
          </ComponentGrid>

          <ComponentWireframeNotice>
            CONCEPT & WIREFRAME FOR 1440PX+ WIDTH SCREENS. E-MAIL JIM@CASTLE.GAMES OR TWEET @WWWJIM
            THOUGHTS. THANKS :-)
          </ComponentWireframeNotice>

          <ComponentFooter>
            <ComponentFooterLeft>
              <ComponentFooterLink>Terms of Service</ComponentFooterLink>
              <ComponentFooterLink>Privacy Policy</ComponentFooterLink>
              <ComponentFooterLink>Manfiesto</ComponentFooterLink>
              <ComponentFooterLink>Documentation</ComponentFooterLink>
            </ComponentFooterLeft>
            <ComponentFooterRight>
              <ComponentFooterLink>Twitter</ComponentFooterLink>
              <ComponentFooterLink>Facebook</ComponentFooterLink>
              <ComponentFooterLink>Discord</ComponentFooterLink>
            </ComponentFooterRight>
          </ComponentFooter>
        </ComponentPage>
      </React.Fragment>
    );
  }
}
