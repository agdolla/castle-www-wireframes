import * as Constants from '~/common/constants';
import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  background: ${Constants.colors.background.primary};
  width: 100%;
  padding: 0 0 88px 188px;
`;

const STYLES_LEFT = css`
  flex-shrink: 0;
  width: 188px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${Constants.colors.background.secondary};
`;

const STYLES_HEADER = css`
  top: 0;
  right: 0;
  background: ${Constants.colors.banner};
`;

const PageLayout = ({ leftElement, headerElement, children }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_LEFT}>{leftElement}</div>
      <div className={STYLES_HEADER}>{headerElement}</div>
      {children}
    </div>
  );
};

export default PageLayout;
