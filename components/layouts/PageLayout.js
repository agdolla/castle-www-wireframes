import React, { useState } from 'react';

import { css } from 'react-emotion';

const NAVIGATION_BACKGROUND = `#000`;
const BODY_BACKGROUND = `#111`;

const STYLES_LAYOUT = css`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const STYLES_LEFT = css`
  flex-shrink: 0;
  width: 288px;
  height: 100%;
  background: ${NAVIGATION_BACKGROUND};
`;

const STYLES_RIGHT = css`
  min-width: 10%;
  width: 100%;
  height: 100%;
  background: ${BODY_BACKGROUND};
`;

const PageLayout = ({ leftElement, children }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_LEFT}>{leftElement}</div>
      <div className={STYLES_RIGHT}>{children}</div>
    </div>
  );
};

export default PageLayout;
