import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  background: red;
  width: 100%;
`;

const STYLES_IMAGE = css`
  height: 320px;
`;

const HeroCard = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_IMAGE}>...</div>

      <div>
        <h4>Title</h4>
        <p>The description is lamme</p>
      </div>
    </div>
  );
};

export default HeroCard;
