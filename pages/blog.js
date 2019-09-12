import * as React from 'react';

import Page from '~/components/Page';

import { css } from 'react-emotion';

export default class BlogPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Blog" description="Castle team's updates and news.">
        <div>List blogs</div>
      </Page>
    );
  }
}
