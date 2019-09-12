import * as React from 'react';

import Page from '~/components/Page';

import { css } from 'react-emotion';

export default class GamePage extends React.Component {
  render() {
    return (
      <Page title="GAME" description="CHANGE ME.">
        <div>Game preview</div>
        <div>Game Title</div>
        <div>User byline</div>
        <div>Download castle client and play</div>
        <div>Copy to clipboard</div>
        <div>Posts</div>
      </Page>
    );
  }
}
