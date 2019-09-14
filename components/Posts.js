import React, { useState } from 'react';

import { css } from 'react-emotion';

import CardPost from '~/components/CardPost';

const STYLES_LAYOUT = css`
  width: 960px;
  margin: 88px auto 0 auto;
  display: block;
`;

const STYLES_HERO = css`
  width: 100%;
  max-width: 480px;
  padding: 16px;
`;

const STYLES_ENTITY = css`
  width: 33.33%;
  display: block;
  padding: 16px;
`;

const STYLES_GRID = css`
  display: flex;
  flex-wrap: wrap;
`;

const STYLES_CARD = css`
  background: red;
  padding: 16px;
`;

const Posts = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_HERO}>
        <h1>Cake is great</h1>
        <p>Byline</p>
        <p>Description</p>
      </div>

      <div className={STYLES_GRID}>
        <span className={STYLES_ENTITY}>
          <CardPost />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost />
        </span>

        <span className={STYLES_ENTITY}>
          <CardPost />
        </span>
      </div>
    </div>
  );
};

export default Posts;
