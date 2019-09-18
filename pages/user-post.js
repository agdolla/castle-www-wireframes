import * as React from 'react';
import * as Constants from '~/common/constants';
import * as Fixtures from '~/common/fixtures';

import Plain from 'slate-plain-serializer';
import EntityEditor from '~/components/EntityEditor';
import EntityEditorPreview from '~/components/EntityEditorPreview';

import Page from '~/components/Page';

import { Value } from 'slate';
import { css } from 'react-emotion';

const STYLES_ROOT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const STYLES_ROOT_LEFT = css`
  min-width: 10%;
  width: 100%;
`;

const STYLES_ROOT_RIGHT = css`
  flex-shrink: 0;
  width: 480px;
  background: ${Constants.colors.foreground.tertiary};
  color: ${Constants.colors.foreground.text};
  font-family: 'mono';
  font-size: 12px;
`;

export default class UserPostPage extends React.Component {
  state = {
    value: Value.fromJSON(Fixtures.DraftPost),
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const title = 'The Uniting Of The Tribes';
    const user = { name: `Tiffany Zhong`, photoUrl: `url(/static/avatar-author.png)` };

    return (
      <Page title="POST" description="CHANGE ME">
        <div className={STYLES_ROOT}>
          <div className={STYLES_ROOT_LEFT}>
            <EntityEditorPreview title={title} user={user} value={this.state.value} />
          </div>
          <div className={STYLES_ROOT_RIGHT}>
            <EntityEditor value={this.state.value} onChange={this.onChange} />
          </div>
        </div>
      </Page>
    );
  }
}
