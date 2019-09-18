import React, { useState } from 'react';
import * as Constants from '~/common/constants';

import { css } from 'react-emotion';

const STYLES_HEADER = css`
  padding: 24px;
  font-size: 32px;
  color: ${Constants.colors.foreground.text};
`;

const PageHeader = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return <div className={STYLES_HEADER}>Download Castle | Windows | MacOS</div>;
};

export default PageHeader;
