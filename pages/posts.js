import * as React from 'react';
import * as Fixtures from '~/common/fixtures';

import Page from '~/components/Page';
import PostsFromGames from '~/components/PostsFromGames';

import { css } from 'react-emotion';

const MAX_WIDTH = 1212;

const STYLES_CONTENT = css`
  max-width: ${MAX_WIDTH}px;
  padding: 48px 48px 88px 48px;
`;

export default class PostsPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Posts" description="Posts from the people of the Castle community.">
        <div className={STYLES_CONTENT}>
          <PostsFromGames posts={Fixtures.DATA} />
        </div>
      </Page>
    );
  }
}
