const fs = require('fs');
const { WebClient } = require('@slack/web-api');
const web = new WebClient('トークン');
const main = async () => {
  // Slack send message
  const channelID = 'チャンネルID';
  await web.chat.postMessage({
    username: 'ユーザー名',
    icon_url: 'アイコンURL',
    text: 'こちらはテストメッセージです。\n 画像URL',
    channel: channelID,
    attachments: [{
      title: 'タイトル',
      text: 'テキスト',
      color: '#2eb886',
      image_url: 'イメージURL',
      title_link: 'タイトルURL',
      fields: [
        {
          title: 'Priority1',
          value: 'value1',
          short: 'true',
        },
        {
          title: 'Priority2',
          value: 'value2',
          short: 'true',
        },
            {
          title: 'Priority3',
          value: 'value3',
          short: 'true',
        },
        {
          title: 'Priority4',
          value: 'value4',
          short: 'true',
        },
      ],
    }],
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
