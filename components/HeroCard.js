import React, { useState } from 'react';

import * as Constants from '~/common/constants';
import Byline from '~/components/Byline';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  background: ${Constants.colors.background.tertiary};
  width: 100%;
  position: relative;
`;

const STYLES_IMAGE = css`
  height: 320px;
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
`;

const STYLES_BOTTOM = css`
  position: absolute;
  bottom: 0;
  padding: 24px;
`;

const STYLES_GAME_HEADING = css`
  background: ${Constants.colors.foreground.primary};
  color: ${Constants.colors.foreground.text};
  font-size: 48px;
  display: inline-block;
`;

const STYLES_GAME_PARAGRAPH = css`
  background: ${Constants.colors.foreground.primary};
  color: ${Constants.colors.foreground.text};
  font-size: 16px;
  display: block;
  margin-top: 8px;
`;

const STYLES_AVATAR_NAME = css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: ${Constants.colors.foreground.secondary};
`;

const STYLES_AVATAR = css`
  height: 32px;
  width: 32px;
  flex-shrink: 0;
  background-size: cover;
  background-position: 50% 50%;
`;

const STYLES_AVATAR_TEXT = css`
  font-size: 12px;
  min-width: 25%;
  width: 100%;
  color: ${Constants.colors.foreground.text};
  padding: 4px;
  font-weight: 600;
`;

const HeroCard = ({ src, user = {} }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_IMAGE} style={{ backgroundImage: `url('${src}')` }}>
        ...
      </div>

      <div className={STYLES_BOTTOM}>
        <h4 className={STYLES_GAME_HEADING}>Fox Sandbox</h4>
        <div>
          <Byline user={user} />
        </div>
        <p className={STYLES_GAME_PARAGRAPH}>Learn more about our new open world sailing game</p>
      </div>
    </div>
  );
};

export default HeroCard;
