import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_HEADER = css`
  padding: 24px;
  font-size: 100px;
`;

const PageHeader = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return <div className={STYLES_HEADER}>Download Castle | Windows | MacOS</div>;
};

export default PageHeader;
