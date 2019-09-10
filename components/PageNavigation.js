import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  width: 100%;
  color: white;
`;

const PageNavigation = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <h1>Castle</h1>
      <div>Log in</div>
      <div>Games</div>
      <div>Posts</div>
      <div>Documentation</div>
      <div>Tutorials</div>
      <div>Blog</div>
      <div>Reviews</div>
    </div>
  );
};

export default PageNavigation;
