import * as React from 'react';
import * as Fixtures from '~/common/fixtures';
import * as Constants from '~/common/constants';

import Page from '~/components/Page';
import Byline from '~/components/Byline';

import { css } from 'react-emotion';

export default class UserGamePage extends React.Component {
  render() {
    return (
      <Page title="GAME" description="CHANGE ME.">
        <div>Game preview</div>
        <div>Game Title</div>
        <Byline user={Fixtures.USERS_LIST[0]} />
        <div>Download castle client and play</div>
        <div>Copy to clipboard</div>
        <div>Posts</div>
      </Page>
    );
  }
}
