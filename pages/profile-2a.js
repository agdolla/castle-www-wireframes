import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes, css, Global } from '@emotion/core';

import STYLES_GLOBAL from '~/common/styles/global';

import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import Avatar from '~/components/Avatar';

const LIST = [
  {
    image: 'preview-1.png',
    id: 1,
    title: 'Throw The Car Out With The Spaceship',
    author: 'Jesse Ruder',
    players: 8,
  },
  {
    image: 'preview-2.png',
    id: 2,
    title: 'The Mall In The Snow',
    author: 'Charlie Cheever',
    players: 42,
  },
  {
    image: 'preview-2a.png',
    id: 3,
    title: 'A Bard, And His Castle',
    author: 'Nikki',
    players: 13,
  },
  {
    image: 'profile-game-1.gif',
    id: 4,
    title: 'Megasphere',
    author: 'Rebekah Cox',
    players: `44,300`,
  },
  {
    image: 'screenshot-14.png',
    id: 5,
    title: 'DARK SOULS 16 BIT',
    author: 'T E R R I B L E B E N',
    players: 242,
  },
  {
    image: 'screenshot-15.png',
    id: 6,
    title: 'Burn The Streets',
    author: 'Lord Jason Riggs',
    players: `3,032,444`,
  },
  {
    image: 'screenshot-18.png',
    id: 7,
    title: 'Gringotts',
    author: 'Jess Hui',
    players: `89,004`,
  },
  {
    image: 'screenshot-20.png',
    id: 8,
    title: '6 Musicians, 2 Swords',
    author: 'Some Dog Person',
    players: 1,
  },
];

const ComponentPage = styled.div``;

const ComponentWireframeNotice = styled.marquee`
  font-size: 32px;
  color: red;
  position: fixed;
  font-weight: 400;
  bottom: 0;
  left: 0;
`;

const ComponentTwoColumnLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1024px;
  margin: 64px auto 0 auto;
`;

const Left = styled.span`
  width: 320px;
  flex-shrink: 0;
  padding-right: 48px;
`;

const Right = styled.span`
  min-width: 25%;
  width: 100%;
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
  margin-top: 16px;
`;

const StatSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 24px 0 16px 0;
`;

const StatCard = styled.span`
  margin: 0 24px 0 0;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: flex-start;
`;

const StatCardNumber = styled.div`
  font-size: 32px;
  color: #000000;
  font-weight: 600;
`;

const StatCardBottom = styled.div`
  font-size: 14px;
  margin-top: 8px;
  font-weight: 400;
`;

const RightNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
  border-bottom: 1px solid #ececec;
  margin-bottom: 24px;
`;

const RightNavigationItem = styled.div`
  display: inline-flex;
  margin-right: 24px;
  font-weight: 600;
  font-size: 12px;
  padding: 16px 0 8px 0;
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const CardLeft = styled.div`
  width: 188px;
  height: 112px;
  background: black;
  flex-shrink: 0;
  background-position: 50% 50%;
  background-size: cover;
`;

const CardRight = styled.div`
  min-width: 25%;
  width: 100%;
  padding-left: 24px;
`;

const H3 = styled.h3`
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  margin-top: 8px;
`;

const P = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.3;
`;

const BYLINE = styled.div`
  margin-top: 4px;
  margin-bottom: 16px;
  font-size: 10px;
  font-weight: 600;
`;

export default class Profile1APage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>@Castle - Profile</title>
        </Head>
        <Navigation />
        <ComponentPage>
          <ComponentTwoColumnLayout>
            <Left>
              <Avatar
                style={{
                  height: 104,
                  width: 104,
                  borderRadius: 104,
                  backgroundImage: `url(/static/a-9.jpg)`,
                }}
              />

              <H1>Kondo AI</H1>
              <DESC>
                Play games that bring you joy. Otherwise thank the creator, and stop playing.
              </DESC>

              <StatSection style={{ marginTop: 16 }}>
                <StatCard>
                  <StatCardNumber>13,602</StatCardNumber>
                  <StatCardBottom>Games played</StatCardBottom>
                </StatCard>
              </StatSection>
            </Left>
            <Right>
              <RightNavigation>
                <RightNavigationItem style={{ boxShadow: `0 1px 0 rgba(0, 0, 0, 1)` }}>
                  Play History (8)
                </RightNavigationItem>
              </RightNavigation>

              {LIST.map(p => {
                return (
                  <Card key={`${p.id}-profile`}>
                    <CardLeft style={{ backgroundImage: `url(/static/${p.image})` }} />
                    <CardRight>
                      <H3>{p.title}</H3>
                      <BYLINE>By {p.author}</BYLINE>
                      <StatCard>
                        <StatCardNumber style={{ fontSize: 18 }}>{p.players}</StatCardNumber>
                        <StatCardBottom style={{ fontSize: 10 }}>Online Players</StatCardBottom>
                      </StatCard>
                    </CardRight>
                  </Card>
                );
              })}
            </Right>
          </ComponentTwoColumnLayout>

          <ComponentWireframeNotice>
            CONCEPT & WIREFRAME FOR 1440PX+ WIDTH SCREENS. E-MAIL JIM@CASTLE.GAMES OR TWEET @WWWJIM
            THOUGHTS. THANKS :-)
          </ComponentWireframeNotice>
          <Footer />
        </ComponentPage>
      </React.Fragment>
    );
  }
}
