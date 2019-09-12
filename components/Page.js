import * as React from 'react';

import PageLayout from '~/components/layouts/PageLayout';
import PageNavigation from '~/components/PageNavigation';
import PageHeader from '~/components/PageHeader';

import { css } from 'react-emotion';

export default class Page extends React.Component {
  render() {
    return (
      <PageLayout leftElement={<PageNavigation />} headerElement={<PageHeader />}>
        {this.props.children}
      </PageLayout>
    );
  }
}
