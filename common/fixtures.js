export const users = {
  viewer: {
    id: 'user-6',
    username: 'cakejim',
    name: 'The Cake God, Jim',
    profilePhoto: '/static/assets/avatar-10.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  castle: {
    id: 'user-0',
    username: 'Notifications',
    name: 'Castle Notifications',
    profilePhoto: '/static/assets/logo.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  jason: {
    id: `user-3`,
    name: 'Jason Riggs',
    username: 'bigriggs',
    profilePhoto: '/static/assets/avatar-2.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  adamg: {
    id: `user-4`,
    name: 'Adam Guru (Quit)',
    username: 'adam',
    profilePhoto: '/static/assets/avatar-3.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  ayla: {
    id: `user-5`,
    name: 'Ayla Myers',
    username: 'ayla',
    profilePhoto: '/static/assets/avatar-1.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  jesse: {
    id: 'user-1',
    username: 'jesse',
    name: 'Jesse Ruder',
    profilePhoto: '/static/assets/avatar-9.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  ccheever: {
    id: 'user-2',
    username: 'ccheever',
    name: 'Charlie Cheever',
    profilePhoto: '/static/assets/avatar-4.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  dog: {
    id: 'user-7',
    username: 'dog',
    name: 'A friendly dog',
    profilePhoto: '/static/assets/a2.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  rcox: {
    id: 'user-8',
    username: 'rebekah',
    name: 'Rebekah',
    profilePhoto: '/static/assets/avatar-3.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },
};

export const usersList = [
  {
    id: 'user-6',
    username: 'cakejim',
    name: 'The Cake God, Jim',
    profilePhoto: '/static/assets/avatar-10.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  {
    id: `user-3`,
    name: 'Jason Riggs',
    username: 'bigriggs',
    profilePhoto: '/static/assets/avatar-2.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  {
    id: `user-4`,
    name: 'Adam Guru (Quit)',
    username: 'adam',
    profilePhoto: '/static/assets/avatar-3.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  {
    id: `user-5`,
    name: 'Ayla Myers',
    username: 'ayla',
    profilePhoto: '/static/assets/avatar-1.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  {
    id: 'user-1',
    username: 'jesse',
    name: 'Jesse Ruder',
    profilePhoto: '/static/assets/avatar-9.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  {
    id: 'user-2',
    username: 'ccheever',
    name: 'Charlie Cheever',
    profilePhoto: '/static/assets/avatar-4.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  {
    id: 'user-7',
    username: 'dog',
    name: 'A friendly dog',
    profilePhoto: '/static/assets/a2.jpg',
    createdAt: '2018-08-13 01:16:21.077+00',
  },

  {
    id: 'user-8',
    username: 'rebekah',
    name: 'Rebekah',
    profilePhoto: '/static/assets/avatar-3.png',
    createdAt: '2018-08-13 01:16:21.077+00',
  },
];

export const chats = {
  normal: [
    {
      id: '3',
      unread: 2,
      createdAt: '2018-08-13 01:16:21.077+00',
      group: {
        name: 'General Chat',
        groupPhoto: '/static/assets/avatar-chat.jpeg',
        createdAt: '2018-08-13 01:16:21.077+00',
      },
      messages: [
        {
          id: 'message-1',
          text: 'Hey hey',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.jason,
        },
        {
          id: 'message-2',
          text: 'Hey Jason, how is it going? I love Robosquash.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.ccheever,
        },
        {
          id: 'message-3',
          text: 'I also love Robosquash.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.dog,
        },
        {
          id: 'message-4',
          text: 'Hoping to play lil basketball with Ayla.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.ccheever,
        },
        {
          id: 'message-5',
          text: 'Same.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.dog,
        },
        {
          id: 'message-6',
          text:
            'Wait till you see the latest version. I added one where Jess is a playable character.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.ayla,
        },
        {
          id: 'message-7',
          text: 'Hey that is awesome!',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.viewer,
        },
        {
          id: 'message-8',
          text: 'I really want to give this a shot!',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.viewer,
        },
        {
          id: 'message-9',
          text: 'Next round Jim.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.ccheever,
        },
        {
          id: 'message-10',
          text: 'What do people want to play next?',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.rcox,
        },
      ],
    },
    {
      id: '4',
      unread: 16,
      createdAt: '2018-08-13 01:16:21.077+00',
      user: users.jason,
      messages: [
        {
          id: 'message-1',
          text: 'Hey missed you at standup',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.jason,
        },
        {
          id: 'message-2',
          text: 'Have you been eating Cake?',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.jason,
        },
        {
          id: 'message-3',
          text: 'lol',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.jason,
        },
      ],
    },
    {
      id: '5',
      unread: 0,
      createdAt: '2018-08-13 01:16:21.077+00',
      user: users.adamg,
      messages: [
        {
          id: 'message-1',
          text: 'Dude kind of put off you used my assets without telling me...',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.adamg,
        },
        {
          id: 'message-2',
          text: 'Pretty pissed off about this.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.adamg,
        },
        {
          id: 'message-3',
          text: 'Next time: Ask for permission.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.adamg,
        },
        {
          id: 'message-4',
          text: 'My apologies. You said you were okay with this 2 weeks ago.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.viewer,
        },
        {
          id: 'message-5',
          text: 'We can take the work down. I do not mean to offend',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.viewer,
        },
      ],
    },
    {
      id: '6',
      unread: 0,
      createdAt: '2018-08-13 01:16:21.077+00',
      user: users.adamg,
      group: {
        name: 'Hyperreal Gaming',
        groupPhoto: '/static/assets/avatar-7.png',
        createdAt: '2018-08-13 01:16:21.077+00',
      },
      messages: [
        {
          id: 'message-1',
          text: 'Jim, check your DMs, kinda upset about this thing you just did.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.adamg,
        },
        {
          id: 'message-2',
          text: 'ok',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.viewer,
        },
      ],
    },
    {
      id: '7',
      unread: 0,
      createdAt: '2018-08-13 01:16:21.077+00',
      user: users.ayla,
      group: {
        name: `Ayla's Squad`,
        groupPhoto: '/static/assets/avatar-8.jpg',
        createdAt: '2018-08-13 01:16:21.077+00',
      },
      messages: [],
    },
  ],
  castle: [
    {
      id: '1',
      unread: 4,
      createdAt: '2018-08-13 01:16:21.077+00',
      user: users.castle,
      isReadOnly: true,
      group: {
        name: 'Castle',
        groupPhoto: '/static/assets/logo.png',
        createdAt: '2018-08-13 01:16:21.077+00',
      },
      messages: [
        {
          id: 'message-1',
          text: 'We just launched the new chat feature to all new users.',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.castle,
        },
      ],
    },
    {
      id: '2',
      createdAt: '2018-08-13 01:16:21.077+00',
      user: users.ccheever,
      isReadOnly: true,
      messages: [
        {
          id: 'message-1',
          text: 'Time to play Candy Crush Saga!',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.ccheever,
        },
        {
          id: 'message-2',
          text: 'We just launched a new game I want everyone to try called Revenge of The Turtles!',
          createdAt: '2018-08-13 01:16:21.077+00',
          user: users.ccheever,
        },
      ],
    },
  ],
};
