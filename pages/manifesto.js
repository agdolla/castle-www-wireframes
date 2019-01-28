import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes, css, Global } from '@emotion/core';

import STYLES_GLOBAL from '~/common/styles/global';

import GrayNavigation from '~/components/GrayNavigation';

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

const ColumnTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

const PostCard = styled.div`
  padding: 16px 0 16px 0;
`;

const PostCardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const PostCardDescription = styled.div`
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 16px;
`;

const GameCard = styled.div`
  padding: 16px 0 16px 0;
`;

const GameCardImage = styled.div`
  height: 120px;
  width: 100%;
  background: black;
  background-size: cover;
  background-position: 50% 50%;
`;

const GameCardTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;
`;

const GameCardDescription = styled.div`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 16px;
`;

const CardLink = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
  color: blue;
`;

const POSTS = [
  {
    title: 'Tutorial: Drawing Circles',
    description: 'A guide for drawing many circles on the screen at once.',
  },
  {
    title: 'Tutorial: Sprites',
    description: 'A guide for applying a sprite map to a rectangle.',
  },
];

const GAMES = [
  {
    title: `Playstation Emulation Demo`,
    description: `The Castle team worked with Square Enix to port a classic RPG.`,
    image: `/static/screenshot-19.jpg`,
  },
  {
    title: `Music Test`,
    description: `Jason from the Castle Team worked with Glabuer Kotaki to do a sound test.`,
    image: `/static/screenshot-20.png`,
  },
];

export default class ManifestoPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>@Castle - Manifesto</title>
        </Head>
        <GrayNavigation />
        <ComponentPage>
          <ComponentSidebarSection>
            <ComponentLeftColumn>
              <ColumnTitle>Documentation by Castle</ColumnTitle>

              {POSTS.map(p => {
                return (
                  <PostCard key={p.title}>
                    <PostCardTitle>{p.title}</PostCardTitle>
                    <PostCardDescription>{p.description}</PostCardDescription>
                    <CardLink>→ Read More</CardLink>
                  </PostCard>
                );
              })}

              <ColumnTitle style={{ marginTop: 48 }}>Games by Castle</ColumnTitle>

              {GAMES.map(g => {
                return (
                  <GameCard key={g.title}>
                    <GameCardImage style={{ backgroundImage: `url(${g.image})` }} />
                    <GameCardTitle>{g.title}</GameCardTitle>
                    <GameCardDescription>{g.description}</GameCardDescription>
                    <CardLink>→ Play Now</CardLink>
                    <CardLink>→ Learn More</CardLink>
                  </GameCard>
                );
              })}
            </ComponentLeftColumn>
            <ComponentRightColumn>
              <ComponentRightColumnCorner>
                <ComponentLink>Edit</ComponentLink>
                <ComponentLink style={{ marginLeft: 24 }}>Options</ComponentLink>
              </ComponentRightColumnCorner>
              <DocPost>
                <H1>The Castle Manifesto</H1>
                <Byline>
                  <ComponentAvatar
                    style={{
                      backgroundImage: `url(/static/a-7.jpg)`,
                      height: 32,
                      width: 32,
                      borderRadius: 32,
                      marginRight: 16,
                    }}
                  />
                  Written by Castle - October 14th, 2019
                </Byline>

                <P>
                  We believe in the following ideals. Although we’re just getting started, we have
                  large ambitions and hope that you will share and help us promote these ideals.
                </P>

                <P>
                  This is a <strong>living document</strong>. We don't think it's perfect, and we
                  expect to learn as the community grows. Parts of this document will tend to change
                  as we encounter new circumstances that improve or clarify our understanding.
                </P>

                <H2>Creators should be empowered to make money from their art.</H2>

                <P>
                  A few game makers earn a lot of money. A few more scrape by in small studios. Many
                  others rely on day jobs. Existing marketplaces and funding models don’t generate
                  enough revenue to change this distribution. This environment can force creators to
                  monetize their games in ways that don’t align with their artistic vision. We
                  believe motivated creators deserve the ability to do their work without
                  compromising their art.
                </P>

                <H2>Games are better with other people.</H2>

                <P>
                  It's more fulfilling to create games and play games when there are others to take
                  the journey with you. The Castle community is built on the shared storytelling
                  experience that games provide.
                </P>

                <H2>Community members deserve to be safe.</H2>

                <P>
                  Everybody using Castle should be able to present themselves without fear.
                  Everybody using Castle should be able to present their work without fear. While
                  well-intentioned freedom of speech is valuable, harmful behavior is intolerable.
                  Castle and its community will proactively remove harmful people and harmful
                  content.
                </P>

                <H2>Playing games is fun; uploading and downloading games is not fun.</H2>

                <P>
                  Creators need a simple, efficient way to market and distribute their games to a
                  wide audience. Likewise, people must be able to play games without struggling to
                  obtain the game. The current model of game distribution creates needless friction
                  around downloading, installing, compatibility, and payment incentives, which
                  doesn't serve players or creators well.
                </P>

                <H2>Everybody with an idea deserves to make games.</H2>

                <P>
                  Game making should be accessible. Anybody who is excited to express themselves
                  should be able to begin working on a game. Although making games takes skill, the
                  entry gates should be unimposing and the path should be obvious.
                </P>

                <H2>Games of all sizes have value.</H2>

                <P>
                  Huge games are inspiring, but can be difficult to finish. However, both big games
                  and small games are rewarding for the creator and the players. A supportive
                  community and well-designed tools can help encourage creators to pick projects
                  that suit them, and can also help them all the way to the end.
                </P>

                <H2>The best creation tools foster self-expression.</H2>

                <P>
                  Creators possess a breadth of powerful emotions and ideas. Good creation tools,
                  and their communities, enable personal style and self-expression rather than
                  restricting it. We celebrate skill-mastery, emotional depth, and authentic, human
                  design.
                </P>

                <H2>The best creation tools promote experimentation and newness.</H2>

                <P>
                  Innovation moves the art form forward, and we are excited when we discover new
                  things we cannot categorize. Castle can empower people willing to bend genres and
                  expectations.
                </P>

                <H2>The best creation tools enable teaching and learning.</H2>

                <P>
                  Learning how things work is cool, and creations have the power to inspire new
                  creators. The community is better when people share details of their process and
                  journey, and when they are enouraged to open source their work. The community is
                  better when we encourage remixing and modding (with ample credit given to the
                  originator). Castle can enable these behaviors.
                </P>

                <H2>People decide what is fun.</H2>

                <P>
                  Big corporations don't decide what is fun. Influencers don't decide what is fun.
                  The future of gaming, and all interactive media, is democratic. People create
                  whatever they want and they play whatever they want because they personally feel
                  that it's fun. The Castle community has the power and responsibility to reinforce
                  this momentum.
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
