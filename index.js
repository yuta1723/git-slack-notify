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
    // text: '引数 = ' + diff + status,
    channel: channelID,
    attachments: [{
      title: 'git status -sb',
      text: '' + status,
      color: '#ffa500'
    },{
      title: 'git diff',
      text: '' + diff,
      color: '#2eb886'
    }]
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
