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
    image: 'screenshot-8.png',
    id: 1,
    title: 'Fun Blast Joy',
    description: `Castle's first game for tutorial purposes. We made this game to show all creators it is possible to create low poly art. And we had a great time doing it!`,
  },
  {
    image: 'screenshot-10.png',
    id: 2,
    title: 'Cake Party Sunshine',
    description: `From Rusticus I received the impression that my character required improvement and discipline; and from him I learned not to be led astray to sophistic emulation, nor to writing on speculative matters.`,
  },
  {
    image: 'screenshot-5.png',
    id: 3,
    title: 'Orange Blue Pink',
    description: `From Apollonius I learned freedom of will and undeviating steadiness of purpose; and to look to nothing else, not even for a moment, except to reason; and to be always the same, in sharp pains`,
  },
  {
    image: 'screenshot-4.png',
    id: 4,
    title: 'Wow Fun Outrageous',
    description: `From Alexander the grammarian, to refrain from fault-finding, and not in a reproachful way to chide those who uttered any barbarous or solecistic or strange-sounding expression; but dexterously to introduce the very expression which ought to have been used`,
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
  width: 196px;
  height: 128px;
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

const Tag = styled.div`
  display: inline-flex;
  padding: 8px 16px 8px 16px;
  align-items: center;
  justify-content: space-between;
  line-height: 12px;
  font-size: 12px;
  background: black;
  font-weight: 700;
  color: white;
  border-radius: 6px;
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
                  backgroundImage: `url(/static/a-7.jpg)`,
                }}
              />

              <H1>Castle</H1>
              <DESC>
                The official account of the Castle Team. Follow us on Twitter{' '}
                <strong>@playcastle_io</strong>
              </DESC>

              <div style={{ marginTop: 16 }}>
                <Tag style={{ backgroundColor: `#238C2C` }}>🎮&nbsp;&nbsp;Creator of Games</Tag>
              </div>

              <div style={{ marginTop: 8 }}>
                <Tag style={{ backgroundColor: `#F2B824` }}>📚&nbsp;&nbsp;Provider of Wisdom</Tag>
              </div>

              <StatSection>
                <StatCard>
                  <StatCardNumber>440</StatCardNumber>
                  <StatCardBottom>Games played</StatCardBottom>
                </StatCard>
                <StatCard>
                  <StatCardNumber>42</StatCardNumber>
                  <StatCardBottom>Supporters</StatCardBottom>
                </StatCard>
              </StatSection>
            </Left>
            <Right>
              <RightNavigation>
                <RightNavigationItem>Play History (1)</RightNavigationItem>
                <RightNavigationItem style={{ boxShadow: `0 1px 0 rgba(0, 0, 0, 1)` }}>
                  Published Games (4)
                </RightNavigationItem>
                <RightNavigationItem>Tutorials & Examples (23)</RightNavigationItem>
              </RightNavigation>

              {LIST.map(p => {
                return (
                  <Card key={`${p.id}-profile`}>
                    <CardLeft style={{ backgroundImage: `url(/static/${p.image})` }} />
                    <CardRight>
                      <H3>{p.title}</H3>
                      <P>{p.description}</P>
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
