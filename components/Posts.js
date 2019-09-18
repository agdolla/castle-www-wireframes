import React, { useState } from 'react';
import * as Fixtures from '~/common/fixtures';

import { css } from 'react-emotion';

import Byline from '~/components/Byline';
import CardPost from '~/components/CardPost';

const STYLES_LAYOUT = css`
  display: block;
`;

const STYLES_HERO = css`
  width: 100%;
  max-width: 688px;
  padding: 16px;
  margin-bottom: 48px;
`;

const STYLES_ENTITY = css`
  width: 33.33%;
  display: block;
`;

const STYLES_GRID = css`
  display: flex;
  flex-wrap: wrap;
`;

const STYLES_HERO_TITLE = css`
  font-size: 64px;
`;

const STYLES_HERO_PARAGRAPH = css`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 24px;
`;

const Posts = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_HERO}>
        <h1 className={STYLES_HERO_TITLE}>Cake is great</h1>
        <Byline user={Fixtures.USERS_LIST[2]} />
        <p className={STYLES_HERO_PARAGRAPH}>
          A single player game with tactical card combat. You travel across a strange planet with
          maps, that are different every time you play. Recruit followers, find loot and manage your
          resources as you take the fate of your convoy in your hands. Each fight will make you want
          to tweak and improve your deck to face the next encounter. Travel through this broken
          world and search for a new hope among the ruins.,
        </p>
      </div>

      <div className={STYLES_GRID}>
        <span className={STYLES_ENTITY}>
          <CardPost
            user={Fixtures.USERS_LIST[0]}
            post={{
              title: 'Example Post #1',
              description:
                'A single player game with tactical card combat. You travel across a strange planet with maps, that are different every time you play. Recruit followers, find loot and manage your resources as you take the fate of your convoy in your hands. Each fight will make you want to tweak and improve your deck to face the next encounter. Travel through this broken world and search for a new hope among the ruins.',
            }}
          />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost
            user={Fixtures.USERS_LIST[1]}
            post={{
              title: 'Example Post #2',
              description:
                'A single player game with tactical card combat. You travel across a strange planet with maps, that are different every time you play. Recruit followers, find loot and manage your resources as you take the fate of your convoy in your hands. Each fight will make you want to tweak and improve your deck to face the next encounter. Travel through this broken world and search for a new hope among the ruins.',
            }}
          />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost
            user={Fixtures.USERS_LIST[2]}
            post={{
              title: 'Example Post #3',
              description:
                'A single player game with tactical card combat. You travel across a strange planet with maps, that are different every time you play. Recruit followers, find loot and manage your resources as you take the fate of your convoy in your hands. Each fight will make you want to tweak and improve your deck to face the next encounter. Travel through this broken world and search for a new hope among the ruins.',
            }}
          />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost
            user={Fixtures.USERS_LIST[3]}
            post={{
              title: 'Example Post #4',
              description:
                'A single player game with tactical card combat. You travel across a strange planet with maps, that are different every time you play. Recruit followers, find loot and manage your resources as you take the fate of your convoy in your hands. Each fight will make you want to tweak and improve your deck to face the next encounter. Travel through this broken world and search for a new hope among the ruins.',
            }}
          />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost
            user={Fixtures.USERS_LIST[4]}
            post={{
              title: 'Example Post #5',
              description:
                'A single player game with tactical card combat. You travel across a strange planet with maps, that are different every time you play. Recruit followers, find loot and manage your resources as you take the fate of your convoy in your hands. Each fight will make you want to tweak and improve your deck to face the next encounter. Travel through this broken world and search for a new hope among the ruins.',
            }}
          />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost
            user={Fixtures.USERS_LIST[5]}
            post={{
              title: 'Example Post #6',
              description:
                'A single player game with tactical card combat. You travel across a strange planet with maps, that are different every time you play. Recruit followers, find loot and manage your resources as you take the fate of your convoy in your hands. Each fight will make you want to tweak and improve your deck to face the next encounter. Travel through this broken world and search for a new hope among the ruins.',
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Posts;
