import React, { useState } from 'react';
import * as Constants from '~/common/constants';
import * as Fixtures from '~/common/fixtures';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  width: 100%;
  padding-left: 16px;
`;

const STYLES_LAYOUT_ITEM = css`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const STYLES_LAYOUT_ITEM_LEFT = css`
  flex-shrink: 0;
`;

const STYLES_LAYOUT_ITEM_RIGHT = css`
  min-width: 10%;
  width: 100%;
  padding-left: 16px;
`;

const STYLES_TITLE = css`
  font-size: 18px;
  line-height: 18px;
`;

const STYLES_DESCRIPTION = css`
  font-size: 12px;
  margin-top: 4px;
`;

const STYLES_HEADING = css`
  margin-bottom: 24px;
`;

const STYLES_AVATAR = css`
  height: 72px;
  width: 128px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 4px;
  display: inline-flex;
`;

const STYLES_LINK = css`
  font-weight: 700;
  color: magenta;
`;

const LeaderBoard = ({ title }) => {
  return (
    <div className={STYLES_LAYOUT}>
      <h2 className={STYLES_HEADING}>{title}</h2>
      {Fixtures.GAMES.map((each, index) => {
        if (index < 4 || index > 8) {
          return;
        }

        return (
          <a key={`users-${index}`} href="/@user/games/slug-example" className={STYLES_LAYOUT_ITEM}>
            <span className={STYLES_LAYOUT_ITEM_LEFT}>
              <span className={STYLES_AVATAR} style={{ backgroundImage: `url(${each.src})` }} />
            </span>
            <span className={STYLES_LAYOUT_ITEM_RIGHT}>
              <h3 className={STYLES_TITLE}>Game #{index}</h3>
              <p className={STYLES_DESCRIPTION}>Played {`{AMOUNT}`} times</p>
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default LeaderBoard;
