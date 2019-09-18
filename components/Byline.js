import React, { useState } from 'react';

import * as Constants from '~/common/constants';

import { css } from 'react-emotion';

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

const Byline = ({ src, user = {} }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_AVATAR_NAME}>
      <span className={STYLES_AVATAR} style={{ backgroundImage: `url(${user.profilePhoto})` }} />
      <span className={STYLES_AVATAR_TEXT}>{user.name}</span>
    </div>
  );
};

export default Byline;
