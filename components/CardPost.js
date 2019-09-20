import React, { useState } from 'react';
import * as Constants from '~/common/constants';

import Byline from '~/components/Byline';

import { css } from 'react-emotion';

const STYLES_CARD = css`
  border-radius: 4px;
  text-decoration: none;
  display: block;
  margin-bottom: 48px;
  color: ${Constants.colors.background.text};
  :visited {
    color: ${Constants.colors.background.text};
  }
  :hover {
    color: ${Constants.colors.background.text};
  }
`;

const STYLES_TOP = css`
  padding: 16px;
`;

const STYLES_DESCRIPTION = css`
  padding: 16px;
  line-height: 1.5;
  font-size: 14px;
`;

const CardPost = ({ user = {}, post = {} }) => {
  return (
    <a className={STYLES_CARD} href="/@tiffany-zhong/posts/example">
      <div className={STYLES_TOP}>
        <h2>{post.title}</h2>
        <Byline user={user} />
      </div>
      <p className={STYLES_DESCRIPTION}>
        {post.description}
        {`{DOWNLOAD & PLAY NOW}`} {`{PLAY COUNT}`}
      </p>
    </a>
  );
};

export default CardPost;
