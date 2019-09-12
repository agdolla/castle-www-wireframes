import React, { useState } from 'react';

import { css } from 'react-emotion';

const NAVIGATION_BACKGROUND = `#000`;
const BODY_BACKGROUND = `#111`;

const STYLES_LAYOUT = css`
  background: ${BODY_BACKGROUND};
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
  background: ${NAVIGATION_BACKGROUND};
`;

const STYLES_HEADER = css`
  top: 0;
  right: 0;
  background: green;
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
