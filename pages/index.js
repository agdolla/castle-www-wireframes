import Head from 'next/head';
import TextareaAutosize from 'react-textarea-autosize';

import * as React from 'react';
import * as SVG from '~/common/svg';
import * as Strings from '~/common/strings';
import * as Fixtures from '~/common/fixtures';

import { css, styled } from 'react-emotion';

import ChatSessionComponent from '~/components/ChatSessionComponent';
import SideSectionHeader from '~/components/SideSectionHeader';
import SideSectionEntity from '~/components/SideSectionEntity';
import NotificationPill from '~/components/NotificationPill';

import PopoverChat from '~/components/PopoverChat';
import PopoverSettings from '~/components/PopoverSettings';
import PopoverSearchResults from '~/components/PopoverSearchResults';

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
    <span
      className={STYLES_BUTTON}
      onClick={props.onClick}
      style={{ ...props.style, color: props.isActive ? 'magenta' : null }}>
      {props.svg}
    </span>
  );
};

const HeaderBarText = props => {
  return <span className={STYLES_HEADER_BAR_TEXT}>{props.children}</span>;
};

// LEFT CHAT BUBBLE
// ---------------------------------------------------------

const STYLES_LEFT_CHAT_BUBBLE = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 24px;
  margin-top: 16px;
`;

const STYLES_LEFT_CHAT_BUBBLE_AVATAR = css`
  background-size: cover;
  background-position: 50% 50%;
  height: 32px;
  width: 32px;
  flex-shrink: 0;
`;

const STYLES_LEFT_CHAT_BUBBLE_MESSAGE = css`
  min-width: 25%;
  width: 100%;
  padding: 0 0 0 8px;
`;

const STYLES_LEFT_CHAT_BUBBLE_MESSAGE_TITLE = css`
  font-size: 10px;
  color: #777;
`;

const STYLES_LEFT_CHAT_BUBBLE_MESSAGE_BOTTOM = css`
  text-align: left;
  margin-top: 4px;
`;

const STYLES_LEFT_CHAT_BOUNDS = css`
  display: inline-block;
  padding: 8px 16px 10px 16px;
  background: #ffffff;
  color: #000000;
  border-radius: 12px;
  font-size: 14px;
`;

const LeftChatBubble = props => {
  return (
    <div className={STYLES_LEFT_CHAT_BUBBLE}>
      <span
        className={STYLES_LEFT_CHAT_BUBBLE_AVATAR}
        style={{ backgroundImage: `url(${props.src})` }}
      />
      <div className={STYLES_LEFT_CHAT_BUBBLE_MESSAGE}>
        <div className={STYLES_LEFT_CHAT_BUBBLE_MESSAGE_TITLE}>{props.name}</div>
        <div className={STYLES_LEFT_CHAT_BUBBLE_MESSAGE_BOTTOM}>
          <span className={STYLES_LEFT_CHAT_BOUNDS}>{props.children}</span>
        </div>
      </div>
    </div>
  );
};

// RIGHT CHAT BUBBLE
// ---------------------------------------------------------

const STYLES_RIGHT_CHAT_BUBBLE = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 24px;
  margin-top: 16px;
`;

const STYLES_RIGHT_CHAT_BUBBLE_AVATAR = css`
  background-size: cover;
  background-position: 50% 50%;
  height: 32px;
  width: 32px;
  flex-shrink: 0;
`;

const STYLES_RIGHT_CHAT_BUBBLE_MESSAGE = css`
  min-width: 25%;
  width: 100%;
  padding: 0 8px 0 0;
`;

const STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_TITLE = css`
  font-size: 10px;
  color: #777;
  text-align: right;
`;

const STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_BOTTOM = css`
  margin-top: 4px;
  text-align: right;
`;

const STYLES_RIGHT_CHAT_BOUNDS = css`
  display: inline-block;
  padding: 8px 16px 10px 16px;
  background: magenta;
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
`;

const RightChatBubble = props => {
  return (
    <div className={STYLES_RIGHT_CHAT_BUBBLE}>
      <div className={STYLES_RIGHT_CHAT_BUBBLE_MESSAGE}>
        <div className={STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_TITLE}>{props.name}</div>
        <div className={STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_BOTTOM}>
          <span className={STYLES_RIGHT_CHAT_BOUNDS}>{props.children}</span>
        </div>
      </div>
      <span
        className={STYLES_RIGHT_CHAT_BUBBLE_AVATAR}
        style={{ backgroundImage: `url(${props.src})` }}
      />
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
  render() {
    return (
      <input
        className={STYLES_INPUT}
        placeholder="Search users..."
        value={this.props.value}
        onChange={this.props.onChange}
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

  _handleSubmit = e => {
    if (e.which === 13) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onSubmit(this.state.value);
      this.setState({ value: '' });
      return false;
    }
  };

  render() {
    return (
      <TextareaAutosize
        autoFocus
        className={STYLES_INPUT}
        placeholder="Type a message..."
        value={this.state.value}
        onChange={this._handleChange}
        onKeyDown={this._handleSubmit}
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
  position: relative;
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
  _scrollContainer;

  scroll = () => {
    this._scrollContainer.scrollTop = this._scrollContainer.scrollHeight;
  };

  getRef = () => {
    return this._scrollContainer;
  };

  componentDidMount() {
    if (!this._scrollContainer) {
      return;
    }

    if (!this.props.autoScroll) {
      return;
    }

    this.scroll();
  }

  render() {
    return (
      <div className={STYLES_SIDE_SECTION_LAYOUT} style={this.props.style}>
        {this.props.header ? (
          <div className={STYLES_SIDE_SECTION_LAYOUT_HEADER}>{this.props.header}</div>
        ) : null}
        <div
          className={STYLES_SIDE_SECTION_LAYOUT_MIDDLE}
          ref={c => {
            this._scrollContainer = c;
          }}>
          {this.props.children}
        </div>
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
  _chatWindow;

  state = {
    selectedChatId: '4',
    popover: null,
    search: '',
    searchResults: [],
    announcements: [...Fixtures.chats.castle],
    chats: [...Fixtures.chats.normal],
  };

  handleSelectChat = entity => {
    if (this.state.selectedChatId === entity.id) {
      return this.setState({ selectedChatId: null, popover: null });
    }

    this.setState({ selectedChatId: entity.id, popover: null }, () => {
      if (!this._chatWindow) {
        return;
      }

      this._chatWindow.scroll();
    });
  };

  _handleUserClick = user => {
    let found;

    found = this.state.chats.find(u => {
      return u.user && u.user.id === user.id;
    });

    if (found) {
      return this.setState({
        selectedChatId: found.id,
        search: '',
        searchResults: [],
      });
    }

    const chats = [...this.state.chats];
    const chatId = `chat-${new Date().getTime()}`;
    chats.push({
      id: chatId,
      unread: 0,
      createdAt: '2018-08-13 01:16:21.077+00',
      user: user,
      messages: [],
    });

    this.setState({ search: '', searchResults: [], chats, selectedChatId: chatId });
  };

  _handleSearchChange = e => {
    const searchResults = [];
    Fixtures.usersList.forEach(u => {
      if (u.username.includes(e.target.value) || u.name.includes(e.target.value)) {
        searchResults.push(u);
      }
    });

    this.setState({ search: e.target.value, popover: null, searchResults });
  };

  _handleSelectPopover = type => {
    if (type === this.state.popover) {
      this.setState({ popover: null });
      return;
    }

    this.setState({ popover: type, search: '', searchResults: [] });
  };

  _handleSubmit = text => {
    const message = {
      id: `message-${new Date().getTime()}`,
      text,
      createdAt: Strings.createDate(),
      user: Fixtures.users.viewer,
    };

    const selectedChat = [...this.state.announcements, ...this.state.chats].find(
      c => c.id === this.state.selectedChatId
    );

    if (!selectedChat) {
      return;
    }

    const messages = [...selectedChat.messages];
    messages.push(message);

    const updatedSelectedChat = { ...selectedChat, messages };
    const chats = [...this.state.chats];

    for (let i = 0; i < chats.length; i++) {
      if (chats[i].id === updatedSelectedChat.id) {
        chats[i] = updatedSelectedChat;
        break;
      }
    }

    this.setState({ chats }, () => {
      if (!this._chatWindow) {
        return;
      }

      this._chatWindow.scroll();
    });
  };

  render() {
    const selectedChat = [...this.state.announcements, ...this.state.chats].find(
      c => c.id === this.state.selectedChatId
    );

    console.log('Current Chat Object', selectedChat);

    const leftElement = (
      <SideSectionLayout
        header={
          <HeaderBar>
            <SearchInput onChange={this._handleSearchChange} value={this.props.search} />
            <IconButton
              isActive={this.state.popover === 'SETTINGS'}
              onClick={() => this._handleSelectPopover('SETTINGS')}
              svg={<SVG.Membership size="20px" />}
            />
          </HeaderBar>
        }>
        {this.state.selectedChatId && this.state.popover === 'SETTINGS' ? (
          <PopoverSettings />
        ) : null}
        {this.state.searchResults && !Strings.isEmpty(this.state.search) ? (
          <PopoverSearchResults
            onClick={this._handleUserClick}
            searchResults={this.state.searchResults}
          />
        ) : null}
        <SideSectionHeader>Announcements</SideSectionHeader>
        <div>
          {this.state.announcements.map(c => {
            let src = c.group ? c.group.groupPhoto : c.user.profilePhoto;
            let title = c.group ? c.group.name : c.user.name;
            const author =
              c.messages && c.messages.length && c.group
                ? c.messages[c.messages.length - 1].user.username
                : null;

            return (
              <SideSectionEntity
                key={c.id}
                src={src}
                title={title}
                author={author}
                isSelected={c.id === this.state.selectedChatId}
                notificationCount={c.unread}
                onClick={() => this.handleSelectChat(c)}>
                {c.messages && c.messages.length ? c.messages[c.messages.length - 1].text : ``}
              </SideSectionEntity>
            );
          })}
        </div>
        <SideSectionHeader>Chats</SideSectionHeader>
        <div>
          {this.state.chats.map(c => {
            let src = c.group ? c.group.groupPhoto : c.user.profilePhoto;
            let title = c.group ? c.group.name : c.user.name;
            let author =
              c.messages && c.messages.length && c.group
                ? c.messages[c.messages.length - 1].user.username
                : null;

            if (author === Fixtures.users.viewer.username) {
              author = 'You';
            }

            if (
              c.messages &&
              c.messages.length &&
              c.messages[c.messages.length - 1].user.username === Fixtures.users.viewer.username
            ) {
              author = 'You';
            }

            return (
              <SideSectionEntity
                key={c.id}
                src={src}
                title={title}
                author={author}
                isSelected={c.id === this.state.selectedChatId}
                notificationCount={c.unread}
                onClick={() => this.handleSelectChat(c)}>
                {c.messages && c.messages.length ? c.messages[c.messages.length - 1].text : ``}
              </SideSectionEntity>
            );
          })}
        </div>
      </SideSectionLayout>
    );
    const middleElement = this.state.selectedChatId ? (
      <SideSectionLayout
        ref={c => {
          this._chatWindow = c;
        }}
        autoScroll
        header={
          <HeaderBar>
            <HeaderBarText>
              <ChatSessionComponent
                top={
                  selectedChat.group
                    ? selectedChat.group.name
                    : selectedChat.messages && selectedChat.messages.length
                    ? selectedChat.messages[selectedChat.messages.length - 1].user.name
                    : selectedChat.user.name
                }>
                {Strings.getTimeSinceToday(
                  selectedChat.group
                    ? selectedChat.group.createdAt
                    : selectedChat.messages && selectedChat.messages.length
                    ? selectedChat.messages[selectedChat.messages.length - 1].createdAt
                    : selectedChat.createdAt
                )}
              </ChatSessionComponent>
            </HeaderBarText>{' '}
            <IconButton
              isActive={this.state.popover === 'CHAT'}
              onClick={() => this._handleSelectPopover('CHAT')}
              svg={<SVG.Settings size="20px" />}
            />
          </HeaderBar>
        }
        bottom={
          !selectedChat.isReadOnly ? (
            <ActionsBar>
              <ChatInput onSubmit={this._handleSubmit} />
              <IconButton svg={<SVG.Smile size="20px" />} />
            </ActionsBar>
          ) : null
        }>
        {this.state.selectedChatId && this.state.popover === 'CHAT' ? (
          <PopoverChat>Hello World</PopoverChat>
        ) : null}
        <div style={{ padding: `0px 16px 16px 16px` }}>
          {selectedChat.messages.map(c => {
            if (c.user.id === Fixtures.users.viewer.id) {
              return (
                <RightChatBubble key={c.id} src={c.user.profilePhoto} name={c.user.name}>
                  {c.text}
                </RightChatBubble>
              );
            }

            return (
              <LeftChatBubble key={c.id} src={c.user.profilePhoto} name={c.user.name}>
                {c.text}
              </LeftChatBubble>
            );
          })}
        </div>
      </SideSectionLayout>
    ) : null;

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
