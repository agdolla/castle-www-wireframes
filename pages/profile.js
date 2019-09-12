import * as React from 'react';

import Page from '~/components/Page';

import { css } from 'react-emotion';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <Page title="PERSON'S Profile" description="CHANGE ME">
        <div>User information</div>
        <div>Games made</div>
        <div>Posts</div>
      </Page>
    );
  }
}
