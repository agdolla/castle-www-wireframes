import React, { useState } from 'react';

import * as Constants from '~/common/constants';

import { css } from 'react-emotion';

const STYLES_BYLINE = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const STYLES_BYLINE_TEXT = css`
  min-width: 10%;
  width: 100%;
  padding-left: 8px;
`;

const STYLES_AVATAR = css`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  background: ${Constants.colors.brand};
  background-size: cover;
  background-position: 50% 50%;
  flex-shrink: 0;
`;

const Byline = ({ src, user = {} }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_BYLINE}>
      <span className={STYLES_AVATAR} style={{ backgroundImage: `url(${user.profilePhoto})` }} />
      <span className={STYLES_BYLINE_TEXT}>
        <strong>{user.name}</strong>
      </span>
    </div>
  );
};

export default Byline;
