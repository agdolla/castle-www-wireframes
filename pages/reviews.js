import * as React from 'react';

import Page from '~/components/Page';
import Posts from '~/components/Posts';

import { css } from 'react-emotion';

export default class ReviewPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Reviews" description="Reviews from the people of the Castle community.">
        <Posts />
      </Page>
    );
  }
}
