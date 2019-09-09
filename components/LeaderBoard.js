import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  background: blue;
  width: 100%;
`;

const STYLES_LAYOUT_ITEM = css`
  background: red;
`;

const LeaderBoard = () => {
  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_LAYOUT_ITEM}>AAA</div>
      <div className={STYLES_LAYOUT_ITEM}>AAA</div>
      <div className={STYLES_LAYOUT_ITEM}>AAA</div>
      <div className={STYLES_LAYOUT_ITEM}>AAA</div>
      <div className={STYLES_LAYOUT_ITEM}>AAA</div>
      <div className={STYLES_LAYOUT_ITEM}>AAA</div>
      <div className={STYLES_LAYOUT_ITEM}>AAA</div>
    </div>
  );
};

export default LeaderBoard;
