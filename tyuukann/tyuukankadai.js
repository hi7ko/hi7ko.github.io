window.onload = function() {
    let answer = document.querySelector('#answer');
    let tweets = [];
    fetch('https://morimorihoge.github.io/teu2024f/tweets.js')
        .then(response => response.json())
        .then(data => {
            tweets = data;
            displayTweets(tweets);
        })

    // 全てのTweetを表示する関数
    function displayTweets(tweetsToDisplay) {
        let html = '';
        tweetsToDisplay.forEach(tweet => {
            html += `
        <div class="tweet-item">
          <img src="${tweet.avatar}" alt="avatar" class="tweet-avatar">
          <div class="tweet-content">
            <div class="tweet-name">${tweet.name}</div>
            <div class="tweet-message">${tweet.message}</div>
            <div class="tweet-At">${tweet.tweetedAt}</div>
          </div>
        </div>
      `;
        });
        answer.innerHTML = html;
    }

    // 初回表示で全てのTweetを表示
    displayTweets(tweets);

    // ユーザー名のボタンを動的に作成
    const userButtons = document.getElementById('user-buttons');
    const users = [...new Set(tweets.map(tweet => tweet.name))];

    // 'All' ボタンを追加
    const allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.onclick = () => filterTweets('All');
    userButtons.appendChild(allButton);

    // 各ユーザーごとのボタンを追加
    users.forEach(user => {
        const button = document.createElement('button');
        button.textContent = user;
        button.onclick = () => filterTweets(user);
        userButtons.appendChild(button);
    });

    // ユーザー名でTweetをフィルタリングする関数
    window.filterTweets = function(user) {
        if (user === 'All') {
            // Allボタンが押された時、全てのTweetを表示
            displayTweets(tweets);
        } else if(user === '三郎BOT') {
            // 特定のユーザーのTweetだけを表示
            const filteredTweets = tweets.filter(tweet => tweet.name === user);
            displayTweets(filteredTweets);
        }else if(user === '太郎') {
            // 特定のユーザーのTweetだけを表示
            const filteredTweets = tweets.filter(tweet => tweet.name === user);
            displayTweets(filteredTweets);
        }else if(user === '次郎') {
            // 特定のユーザーのTweetだけを表示
            const filteredTweets = tweets.filter(tweet => tweet.name === user);
            displayTweets(filteredTweets);
        }
    }
}
