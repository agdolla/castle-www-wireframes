import * as React from 'react';

import Page from '~/components/Page';
import Posts from '~/components/Posts';

import { css } from 'react-emotion';

export default class BlogPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Blog" description="Castle team's updates and news.">
        <Posts />
      </Page>
    );
  }
}
