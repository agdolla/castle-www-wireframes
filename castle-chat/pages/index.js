import Head from 'next/head';
import TextareaAutosize from 'react-textarea-autosize';

import * as React from 'react';
import * as SVG from '~/common/svg';

import { css, styled } from 'react-emotion';

import ChatSessionComponent from '~/components/ChatSessionComponent';
import SideSectionHeader from '~/components/SideSectionHeader';
import SideSectionEntity from '~/components/SideSectionEntity';
import NotificationPill from '~/components/NotificationPill';

const CASTLE_CHATS = [
  {
    id: '1',
    meta: '2 hours ago',
    unread: 4,
    user: {
      id: 'user-1',
      username: 'jesse',
      name: 'Jesse Ruder',
      profilePhoto: '/static/assets/avatar-9.png',
    },
    group: {
      name: 'Castle',
      groupPhoto: '/static/assets/logo.png',
    },
    messages: [
      {
        id: 'message-1',
        text: 'We just launched the new chat feature to all new users.',
        user: {
          id: 'user-1',
          username: 'jesse',
          name: 'Jesse Ruder',
          profilePhoto: '/static/assets/avatar-9.png',
        },
      },
    ],
  },
  {
    id: '2',
    user: {
      id: 'user-2',
      username: 'ccheever',
      name: 'Charlie Cheever',
      profilePhoto: '/static/assets/avatar-4.png',
    },
    meta: '30 mintues ago',
    messages: [
      {
        id: 'message-1',
        text: 'Hey did you finish the mocks?',
        user: {
          id: 'user-2',
          username: 'ccheever',
          name: 'Charlie Cheever',
          profilePhoto: '/static/assets/avatar-4.png',
        },
      },
      {
        id: 'message-2',
        text: 'I would like to see them.',
        user: {
          id: 'user-2',
          username: 'ccheever',
          name: 'Charlie Cheever',
          profilePhoto: '/static/assets/avatar-4.png',
        },
      },
    ],
  },
];

const NORMAL_CHATS = [
  {
    id: '3',
    unread: 16,
    user: {
      id: `user-3`,
      name: 'Jason Riggs',
      username: 'bigriggs',
      profilePhoto: '/static/assets/avatar-2.png',
    },
    messages: [
      {
        id: 'message-1',
        text: 'Hey missed you at standup',
        user: {
          id: `user-3`,
          name: 'Jason Riggs',
          username: 'bigriggs',
          profilePhoto: '/static/assets/avatar-2.png',
        },
      },
      {
        id: 'message-2',
        text: 'Have you been eating Cake?',
        user: {
          id: `user-3`,
          name: 'Jason Riggs',
          username: 'bigriggs',
          profilePhoto: '/static/assets/avatar-2.png',
        },
      },
    ],
  },
  {
    id: '4',
    unread: 0,
    user: {
      id: `user-4`,
      name: 'Adam Guru (Quit)',
      username: 'adam',
      profilePhoto: '/static/assets/avatar-3.jpg',
    },
    messages: [
      {
        id: 'message-1',
        text: 'Dude kind of put off you used my assets without telling me...',
        user: {
          id: `user-4`,
          name: 'Adam Guru (Quit)',
          username: 'adam',
          profilePhoto: '/static/assets/avatar-3.jpg',
        },
      },
      {
        id: 'message-2',
        text: 'Pretty pissed off about this.',
        user: {
          id: `user-4`,
          name: 'Adam Guru (Quit)',
          username: 'adam',
          profilePhoto: '/static/assets/avatar-3.jpg',
        },
      },
      {
        id: 'message-3',
        text: 'Next time: Ask for permission.',
        user: {
          id: `user-4`,
          name: 'Adam Guru (Quit)',
          username: 'adam',
          profilePhoto: '/static/assets/avatar-3.jpg',
        },
      },
    ],
  },
  {
    id: '5',
    unread: 0,
    user: {
      id: `user-4`,
      name: 'Adam Guru (Quit)',
      username: 'adam',
      profilePhoto: '/static/assets/avatar-3.jpg',
    },
    group: {
      name: 'Hyperreal Gaming',
      groupPhoto: '/static/assets/avatar-7.png',
    },
    messages: [
      {
        id: 'message-1',
        text: 'Jim, check your DMs, kinda upset about this thing you just did.',
        user: {
          id: `user-4`,
          name: 'Adam Guru (Quit)',
          username: 'adam',
          profilePhoto: '/static/assets/avatar-3.jpg',
        },
      },
    ],
  },
  {
    id: '5',
    unread: 0,
    user: {
      id: `user-5`,
      name: 'Ayla Myers',
      username: 'ayla',
      profilePhoto: '/static/assets/avatar-1.jpg',
    },
    group: {
      name: `Ayla's Squad`,
      groupPhoto: '/static/assets/avatar-8.jpg',
    },
  },
];

const STYLES_BUTTON = css`
  height: 48px;
  width: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;
  cursor: pointer;
  flex-shrink: 0;
`;

const STYLES_HEADER_BAR_TEXT = css`
  min-height: 48px;
  width: 100%;
  min-width: 25%;
  padding: 8px 16px 8px 16px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  box-shadow: 1px 0 0 #3d3d3d;
`;

const IconButton = props => {
  return (
    <span className={STYLES_BUTTON} style={props.style}>
      {props.svg}
    </span>
  );
};

const HeaderBarText = props => {
  return <span className={STYLES_HEADER_BAR_TEXT}>{props.children}</span>;
};

// GROUP SLOT
// ---------------------------------------------------------

const GroupSlot = props => {
  return (
    <div>
      <div>Image</div>
      <div>
        <div>Disney Land</div>
        <div>Name</div>
      </div>
    </div>
  );
};

// LEFT CHAT BUBBLE
// ---------------------------------------------------------

const LeftChatBubble = props => {
  return (
    <div>
      <div>Name</div>
      <div>Name</div>
    </div>
  );
};

// RIGHT CHAT BUBBLE
// ---------------------------------------------------------

const RightChatBubble = props => {
  return (
    <div>
      <div>Name</div>
      <div>Name</div>
    </div>
  );
};

// ACTIONS BAR
// ---------------------------------------------------------

const STYLES_ACTIONS = css`
  min-height: 48px;
  width: 100%;
  flex-shrink: 0;
  box-shadow: inset 0 1px 0 #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ActionsBar = props => {
  return <div className={STYLES_ACTIONS}>{props.children}</div>;
};

// HEADER BAR
// ---------------------------------------------------------

const STYLES_HEADER = css`
  min-height: 48px;
  flex-shrink: 0;
  width: 100%;
  box-shadow: inset 0 -1px 0 #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBar = props => {
  return <header className={STYLES_HEADER}>{props.children}</header>;
};

const STYLES_INPUT = css`
  height: 100%;
  width: 100%;
  min-width: 25%;
  outline: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  color: #f3f3f3;
  padding: 15px 16px 15px 16px;
  resize: none;
  box-shadow: 1px 0 0 #3d3d3d;
  font-size: 14px;
  background: transparent;

  ::-webkit-scrollbar {
    width: 0px;
  }

  :focus {
    border: 0;
    outline: 0;
  }
`;

// SEARCH INPUT
// ---------------------------------------------------------

class SearchInput extends React.Component {
  state = {
    value: '',
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <TextareaAutosize
        className={STYLES_INPUT}
        placeholder="Search users..."
        value={this.state.value}
        onChange={this._handleChange}
      />
    );
  }
}

// CHAT INPUT
// ---------------------------------------------------------

class ChatInput extends React.Component {
  state = {
    value: '',
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <TextareaAutosize
        className={STYLES_INPUT}
        placeholder="Type a message..."
        value={this.state.value}
        onChange={this._handleChange}
      />
    );
  }
}

// SIDE SECTION LAYOUT
// ---------------------------------------------------------

const STYLES_SIDE_SECTION_LAYOUT = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const STYLES_SIDE_SECTION_LAYOUT_HEADER = css`
  width: 100%;
  flex-shrink: 0;
`;

const STYLES_SIDE_SECTION_LAYOUT_MIDDLE = css`
  min-height: 25%;
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_SIDE_SECTION_LAYOUT_BOTTOM = css`
  flex-shrink: 0;
  width: 100%;
`;

class SideSectionLayout extends React.Component {
  render() {
    return (
      <div className={STYLES_SIDE_SECTION_LAYOUT} style={this.props.style}>
        {this.props.header ? (
          <div className={STYLES_SIDE_SECTION_LAYOUT_HEADER}>{this.props.header}</div>
        ) : null}
        <div className={STYLES_SIDE_SECTION_LAYOUT_MIDDLE}>{this.props.children}</div>
        {this.props.bottom ? (
          <div className={STYLES_SIDE_SECTION_LAYOUT_BOTTOM}>{this.props.bottom}</div>
        ) : null}
      </div>
    );
  }
}

// LAYOUT
// ---------------------------------------------------------

const STYLES_LAYOUT_LEFT = css`
  width: 280px;
  flex-shrink: 0;
  background: #333333;
  color: #ffffff;
  height: calc(100vh);
  box-shadow: inset -1px 0 0 #3d3d3d;
`;

const STYLES_LAYOUT_MIDDLE = css`
  width: 280px;
  flex-shrink: 0;
  background: #282828;
  color: #ffffff;
  height: calc(100vh);
  box-shadow: inset -1px 0 0 #3d3d3d;
`;

const STYLES_LAYOUT_RIGHT = css`
  min-width: 20%;
  width: 100%;
  height: calc(100vh);
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('/static/screenshot.gif');
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Layout = props => {
  return (
    <div className={STYLES_LAYOUT}>
      {props.left ? <span className={STYLES_LAYOUT_LEFT}>{props.left}</span> : null}
      {props.middle ? <span className={STYLES_LAYOUT_MIDDLE}>{props.middle}</span> : null}
      <span className={STYLES_LAYOUT_RIGHT}>{props.children}</span>
    </div>
  );
};

// PAGE COMPONENT
// ---------------------------------------------------------

export default class IndexPage extends React.Component {
  state = {
    selectedChatId: 1,
  };

  handleSelectChat = entity => {
    this.setState({ selectedChatId: entity.id });
  };

  render() {
    const leftElement = (
      <SideSectionLayout
        header={
          <HeaderBar>
            <SearchInput />
            <IconButton svg={<SVG.Membership size="20px" />} />
          </HeaderBar>
        }
      >
        <SideSectionHeader>Announcements</SideSectionHeader>
        <div>
          {CASTLE_CHATS.map(c => {
            let src = c.group ? c.group.groupPhoto : c.user.profilePhoto;
            let title = c.group ? c.group.name : c.user.name;
            const author =
              c.messages && c.messages.length && c.group ? c.messages[0].user.username : null;

            return (
              <SideSectionEntity
                key={c.id}
                src={src}
                title={title}
                author={author}
                notificationCount={c.unread}
              >
                {c.messages && c.messages.length ? c.messages[0].text : ``}
              </SideSectionEntity>
            );
          })}
        </div>
        <SideSectionHeader>Chats</SideSectionHeader>
        <div>
          {NORMAL_CHATS.map(c => {
            let src = c.group ? c.group.groupPhoto : c.user.profilePhoto;
            let title = c.group ? c.group.name : c.user.name;
            const author =
              c.messages && c.messages.length && c.group ? c.messages[0].user.username : null;

            return (
              <SideSectionEntity
                key={c.id}
                src={src}
                title={title}
                author={author}
                notificationCount={c.unread}
              >
                {c.messages && c.messages.length ? c.messages[0].text : ``}
              </SideSectionEntity>
            );
          })}
        </div>
      </SideSectionLayout>
    );
    const middleElement = (
      <SideSectionLayout
        header={
          <HeaderBar>
            <HeaderBarText>
              <ChatSessionComponent top="Jesse Ruder">4 minutes ago...</ChatSessionComponent>
            </HeaderBarText>{' '}
            <IconButton svg={<SVG.Settings size="20px" />} />
          </HeaderBar>
        }
        bottom={
          <ActionsBar>
            <ChatInput />
            <IconButton svg={<SVG.Smile size="20px" />} />
          </ActionsBar>
        }
      >
        <div>Conversation</div>
      </SideSectionLayout>
    );

    return (
      <React.Fragment>
        <Head>
          <title>Castle Chat Prototype</title>
        </Head>
        <Layout left={leftElement} middle={middleElement} />
      </React.Fragment>
    );
  }
}
