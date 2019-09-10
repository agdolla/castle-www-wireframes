import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  background: blue;
  width: 100%;
`;

const STYLES_IMAGE = css`
  height: 188px;
`;

const SmallCard = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_IMAGE}>...</div>
      <div>
        <h4>Title</h4>
        <p>Paragraph Text</p>
      </div>
    </div>
  );
};

export default SmallCard;
