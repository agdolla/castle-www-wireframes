import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_CARD = css`
  background: #fff;
  color: #000;
  border-radius: 4px;
`;

const STYLES_TOP = css`
  padding: 16px;
`;

const STYLES_DESCRIPTION = css`
  padding: 16px;
  border-top: 1px solid #222;
`;

const CardPost = () => {
  return (
    <div className={STYLES_CARD}>
      <div className={STYLES_TOP}>
        <h2>Post Title</h2>
        <p>Ben Roth</p>
      </div>
      <p className={STYLES_DESCRIPTION}>
        Description Description Description Description Description Description Description
        Description Description Description Description Description Description Description
        Description Description Description Description Description
      </p>
    </div>
  );
};

export default CardPost;
