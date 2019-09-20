import React, { useState } from 'react';
import * as Constants from '~/common/constants';

import { css } from 'react-emotion';

const STYLES_GROUP = css`
  margin-top: 24px;
`;

const STYLES_GROUP_TITLE = css`
  font-size: 18px;
  margin-bottom: 16px;
`;

const STYLES_GROUP_ELEMENTS = css`
  display: flex;
  flex-wrap: wrap;
`;

const STYLES_PREVIEW = css`
  background: ${Constants.colors.background.tertiary};
  color: ${Constants.colors.background.text};
  width: calc(291px - 16px);
  height: 155px;
  padding: 24px;
  margin-bottom: 16px;
  margin-right: 16px;
  display: block;
  background-size: cover;
  background-position: 50% 50%;

  :last-child {
    border-right: 0px;
  }
`;

const Games = ({ games = [] }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_GROUP}>
      <h2 className={STYLES_GROUP_TITLE}>Games</h2>
      <div className={STYLES_GROUP_ELEMENTS}>
        {games.map((each, index) => {
          return (
            <div>
              <a
                href="/@user/games/slug-example"
                className={STYLES_PREVIEW}
                key={`game-${index}`}
                style={{ backgroundImage: `url(${each.src})` }}
              />
              <div style={{ overflowWrap: 'break-word' }}>
                {` {AVATAR}`}
                {` {USERNAME}`}
                {` {PLAY COUNT}`}
                {` {DOWNLOAD & PLAY NOW}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Games;
