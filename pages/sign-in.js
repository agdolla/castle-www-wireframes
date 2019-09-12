import * as React from 'react';

import Page from '~/components/Page';

import { css } from 'react-emotion';

export default class SignInPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Sign in" description="CHANGEME">
        <div>Sign in form</div>
        <div>Terms of service</div>
        <div>Community guidelines</div>
        <div>Privacy policy</div>
      </Page>
    );
  }
}
