import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes, css, Global } from '@emotion/core';

import STYLES_GLOBAL from '~/common/styles/global';

import DocNavigation from '~/components/DocNavigation';

const ComponentPage = styled.div``;

const ComponentWireframeNotice = styled.marquee`
  font-size: 32px;
  color: red;
  position: fixed;
  font-weight: 400;
  bottom: 0;
  left: 0;
`;

const ComponentSidebarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ComponentLeftColumn = styled.div`
  font-size: 64px;
  width: 320px;
  height: calc(100vh - 64px);
  background: white;
  padding: 24px;
  border-right: 1px solid #ececec;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

const ComponentRightColumn = styled.div`
  min-width: 20%;
  width: 100%;
  background: white;
  height: calc(100vh - 64px);
  position: relative;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

const DocHeroTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
`;

const DocDescription = styled.div`
  font-size: 14px;
  line-height: 1.25;
`;

const DocByline = styled.div`
  font-size: 10px;
`;

const DocHeroItem = styled.div`
  font-size: 22px;
  margin-bottom: 12px;
`;

const DocTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 32px;
`;

const DocItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  text-decoration: underline;
`;

const DocPost = styled.div`
  margin: 8rem auto 8rem auto;
  padding: 0 24px 0 24px;
  max-width: 768px;
  width: 100%;
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

const H1 = styled.h1`
  font-weight: 700;
  font-size: 46px;
`;

const OL = styled.ol`
  font-size: 16px;
  line-height: 1.5;
  padding-left: 16px;
  margin-top: 16px;
`;

const LI = styled.li`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`;

const Byline = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 8px 0 32px 0;
`;

const ComponentAvatar = styled.span`
  display: inline-flex;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ComponentRightColumnCorner = styled.div`
  position: absolute;
  right: 24px;
  top: 16px;
`;

const ComponentLink = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: blue;
`;

export default class DocsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>Castle - Documentation</title>
        </Head>
        <DocNavigation />
        <ComponentPage>
          <ComponentSidebarSection>
            <ComponentLeftColumn>
              <DocHeroItem>
                <DocHeroTitle>Download Castle</DocHeroTitle>
                <DocDescription>MacOS, Windows, and Linux distributions</DocDescription>
              </DocHeroItem>
              <DocHeroItem>
                <DocHeroTitle>Make A Game</DocHeroTitle>
                <DocDescription>Make your first game in under 5 minutes.</DocDescription>
              </DocHeroItem>
              <DocHeroItem>
                <DocHeroTitle>FAQ</DocHeroTitle>
                <DocDescription>
                  Check out the most commonly asked questions about Castle.
                </DocDescription>
              </DocHeroItem>

              <DocTitle>Multiplayer</DocTitle>
              <DocItem>Client API overview</DocItem>
              <DocItem>Authorized connections</DocItem>
              <DocItem>Channels</DocItem>
              <DocItem>Public channels</DocItem>
              <DocItem>Private channels</DocItem>
              <DocItem>Encrypted channels</DocItem>
              <DocItem>Presence channels</DocItem>
              <DocItem>Events</DocItem>
              <DocItem>Global configuration</DocItem>

              <DocTitle>Love 2D</DocTitle>
              <DocItem>What is Love?</DocItem>
              <DocItem>love.audio</DocItem>
              <DocItem>love.data</DocItem>
              <DocItem>love.event</DocItem>
              <DocItem>love.filesystem</DocItem>
              <DocItem>love.font</DocItem>
              <DocItem>love.graphics</DocItem>
              <DocItem>love.image</DocItem>
              <DocItem>love.joystick</DocItem>
              <DocItem>love.keyboard</DocItem>
              <DocItem>love.math</DocItem>
              <DocItem>love.mouse</DocItem>
              <DocItem>love.physics</DocItem>
              <DocItem>love.sound</DocItem>
              <DocItem>love.system</DocItem>
              <DocItem>love.thread</DocItem>
              <DocItem>love.timer</DocItem>
              <DocItem>love.touch</DocItem>
              <DocItem>love.video</DocItem>
              <DocItem>love.window</DocItem>
            </ComponentLeftColumn>
            <ComponentRightColumn>
              <ComponentRightColumnCorner>
                <ComponentLink>Edit</ComponentLink>
                <ComponentLink style={{ marginLeft: 24 }}>Options</ComponentLink>
              </ComponentRightColumnCorner>
              <DocPost>
                <H1>Make A Game</H1>
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

                <P>Here's all you need to do to get a simple Castle project running:</P>

                <OL>
                  <LI>Download and run Castle.</LI>
                  <LI>Click the button to Create a Castle Project</LI>
                  <LI>
                    We'll prompt you for a directory, and then we'll create a file called{' '}
                    <strong>main.lua</strong>.
                  </LI>
                  <LI>
                    Open <strong>main.lua</strong> in your favorite text editor. You're ready to go!
                  </LI>
                </OL>

                <P>
                  Want some ideas for what to do next? Read the next section of this page, where
                  we'll learn how to draw a circle, print some logs, and move the circle around with
                  the arrow keys.
                </P>

                <H2>Make Your First Castle Game</H2>

                <P>
                  From Rusticus I received the impression that my character required improvement and
                  discipline; and from him I learned not to be led astray to sophistic emulation,
                  nor to writing on speculative matters, nor to delivering little hortatory
                  orations, nor to showing myself off as a man who practises much discipline, or
                  does benevolent acts in order to make a display; and to abstain from rhetoric, and
                  poetry, and fine writing; and not to walk about in the house in my outdoor dress,
                  nor to do other things of the kind; and to write my letters with simplicity, like
                  the letter which Rusticus wrote from Sinuessa to my mother; and with respect to
                  those who have offended me by words, or done me wrong, to be easily disposed to be
                  pacified and reconciled, as soon as they have shown a readiness to be reconciled;
                  and to read carefully, and not to be satisfied with a superficial understanding of
                  a book; nor hastily to give my assent to those who talk overmuch; and I am
                  indebted to him for being acquainted with the discourses of Epictetus, which he
                  communicated to me out of his own collection.
                </P>

                <P>
                  From Apollonius I learned freedom of will and undeviating steadiness of purpose;
                  and to look to nothing else, not even for a moment, except to reason; and to be
                  always the same, in sharp pains, on the occasion of the loss of a child, and in
                  long illness; and to see clearly in a living example that the same man can be both
                  most resolute and yielding, and not peevish in giving his instruction; and to have
                  had before my eyes a man who clearly considered his experience and his skill in
                  expounding philosophical principles as the smallest of his merits; and from him I
                  learned how to receive from friends what are esteemed favours, without being
                  either humbled by them or letting them pass unnoticed.
                </P>

                <P>
                  From Sextus, a benevolent disposition, and the example of a family governed in a
                  fatherly manner, and the idea of living conformably to nature; and gravity without
                  affectation, and to look carefully after the interests of friends, and to tolerate
                  ignorant persons, and those who form opinions without consideration: he had the
                  power of readily accommodating himself to all, so that intercourse with him was
                  more agreeable than any flattery; and at the same time he was most highly
                  venerated by those who associated with him: and he had the faculty both of
                  discovering and ordering, in an intelligent and methodical way, the principles
                  necessary for life; and he never showed anger or any other passion, but was
                  entirely free from passion, and also most affectionate; and he could express
                  approbation without noisy display, and he possessed much knowledge without
                  ostentation.
                </P>

                <P>
                  From Alexander the grammarian, to refrain from fault-finding, and not in a
                  reproachful way to chide those who uttered any barbarous or solecistic or
                  strange-sounding expression; but dexterously to introduce the very expression
                  which ought to have been used, and in the way of answer or giving confirmation, or
                  joining in an inquiry about the thing itself, not about the word, or by some other
                  fit suggestion.
                </P>
              </DocPost>
            </ComponentRightColumn>
          </ComponentSidebarSection>

          <ComponentWireframeNotice>
            CONCEPT & WIREFRAME FOR 1440PX+ WIDTH SCREENS. E-MAIL JIM@CASTLE.GAMES OR TWEET @WWWJIM
            THOUGHTS. THANKS :-)
          </ComponentWireframeNotice>
        </ComponentPage>
      </React.Fragment>
    );
  }
}
