// HTMLのdiv要素を取得
const answerDiv = document.getElementById('answer');

// 全てのツイートを表示する関数
function searchtweetAll() {
    answerDiv.innerHTML = ''; // 以前の結果をクリア
    tweets.forEach(tweet => {
        createTweetElement(tweet);
    });
}

// 特定のユーザーのツイートを表示する関数
function searchtweet(name) {
    answerDiv.innerHTML = '';
    const filteredTweets = tweets.filter(tweet => tweet.name === name);
    filteredTweets.forEach(tweet => {
        createTweetElement(tweet);
    });
}

// ツイート情報をHTML要素に変換してdiv要素に追加する関数
function createTweetElement(tweet) {
    const tweetElement = document.createElement('div');
    tweetElement.innerHTML = `
    <img src="${tweet.avatar}" alt="${tweet.name}のアバター">
    <p><strong>${tweet.name}</strong>: ${tweet.message}</p>
    <p>${tweet.tweetedAt}</p>
  `;
    answerDiv.appendChild(tweetElement);
}

// ボタンのクリックイベントにそれぞれ関数を紐づける
const searchtweet3Button = document.querySelector('button[onclick="searchtweet3()"]');
searchtweet3Button.onclick = () => searchtweet('三郎BOT');

const searchtweet2Button = document.querySelector('button[onclick="searchtweet2()"]');
searchtweet2Button.onclick = () => searchtweet('二郎');

const searchtweet1Button = document.querySelector('button[onclick="searchtweet1()"]');
searchtweet1Button.onclick = () => searchtweet('太郎');