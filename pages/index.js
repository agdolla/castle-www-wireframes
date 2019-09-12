import * as React from 'react';

import Page from '~/components/Page';

import LeaderBoard from '~/components/LeaderBoard';
import SmallCard from '~/components/SmallCard';
import HeroCard from '~/components/HeroCard';

import { css } from 'react-emotion';

const MAX_WIDTH = 1212;

const STYLES_HEADER = css`
  padding: 24px;
  position: fixed;
  top: 0;
  right: 0;
  background: green;
  left: 188px;
`;

const STYLES_CONTENT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${MAX_WIDTH}px;
  padding-top: 72px;
`;

const STYLES_CONTENT_LEFT = css`
  min-width: 10%;
  width: 100%;
  padding: 24px;
`;

const STYLES_CONTENT_RIGHT = css`
  flex-shrink: 0;
  width: 288px;
  padding: 24px 24px 24px 0;
`;

const STYLES_FULL_ELEMENT = css`
  width: 100%;
  display: flex;
`;

const STYLES_HALF_ELEMENT = css`
  width: 50%;
  display: flex;
`;

const STYLES_SMALL_ELEMENT = css`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
`;

const STYLES_GROUP = css`
  margin-top: 24px;
`;

const STYLES_GROUP_TITLE = css`
  font-size: 18px;
  margin-bottom: 16px;
`;

const STYLES_GROUP_ELEMENTS = css`
  display: flex;
  flex-wrap: wrap;
`;

const STYLES_PREVIEW = css`
  width: 25%;
  padding: 24px;
  background: yellow;
  margin-bottom: 16px;
  color: black;
  border-right: 2px solid #000;

  :last-child {
    border-right: 0px;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <div className={STYLES_CONTENT}>
          <div className={STYLES_CONTENT_LEFT}>
            <div style={{ marginBottom: 24 }}>
              <HeroCard />
            </div>

            <span className={STYLES_FULL_ELEMENT}>
              <span className={STYLES_HALF_ELEMENT}>
                <LeaderBoard title="Ranking" />
              </span>
              <span className={STYLES_HALF_ELEMENT}>
                <LeaderBoard title="Cool Creators" />
              </span>
            </span>

            <div className={STYLES_GROUP}>
              <h2 className={STYLES_GROUP_TITLE}>Games</h2>
              <div className={STYLES_GROUP_ELEMENTS}>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
              </div>
            </div>

            <div className={STYLES_GROUP}>
              <h2 className={STYLES_GROUP_TITLE}>Posts</h2>
              <div className={STYLES_GROUP_ELEMENTS}>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
                <span className={STYLES_PREVIEW}>...</span>
              </div>
            </div>
          </div>
          <div className={STYLES_CONTENT_RIGHT}>
            <h2 className={STYLES_GROUP_TITLE}>Latest</h2>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard />
            </span>
          </div>
        </div>
      </Page>
    );
  }
}
