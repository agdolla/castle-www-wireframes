import styled, { css } from 'react-emotion';

import * as React from 'react';

const STYLES_POPOVER = css`
  position: absolute;
  z-index: 1;
  top: 40px;
  right: 8px;
  width: 200px;
  background: #acacac;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`;

const STYLES_POPOVER_ITEM = css`
  width: 100%;
  color: #111;
  padding: 8px 24px 8px 16px;
  margin: 8px 0 8px 0;
  font-size: 12px;
  font-weight: 600;
  :hover {
    background: magenta;
    color: #fff;
    cursor: pointer;
  }
`;

export default class PopoverChat extends React.Component {
  render() {
    return (
      <span className={STYLES_POPOVER} style={this.props.style}>
        <div className={STYLES_POPOVER_ITEM}>Change to group</div>
        <div className={STYLES_POPOVER_ITEM}>Delete conversation</div>
      </span>
    );
  }
}
