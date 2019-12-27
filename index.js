const slack_config = require('./slackConfig.js')
const fs = require('fs');
const { WebClient } = require('@slack/web-api');
const web = new WebClient(slack_config.slack_token);
const main = async () => {

  let diff = fs.readFileSync("diff.txt");
  let status = fs.readFileSync("status.txt");

  // 標準出力からの引数だと、スペースが扱いづらい (別引数扱いになる。)ので、ファイルを参照することにする。
  // const firstArg = process.argv[2];
  // const secondArg = process.argv[3];


  // Slack send message
  const channelID = slack_config.slack_channel_id;
  await web.chat.postMessage({
    username: 'ユーザー名',
    icon_url: 'アイコンURL',
    text: '引数 = ' + diff + status,
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
