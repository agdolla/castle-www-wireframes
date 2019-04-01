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
  color: #999;
`;

const SideSectionEntity = props => {
  return (
    <div className={STYLES_CONTAINER}>
      <span className={STYLES_LEFT} style={{ backgroundImage: `url(${props.src})` }} />
      <span className={STYLES_RIGHT}>
        <div className={STYLES_TITLE}>
          {props.title}{' '}
          {props.notificationCount ? (
            <NotificationPill style={{ marginLeft: 8, marginTop: 2 }}>
              {props.notificationCount}
            </NotificationPill>
          ) : null}
        </div>
        {props.author ? <div className={STYLES_USER}>{props.author}</div> : null}
        <div className={STYLES_META}>{props.children}</div>
      </span>
    </div>
  );
};

export default SideSectionEntity;
