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
  text-align: center;
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

const ComponentLink = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: blue;
`;

const Option = styled.span`
  display: inline-flex;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  background: black;
  margin: 0 16px 0 16px;
  color: white;
`;

export default class DocsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>Castle - Download</title>
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
              <DocPost>
                <H1>Download Castle</H1>

                <P>
                  Download to play whatever you want, whenever you want. Learn how games work from
                  Creators and make your own.
                </P>

                <P>
                  <Option>MacOS</Option> <Option>Linux</Option> <Option>Windows</Option>
                </P>

                <img
                  src="/static/castle.jpg"
                  width="100%"
                  style={{ display: 'block', marginTop: 24 }}
                />
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
