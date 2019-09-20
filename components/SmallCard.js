import React, { useState } from 'react';
import * as Constants from '~/common/constants';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  background: ${Constants.colors.background.tertiary};
  width: 100%;
  position: relative;
`;

const STYLES_IMAGE = css`
  height: 188px;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
`;

const STYLES_DESCRIPTION = css`
  position: absolute;
  bottom: 0;
  padding: 16px;
`;

const STYLES_TITLE = css`
  background: ${Constants.colors.foreground.primary};
  color: ${Constants.colors.foreground.text};
  display: inline-block;
  font-size: 18px;
`;

const STYLES_PARAGRAPH = css`
  margin-top: 8px;
  background: ${Constants.colors.foreground.primary};
  color: ${Constants.colors.foreground.text};
  display: inline-block;
  font-size: 12px;
`;

const SmallCard = ({ src, href }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <a className={STYLES_LAYOUT} href={href}>
      <div className={STYLES_IMAGE} style={{ backgroundImage: `url(${src})` }}>
        ...
      </div>
      <div className={STYLES_DESCRIPTION}>
        <h4 className={STYLES_TITLE}>{`{GAME_NAME}`}</h4>
        <div>
          <p className={STYLES_PARAGRAPH}>
            {`{PARAGRAPH_TEXT}}`} {` {DOWNLOAD & PLAY NOW}`} {` {PLAY COUNT}`}
          </p>
        </div>
      </div>
    </a>
  );
};

export default SmallCard;
