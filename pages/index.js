import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes, css, Global } from '@emotion/core';

import STYLES_GLOBAL from '~/common/styles/global';

import Navigation from '~/components/Navigation';

const getRandomInt = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const DOCS_LINKS = [
  {
    title: 'Cake API',
    author: 'Jim Lee',
    paragraph: 'I learned how much Cake I wanted to put into a Lua game and...',
  },
  {
    title: 'Maze Simulation',
    author: 'Charlie Cheever',
    paragraph: 'Here are some of the path building APIs we have put into Castle',
  },
  {
    title: 'Windows Standalone',
    author: 'Ben Roth',
    paragraph: 'Windows is tough, here is the solution.',
  },
  {
    title: 'Bitcoin',
    author: 'Frank Ocean',
    paragraph: 'How to add Bitcoin to your Castle game.',
  },
  {
    title: 'Mark Twain API',
    author: 'Elizabeth Holmes',
    paragraph: 'Generate Mark Twain quotes inside of your Lua Game',
  },
  {
    title: 'Getting Started',
    author: 'John Smith',
    paragraph: 'Getting started with Linux.',
  },
];

const PLAYING_NOW = [
  { name: 'Jumping Crickets', image: '/static/screenshot-1.png', players: getRandomInt() },
  {
    name: 'Bob Dole Presents: Black Plague',
    image: '/static/screenshot-2.png',
    players: getRandomInt(),
  },
  { name: 'So You Found Two Foxes', image: '/static/screenshot-3.png', players: getRandomInt() },
  { name: 'MECH LAND', image: '/static/screenshot-4.png', players: getRandomInt() },
  { name: 'Post Singularity', image: '/static/screenshot-5.png', players: getRandomInt() },
  {
    name: 'Open Smash Brothers By Nintendo Wizkid Billybob',
    image: '/static/screenshot-6.png',
    players: getRandomInt(),
  },
];

const STAFF_ONE = [
  {
    name: 'Molten Lava Raider',
    author: 'Mark Cuban',
    image: '/static/screenshot-7.png',
    players: getRandomInt(),
  },
  {
    name: 'Square Enix Presents: The Rejects',
    author: 'Ted Cruz',
    image: '/static/screenshot-8.png',
    players: getRandomInt(),
  },
  {
    name: 'The Claws',
    author: 'Frank Ocean',
    image: '/static/screenshot-9.png',
    players: getRandomInt(),
  },
  {
    name: 'Not Another Roguelike',
    author: 'Yung Sam',
    image: '/static/screenshot-10.png',
    players: getRandomInt(),
  },
  {
    name: 'Paper Dinosaur',
    author: 'Open Nintendo',
    image: '/static/screenshot-11.png',
    players: getRandomInt(),
  },
  {
    name: 'Left',
    author: 'Dr. Jared Halstead',
    image: '/static/screenshot-12.png',
    players: getRandomInt(),
  },
];

const STAFF_TWO = [
  {
    name: 'This Town Is Empty But Everything Still Works',
    author: 'Ben Roth',
    image: '/static/screenshot-13.png',
    players: getRandomInt(),
  },
  {
    name: 'Dark Souls: 16 Bit Hi Fi',
    author: 'Rebekah Cox',
    image: '/static/screenshot-14.png',
    players: getRandomInt(),
  },
  {
    name: 'The Flint, The Flame, The Anarchist',
    author: 'Republican National Convention',
    image: '/static/screenshot-15.png',
    players: getRandomInt(),
  },
  {
    name: 'Meet Me On The Shore By Nikki',
    author: 'Games By Nikki & Greg',
    image: '/static/screenshot-16.png',
    players: getRandomInt(),
  },
  {
    name: 'Pixel League',
    author: 'Jason Riggs',
    image: '/static/screenshot-17.png',
    players: getRandomInt(),
  },
  {
    name: 'Goblin Fortress',
    author: '2 Chains',
    image: '/static/screenshot-18.png',
    players: getRandomInt(),
  },
];

const ComponentPage = styled.div``;

const ComponentCard = styled.div`
  width: 220px;
  background: black;
  height: 320px;
  display: inline-flex;
  background-size: cover;
  background-position: 50% 50%;
  margin: 0 24px 0 24px;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const ComponentCardMeta = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 16px 0 16px 0;
  z-index: 1;
  color: black;
  width: 220px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ComponentCardMetaLeft = styled.div`
  flex-shrink: 0;
  padding-right: 16px;
`;

const ComponentCardMetaRight = styled.div`
  min-width: 25%;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`;

const ComponentHero = styled.div`
  background: white;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 6rem 0;
  max-width: 1280px;
  margin: 0 auto 0 auto;
`;

const ComponentFlex = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto 0 auto;
`;

const ComponentDescription = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 48px 16px 48px;
  margin: 0 auto 0 auto;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 768px;
  text-align: center;
`;

const ComponentAvatar = styled.span`
  display: inline-flex;
  height: 48px;
  width: 48px;
  border-radius: 48px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ComponentButton = styled.span`
  border-radius: 4px;
  border: 2px solid black;
  padding: 8px 16px 8px 16px;
  font-weight: 700;
  min-width: 188px;
  text-align: center;
`;

const ComponentLink = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: blue;
`;

const ComponentWireframeNotice = styled.marquee`
  font-size: 32px;
  color: red;
  position: fixed;
  font-weight: 400;
  bottom: 0;
  left: 0;
`;

const ComponentDiscovery = styled.div`
  width: 100%;
  position: relative;
  max-width: 1024px;
  margin: 0 auto 0 auto;
`;

const ComponentDiscoveryRow = styled.div`
  display: flex;
  flex-wrap: none;
  align-items: flex-start;
  margin: 24px 0 24px 0;
`;

const ComponentPreviewGame = styled.span`
  display: inline-flex;
  flex-direction: column;
  width: 180px;
  margin-right: 24px;
  font-size: 16px;
  line-height: 1.5;
`;

const ComponentPreviewGameImage = styled.div`
  height: 90px;
  width: 100%;
  background: black;
  background-size: cover;
  background-position: 50% 50%;
`;

const ComponentHeadingTwo = styled.h2`
  font-size: 18px;
`;

const ComponentDocumentation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ComponentDocumentationHero = styled.div`
  width: 100%;
  padding: 24px 0 48px 0;
`;

const HeroH2 = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

const Byline = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 16px 0 16px 0;
`;

const HeroP = styled.div`
  font-size: 18px;
  line-height: 1.5;
  max-width: 640px;
`;

const ComponentDocumentationRow = styled.div`
  border-top: 1px solid #ececec;
  width: 100%;
  padding-top: 24px;
`;

const ComponentDocumentationItem = styled.span`
  display: inline-flex;
  flex-direction: column;
  margin-right: 32px;
  margin-bottom: 16px;
  width: 200px;
`;

const SmallH2 = styled.div`
  margin-top: 24px;
  font-size: 24px;
  font-weight: 600;
`;

const SmallByline = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
`;

const SmallP = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
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

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>Castle - Home</title>
        </Head>
        <Navigation />
        <ComponentPage>
          <ComponentHero>
            <ComponentCard
              style={{
                backgroundImage: `url(/static/preview-1.png)`,
                transform: `translateY(32px)`,
              }}
            >
              <ComponentCardMeta>
                <ComponentCardMetaLeft>
                  <ComponentAvatar style={{ backgroundImage: `url(/static/a-1a.png)` }} />
                </ComponentCardMetaLeft>
                <ComponentCardMetaRight>
                  <strong>Car Through The Hole</strong>
                  <br />
                  by Nikhilesh Sigatapu
                  <br />
                  2-4 players
                </ComponentCardMetaRight>
              </ComponentCardMeta>
            </ComponentCard>
            <ComponentCard style={{ backgroundImage: `url(/static/preview-2a.png)` }}>
              <ComponentCardMeta>
                <ComponentCardMetaLeft>
                  <ComponentAvatar style={{ backgroundImage: `url(/static/a-2a.png)` }} />
                </ComponentCardMetaLeft>
                <ComponentCardMetaRight>
                  <strong>Bard With Friends</strong>
                  <br />
                  by Charlie Cheever
                  <br />
                  2-8 players
                </ComponentCardMetaRight>
              </ComponentCardMeta>
            </ComponentCard>
            <ComponentCard
              style={{
                backgroundImage: `url(/static/preview-3.jpg)`,
                transform: `translateY(32px)`,
              }}
            >
              <ComponentCardMeta>
                <ComponentCardMetaLeft>
                  <ComponentAvatar style={{ backgroundImage: `url(/static/a-3a.png)` }} />
                </ComponentCardMetaLeft>
                <ComponentCardMetaRight>
                  <strong>Full Metal Cat Dog</strong>
                  <br />
                  by Bandai Namco
                  <br />1 player
                </ComponentCardMetaRight>
              </ComponentCardMeta>
            </ComponentCard>
            <ComponentCard style={{ backgroundImage: `url(/static/preview-5.png)` }}>
              <ComponentCardMeta>
                <ComponentCardMetaLeft>
                  <ComponentAvatar style={{ backgroundImage: `url(/static/a-9.jpg)` }} />
                </ComponentCardMetaLeft>
                <ComponentCardMetaRight>
                  <strong>BLOOD HOG SHOWDOWN</strong>
                  <br />
                  by Marie Kondo
                  <br />
                  2-24 players
                </ComponentCardMetaRight>
              </ComponentCardMeta>
            </ComponentCard>
          </ComponentHero>

          <ComponentDescription>
            Come and play whatever you want, whenever you want. Learn how games work from Creators
            and make your own.
          </ComponentDescription>

          <ComponentFlex style={{ padding: '2rem 24px 2rem 24px' }}>
            <ComponentButton>Download Client</ComponentButton>
            <ComponentLink style={{ marginLeft: 24 }}>Learn More</ComponentLink>
          </ComponentFlex>

          <ComponentDiscovery>
            <ComponentHeadingTwo>Playing Now</ComponentHeadingTwo>

            <ComponentDiscoveryRow>
              {PLAYING_NOW.map(g => {
                return (
                  <ComponentPreviewGame>
                    <ComponentPreviewGameImage style={{ backgroundImage: `url(${g.image})` }} />
                    <div style={{ fontWeight: 700 }}>{g.name}</div>
                    {g.players} playing
                    <br />
                    <br />{' '}
                    <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>→ Play</strong>
                    <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>
                      → Learn More
                    </strong>
                  </ComponentPreviewGame>
                );
              })}
            </ComponentDiscoveryRow>

            <ComponentLink>→ Check out all the games being played</ComponentLink>

            <ComponentHeadingTwo style={{ marginTop: 48 }}>Staff Picks</ComponentHeadingTwo>

            <ComponentDiscoveryRow>
              {STAFF_ONE.map(g => {
                return (
                  <ComponentPreviewGame>
                    <ComponentPreviewGameImage style={{ backgroundImage: `url(${g.image})` }} />
                    <div style={{ fontWeight: 700 }}>{g.name}</div>
                    by {g.author}
                    <br />
                    <br />{' '}
                    <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>→ Play</strong>
                    <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>
                      → Learn More
                    </strong>
                  </ComponentPreviewGame>
                );
              })}
            </ComponentDiscoveryRow>

            <ComponentDiscoveryRow>
              {STAFF_TWO.map(g => {
                return (
                  <ComponentPreviewGame>
                    <ComponentPreviewGameImage style={{ backgroundImage: `url(${g.image})` }} />
                    <div style={{ fontWeight: 700 }}>{g.name}</div>
                    by {g.author}
                    <br />
                    <br />{' '}
                    <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>→ Play</strong>
                    <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>
                      → Learn More
                    </strong>
                  </ComponentPreviewGame>
                );
              })}
            </ComponentDiscoveryRow>

            <ComponentLink>→ See all the games</ComponentLink>

            <ComponentHeadingTwo style={{ marginTop: 48 }}>Documentation</ComponentHeadingTwo>

            <ComponentDocumentation>
              <ComponentDocumentationHero>
                <HeroH2>Make Your First Game</HeroH2>
                <Byline>
                  <ComponentAvatar
                    style={{
                      backgroundImage: `url(/static/a-6.jpeg)`,
                      height: 32,
                      width: 32,
                      borderRadius: 32,
                      marginRight: 16,
                    }}
                  />
                  Written by 2 Chains - March 14th, 2017
                </Byline>
                <HeroP style={{ marginBottom: 48 }}>
                  From Sextus, a benevolent disposition, and the example of a family governed in a
                  fatherly manner, and the idea of living conformably to nature; and gravity without
                  affectation, and to look carefully after the interests of friends, and to tolerate
                  ignorant persons...{' '}
                </HeroP>
                <div>
                  <ComponentButton>Get started with your first game.</ComponentButton>
                  <ComponentLink style={{ marginLeft: 24 }}>Visit documentation</ComponentLink>
                </div>
              </ComponentDocumentationHero>

              <ComponentDocumentationRow>
                {DOCS_LINKS.map(doc => {
                  return (
                    <ComponentDocumentationItem>
                      <SmallH2>{doc.title}</SmallH2>
                      <SmallByline>by {doc.author} - March 18th, 2017</SmallByline>
                      <SmallP>{doc.paragraph}</SmallP>
                      <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>
                        → Read More
                      </strong>
                    </ComponentDocumentationItem>
                  );
                })}
              </ComponentDocumentationRow>
            </ComponentDocumentation>

            <ComponentDescription>
              It's more fulfilling to create games and play games when there are others to take the
              journey with you. The Castle community is built on the shared storytelling experience
              that games provide.
            </ComponentDescription>
          </ComponentDiscovery>

          <ComponentWireframeNotice>
            CONCEPT & WIREFRAME FOR 1440PX+ WIDTH SCREENS. E-MAIL JIM@CASTLE.GAMES OR TWEET @WWWJIM
            THOUGHTS. THANKS :-)
          </ComponentWireframeNotice>

          <ComponentFlex style={{ padding: '2rem 24px 2rem 24px' }}>
            <ComponentButton>Read the Manifesto</ComponentButton>
          </ComponentFlex>

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
