import * as React from 'react';

import { css } from 'react-emotion';

const STYLES_CONTAINER = css`
  font-weight: 600;
  font-size: 10px;
  padding: 0 16px 2px 16px;
  background: #111111;
  height: 24px;
  display: flex;
  letter-spacing: 0.1px;
  align-items: center;
  border-top: solid 1px #181818;
`;

const SideSectionHeader = props => {
  return <div className={STYLES_CONTAINER}>{props.children}</div>;
};

export default SideSectionHeader;
