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
  margin: 6rem auto 12rem auto;
  padding: 0 24px 0 24px;
  max-width: 768px;
  width: 100%;
`;

const ComponentImage = styled.div`
  height: 480px;
  width: 100%;
  margin-top: 8px;
  background: black;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  border-radius: 2px 2px 0 0;
`;

const ComponentImageLeft = styled.div`
  position: absolute;
  right: 100%;
  top: 88px;
  margin-right: 24px;
  width: 480px;
  height: 480px;
  background-size: cover;
  background-position: 50% 50%;
  transform: skewY(-20deg);
  opacity: 0.8;
  border-radius: 2px;
`;

const ComponentImageRight = styled.div`
  position: absolute;
  left: 100%;
  top: 88px;
  margin-left: 24px;
  height: 480px;
  width: 480px;
  background-size: cover;
  background-position: 50% 50%;
  transform: skewY(20deg);
  opacity: 0.8;
  border-radius: 2px;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 36px;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
`;

const DESC = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

const Byline = styled.div`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 8px 0 16px 0;
`;

const ComponentAvatar = styled.span`
  display: inline-flex;
  height: 24px;
  width: 24px;
  border-radius: 24px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ComponentGold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 2px 2px;
  background: gold;
`;

const ComponentGoldImage = styled.div`
  margin: 16px;
  flex-shrink: 0;
  display: inline-flex;
  background-size: cover;
  width: 64px;
  height: 48px;
  background-position: 50% 50%;
`;

const ComponentGoldRight = styled.div`
  min-width: 25%;
  width: 100%;
  font-weight: 600;
  padding-left: 16px;
  text-align: center;
`;

const MiniBox = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.09);
  position: fixed;
  bottom: 24px;
  left: 24px;
  background: black;
  color: white;
  width: 188px;
  padding: 16px;
  border-radius: 4px;
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

const ComponentButton = styled.span`
  display: inline-block;
  margin-top: 16px;
  border-radius: 4px;
  border: 2px solid white;
  color: white;
  padding: 8px 16px 8px 16px;
  font-weight: 700;
  text-align: center;
`;

const StatCard = styled.span`
  margin-right: 32px;
  display: inline-flex;
  flex-direction: column;
`;

const StatCardNumber = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const StatCardBottom = styled.div`
  font-size: 16px;
  margin-top: 8px;
  font-weight: 400;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 24px;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-top: 48px;
`;

const ComponentDocumentationRow = styled.div`
  border-top: 1px solid #ececec;
  width: 100%;
  padding-top: 24px;
  margin-top: 24px;
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

const DOCS_LINKS = [
  {
    title: 'Developer Log: Building the framework',
    author: 'Jim Lee',
    paragraph: 'Making it possible to make this game with Castle.',
  },
  {
    title: 'Developer Log: Hiring Artists',
    author: 'Rebekah Cox',
    paragraph: 'I was able to rally a few great artists to join us.',
  },
  {
    title: 'Developer Log: Polish',
    author: 'Jesse Ruder',
    paragraph: 'I wanted Jason to be proud of us.',
  },
];

export default class GamePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>@Castle - Example Game</title>
        </Head>
        <Navigation />
        <ComponentPage>
          <ComponentSingleColumn>
            <H1>Example Game</H1>
            <Byline>
              <ComponentAvatar
                style={{
                  backgroundImage: `url(/static/a-8.jpg)`,
                  height: 32,
                  width: 32,
                  borderRadius: 32,
                  marginRight: 8,
                }}
              />
              Created By&nbsp;
              <strong>Gundam Wing Zero V2</strong>
            </Byline>
            <ComponentImage style={{ backgroundImage: `url(/static/game-1.jpg)` }}>
              <ComponentImageLeft style={{ backgroundImage: `url(/static/game-2.jpg)` }} />
              <ComponentImageRight style={{ backgroundImage: `url(/static/game-3.png)` }} />
            </ComponentImage>

            <ComponentGold>
              <ComponentGoldImage style={{ backgroundImage: `url(/static/gold.png)` }} />
              <ComponentGoldRight>
                This game's creator is sponsored by Castle and the community.
              </ComponentGoldRight>
            </ComponentGold>

            <div style={{ marginTop: 24 }}>
              <StatCard>
                <StatCardNumber>4,400</StatCardNumber>
                <StatCardBottom>Plays</StatCardBottom>
              </StatCard>
              <StatCard>
                <StatCardNumber>12,043</StatCardNumber>
                <StatCardBottom>Favorites</StatCardBottom>
              </StatCard>
              <StatCard>
                <StatCardNumber>14</StatCardNumber>
                <StatCardBottom>Collectible Hats</StatCardBottom>
              </StatCard>
            </div>

            <H2>Why Did We Make Example Game</H2>

            <P>
              From Rusticus I received the impression that my character required improvement and
              discipline; and from him I learned not to be led astray to sophistic emulation, nor to
              writing on speculative matters, nor to delivering little hortatory orations, nor to
              showing myself off as a man who practises much discipline, or does benevolent acts in
              order to make a display; and to abstain from rhetoric, and poetry, and fine writing;
              and not to walk about in the house in my outdoor dress, nor to do other things of the
              kind; and to write my letters with simplicity, like the letter which Rusticus wrote
              from Sinuessa to my mother; and with respect to those who have offended me by words,
              or done me wrong, to be easily disposed to be pacified and reconciled, as soon as they
              have shown a readiness to be reconciled; and to read carefully, and not to be
              satisfied with a superficial understanding of a book; nor hastily to give my assent to
              those who talk overmuch; and I am indebted to him for being acquainted with the
              discourses of Epictetus, which he communicated to me out of his own collection.
            </P>

            <H2>Why Marcus Aurelius</H2>

            <P>
              From Apollonius I learned freedom of will and undeviating steadiness of purpose; and
              to look to nothing else, not even for a moment, except to reason; and to be always the
              same, in sharp pains, on the occasion of the loss of a child, and in long illness; and
              to see clearly in a living example that the same man can be both most resolute and
              yielding, and not peevish in giving his instruction; and to have had before my eyes a
              man who clearly considered his experience and his skill in expounding philosophical
              principles as the smallest of his merits; and from him I learned how to receive from
              friends what are esteemed favours, without being either humbled by them or letting
              them pass unnoticed.
            </P>

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
          </ComponentSingleColumn>

          <MiniBox>
            <H3>Play Now</H3>
            <DESC>
              There are <strong>42</strong> people playing <strong>Example Game</strong>. Join in
              the fun!
            </DESC>
            <ComponentButton>Play</ComponentButton>
          </MiniBox>

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
