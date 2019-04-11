import * as React from 'react';

import { css } from 'react-emotion';

const STYLES_EMPTY = css`
  font-size: 12px;
  font-weight: 400;
  height: 56px;
  color: #fff;
  padding: 0 16px 0 16px;
  display: flex;
  align-items: center;
`;

const STYLES_CONTAINER = css`
  max-height: 198px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_ACTIVITY_ITEM = css`
  height: 48px;
`;

export default class ActivityUpdates extends React.Component {
  static defaultProps = {
    activity: [],
  };

  render() {
    if (!this.props.activity.length) {
      return (
        <div className={STYLES_CONTAINER}>
          <div className={STYLES_EMPTY}>
            Start&nbsp;
            <strong style={{ color: 'magenta' }}>making games</strong>!
          </div>
        </div>
      );
    }

    return (
      <div className={STYLES_CONTAINER}>
        {this.props.activity.map(a => {
          return <div className={STYLES_ACTIVITY_ITEM}>Hello</div>;
        })}
      </div>
    );
  }
}
