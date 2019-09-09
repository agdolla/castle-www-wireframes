import * as React from 'react';

import PageLayout from '~/components/layouts/PageLayout';
import PageNavigation from '~/components/PageNavigation';

import LeaderBoard from '~/components/LeaderBoard';

import { css } from 'react-emotion';

const MAX_WIDTH = 1024;
const NAVIGATION_BACKGROUND = `#000`;
const BODY_BACKGROUND = `#111`;

const STYLES_HEADER = css`
  box-shadow: inset 0 0 0 1px blue;
  padding: 16px;
`;

const STYLES_PROMO = css`
  box-shadow: inset 0 0 0 1px blue;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${MAX_WIDTH}px;
`;

const STYLES_PROMO_LEFT = css`
  min-width: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const STYLES_PROMO_RIGHT = css`
  flex-shrink: 0;
  width: 248px;
`;

const STYLES_LEADERBOARDS = css`
  box-shadow: inset 0 0 0 1px blue;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${MAX_WIDTH}px;
`;

const STYLES_LEADERBOARDS_LEFT = css`
  min-width: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const STYLES_LEADERBOARDS_RIGHT = css`
  flex-shrink: 0;
  width: 220px;
`;

const STYLES_FULL_ELEMENT = css`
  width: 100%;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px red;
  display: flex;
  padding: 16px;
`;

const STYLES_CONTENT = css`
  background: ${BODY_BACKGROUND};
  display: flex;
`;

const STYLES_HALF_ELEMENT = css`
  height: 280px;
  width: 50%;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px red;
  display: flex;
  padding: 16px;
`;

const STYLES_SMALL_ELEMENT = css`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
  box-shadow: inset 0 0 0 1px red;
  display: flex;
  padding: 16px;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <PageLayout leftElement={<PageNavigation />}>
        <div className={STYLES_HEADER}>
          <span className={STYLES_CONTENT}>filler</span>
        </div>

        <div className={STYLES_PROMO}>
          <div className={STYLES_PROMO_LEFT}>
            <span className={STYLES_FULL_ELEMENT}>
              <img src="/static/shots/1.jpg" style={{ display: 'block', width: '100%' }} />
            </span>
          </div>
          <div className={STYLES_PROMO_RIGHT}>
            <span className={STYLES_SMALL_ELEMENT}>
              <span className={STYLES_CONTENT}>
                <img src="/static/shots/2.gif" style={{ display: 'block', width: '100%' }} />
              </span>
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <span className={STYLES_CONTENT}>
                <img src="/static/shots/1.gif" style={{ display: 'block', width: '100%' }} />
              </span>
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <img src="/static/shots/1.png" style={{ display: 'block', width: '100%' }} />
            </span>
          </div>
        </div>

        <div className={STYLES_LEADERBOARDS}>
          <div className={STYLES_LEADERBOARDS_LEFT}>
            <span className={STYLES_HALF_ELEMENT}>
              <LeaderBoard />
            </span>

            <span className={STYLES_HALF_ELEMENT}>
              <LeaderBoard />
            </span>
          </div>
          <div className={STYLES_LEADERBOARDS_RIGHT}>
            <span className={STYLES_SMALL_ELEMENT}>
              <span className={STYLES_CONTENT}>filler</span>
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <span className={STYLES_CONTENT}>filler</span>
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <span className={STYLES_CONTENT}>filler</span>
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <span className={STYLES_CONTENT}>filler</span>
            </span>
          </div>
        </div>
      </PageLayout>
    );
  }
}
