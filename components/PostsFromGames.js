import React, { useState } from 'react';
import * as Constants from '~/common/constants';

import { css } from 'react-emotion';

const STYLES_GROUP = css`
  margin-top: 24px;
`;

const STYLES_GROUP_TITLE = css`
  font-size: 18px;
  margin-bottom: 16px;
`;

const STYLES_GROUP_ELEMENTS = css`
  display: flex;
  flex-wrap: wrap;
`;

const STYLES_PREVIEW = css`
  background: ${Constants.colors.background.tertiary};
  color: ${Constants.colors.background.text};
  width: calc(438px - 16px);
  height: 246px;
  padding: 24px;
  margin-bottom: 16px;
  margin-right: 16px;
  background-size: cover;
  background-position: 50% 50%;

  :last-child {
    border-right: 0px;
  }
`;

const PostsFromGames = ({ posts = [] }) => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_GROUP}>
      <h2 className={STYLES_GROUP_TITLE}>Posts</h2>
      <div className={STYLES_GROUP_ELEMENTS}>
        {posts.map((each, index) => {
          return (
            <a
              className={STYLES_PREVIEW}
              key={`posts-${index}`}
              href="/@user/games/slug"
              style={{ backgroundImage: `url(${each.src})` }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsFromGames;
