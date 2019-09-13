import * as React from 'react';

import Page from '~/components/Page';

import { css } from 'react-emotion';

export default class GamesPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Posts" description="Posts from the people of the Castle community.">
        <div>List of posts</div>
      </Page>
    );
  }
}
