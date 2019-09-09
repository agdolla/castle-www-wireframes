import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  width: 100%;
`;

const PageNavigation = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return <div className={STYLES_LAYOUT}>Castle</div>;
};

export default PageNavigation;
