import * as React from 'react';
import * as Constants from '~/common/constants';
import * as Fixtures from '~/common/fixtures';

import Page from '~/components/Page';

import LeaderBoard from '~/components/LeaderBoard';
import UserList from '~/components/UserList';
import SmallCard from '~/components/SmallCard';
import HeroCard from '~/components/HeroCard';
import Games from '~/components/Games';
import PostsFromGames from '~/components/PostsFromGames';

import { css } from 'react-emotion';

const MAX_WIDTH = 1212;

const STYLES_CONTENT = css`
  max-width: ${MAX_WIDTH}px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
  background: ${Constants.colors.background.tertiary};
  color: ${Constants.colors.background.text};
  width: 25%;
  padding: 24px;
  margin-bottom: 16px;

  :last-child {
    border-right: 0px;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Page title="INDEX" description="CHANGEME">
        <div className={STYLES_CONTENT}>
          <div className={STYLES_CONTENT_LEFT}>
            <div style={{ marginBottom: 24 }}>
              <HeroCard
                src="/static/shots/3.png"
                href="/@user/games/slug"
                user={Fixtures.USERS_LIST[0]}
              />
            </div>

            <span className={STYLES_FULL_ELEMENT}>
              <span className={STYLES_HALF_ELEMENT}>
                <LeaderBoard title="Now playing" />
              </span>
              <span className={STYLES_HALF_ELEMENT}>
                <UserList title="New creators" />
              </span>
            </span>

            <Games games={Fixtures.GAMES} />

            <PostsFromGames posts={Fixtures.DATA} />
          </div>
          <div className={STYLES_CONTENT_RIGHT}>
            <h2 className={STYLES_GROUP_TITLE}>New Releases</h2>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard src="/static/games/10.png" href="/@user/games/slug" />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard src="/static/games/11.png" href="/@user/games/slug" />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard src="/static/games/12.png" href="/@user/games/slug" />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard src="/static/games/13.png" href="/@user/games/slug" />
            </span>
            <span className={STYLES_SMALL_ELEMENT}>
              <SmallCard src="/static/games/14.png" href="/@user/games/slug" />
            </span>
          </div>
        </div>
      </Page>
    );
  }
}
