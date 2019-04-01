import styled, { css } from 'react-emotion';

import * as React from 'react';

const STYLES_POPOVER = css`
  position: absolute;
  z-index: 1;
  top: 48px;
  right: 0px;
  left: 0px;
  width: 100%;
  background: #ffff;
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

const STYLES_USER = css`
  padding: 8px 16px 8px 16px;
  color: #000;
  box-shadow: inset 0 -1px 0 #ececec;
  cursor: pointer;

  :last-child {
    box-shadow: none;
  }

  :hover {
    background: magenta;
    color: #fff;
  }
`;

const STYLES_USER_META = css`
  font-size: 12px;
  font-weight: 400;
`;

const STYLES_USER_TITLE = css`
  font-size: 14px;
  font-weight: 600;
`;

export default class PopoverSearchResults extends React.Component {
  render() {
    return (
      <span className={STYLES_POPOVER} style={this.props.style}>
        {this.props.searchResults.map(u => {
          return (
            <div className={STYLES_USER} key={u.id} onClick={() => this.props.onClick(u)}>
              <div className={STYLES_USER_TITLE}>{u.name}</div>
              <div className={STYLES_USER_META}>{u.username}</div>
            </div>
          );
        })}
      </span>
    );
  }
}
