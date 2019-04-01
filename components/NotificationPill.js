import styled, { css } from 'react-emotion';

import * as React from 'react';

const STYLES_NOTIFICATIONS_INDICATOR = css`
  background: magenta;
  color: white;
  height: 14px;
  padding: 0 6px 0 6px;
  border-radius: 14px;
  font-size: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0px;
`;

export default class NotificationPill extends React.Component {
  render() {
    return (
      <span className={STYLES_NOTIFICATIONS_INDICATOR} style={this.props.style}>
        {this.props.children}
      </span>
    );
  }
}
