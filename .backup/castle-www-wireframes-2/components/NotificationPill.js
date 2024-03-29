import styled, { css } from 'react-emotion';

import * as React from 'react';

const STYLES_NOTIFICATIONS_INDICATOR = css`
  background: rgb(255, 0, 235);
  color: white;
  height: 14px;
  padding: 0 6px 0 6px;
  border-radius: 14px;
  font-size: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
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
