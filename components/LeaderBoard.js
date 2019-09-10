import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  background: #fff;
  width: 100%;
  background: red;
`;

const STYLES_LAYOUT_ITEM = css`
  margin-bottom: 16px;
`;

const STYLES_TITLE = css`
  font-size: 18px;
`;

const STYLES_DESCRIPTION = css`
  font-size: 12px;
`;

const STYLES_HEADING = css`
  margin-bottom: 24px;
`;

const LeaderBoard = ({ title }) => {
  return (
    <div className={STYLES_LAYOUT}>
      <h2 className={STYLES_HEADING}>{title}</h2>
      <div className={STYLES_LAYOUT_ITEM}>
        <h3 className={STYLES_TITLE}>Title Text</h3>
        <p className={STYLES_DESCRIPTION}>Description Text -- Meta Text</p>
      </div>

      <div className={STYLES_LAYOUT_ITEM}>
        <h3 className={STYLES_TITLE}>Title Text</h3>
        <p className={STYLES_DESCRIPTION}>Description Text -- Meta Text</p>
      </div>

      <div className={STYLES_LAYOUT_ITEM}>
        <h3 className={STYLES_TITLE}>Title Text</h3>
        <p className={STYLES_DESCRIPTION}>Description Text -- Meta Text</p>
      </div>

      <div className={STYLES_LAYOUT_ITEM}>
        <h3 className={STYLES_TITLE}>Title Text</h3>
        <p className={STYLES_DESCRIPTION}>Description Text -- Meta Text</p>
      </div>

      <div className={STYLES_LAYOUT_ITEM}>
        <h3 className={STYLES_TITLE}>Title Text</h3>
        <p className={STYLES_DESCRIPTION}>Description Text -- Meta Text</p>
      </div>

      <div className={STYLES_LAYOUT_ITEM}>
        <h3 className={STYLES_TITLE}>Title Text</h3>
        <p className={STYLES_DESCRIPTION}>Description Text -- Meta Text</p>
      </div>
    </div>
  );
};

export default LeaderBoard;
