import * as React from 'react';

import { css } from 'react-emotion';

import NotificationPill from '~/components/NotificationPill';

const STYLES_CONTAINER = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: inset 0 -1px 0 #3d3d3d;
  background-color: #444;
  cursor: pointer;
  transition: 200ms ease background;
  user-select: none;

  :last-child {
    box-shadow: none;
  }
`;

const STYLES_LEFT = css`
  flex-shrink: 0;
  height: 64px;
  width: 64px;
  background-color: #000;
  background-size: cover;
  background-position: 50% 50%;
  margin-left: 16px;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 1);
`;

const STYLES_RIGHT = css`
  min-width: 25%;
  width: 100%;
  padding: 0 16px 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 56px;
`;

const STYLES_TITLE = css`
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

const STYLES_USER = css`
  font-size: 10px;
  font-weight: 700;
  margin-top: 3px;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const STYLES_META = css`
  font-size: 10px;
  font-weight: 400;
  margin-top: 3px;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #dcdcdc;
`;

export default class SideSectionEntity extends React.Component {
  render() {
    return (
      <div
        className={STYLES_CONTAINER}
        onClick={this.props.onClick}
        style={{ backgroundColor: this.props.isSelected ? 'magenta' : undefined }}>
        <span className={STYLES_LEFT} style={{ backgroundImage: `url(${this.props.src})` }} />
        <span className={STYLES_RIGHT}>
          <div className={STYLES_TITLE}>
            {this.props.title}{' '}
            {this.props.notificationCount && !this.props.isSelected ? (
              <NotificationPill style={{ marginLeft: 8, marginTop: 2 }}>
                {this.props.notificationCount}
              </NotificationPill>
            ) : null}
          </div>
          {this.props.author ? <div className={STYLES_USER}>{this.props.author}</div> : null}
          <div className={STYLES_META}>{this.props.children}</div>
        </span>
      </div>
    );
  }
}
