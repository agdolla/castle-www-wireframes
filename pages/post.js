import * as React from 'react';
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
  background: #000;
  color: #fff;
  font-family: 'mono';
  font-size: 12px;
`;

const STYLES_BRAND = css`
  font-family: 'logo';
  font-size: 16px;
  margin-right: 48px;
  margin-bottom: 4px;
`;

export default class PostPage extends React.Component {
  state = {
    value: Value.fromJSON(Fixtures.DraftPost),
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <Page title="POST" description="CHANGE ME">
        <div className={STYLES_ROOT}>
          <div className={STYLES_ROOT_LEFT}>
            <EntityEditorPreview
              title="The Uniting Of The Tribes"
              user={{ name: `Tiffany Zhong`, photoUrl: `url(/static/avatar-author.png)` }}
              value={this.state.value}
            />
          </div>
          <div className={STYLES_ROOT_RIGHT}>
            <EntityEditor value={this.state.value} onChange={this.onChange} />
          </div>
        </div>
      </Page>
    );
  }
}
