let i =0;
answer.innerHTML ="";
let html = "";
while(i < tweets.length){
    html += `<div class="flex my-3">
    <div class="tweet-item">
        <img src="${tweets[i].avatar}" class="tweets-photo" alt="png">
        <div class="tweet-content">
            <b>${tweets[i].name}</b> ${tweets[i].message}
            <div class="tweets-At">${tweets[i].tweetedAt}</div>
        </div>
    </div>
</div>`
    i++;
}
answer.innerHTML = `${html}`;

function All() {
    let i =0;
    answer.innerHTML ="";
    html = "";
    while(i < tweets.length){
        html += `<div class="flex my-3">
    <div class="tweet-item">
        <img src="${tweets[i].avatar}" class="tweets-photo" alt="png">
        <div class="tweet-content">
            <b>${tweets[i].name}</b> ${tweets[i].message}
            <div class="tweets-At">${tweets[i].tweetedAt}</div>
        </div>
    </div>
</div>`
        i++;
    }
    answer.innerHTML = `${html}`;
}


//三郎
function saburou(){
    html = "";
    i = 0;//初期化
    answer.innerHTML = "";
    while (i < tweets.length) {
        if (tweets[i].name === "三郎BOT") {
            html += `<div class="flex my-3">
    <div class="tweet-item">
        <img src="${tweets[i].avatar}" class="tweets-photo" alt="png">
        <div class="tweet-content">
            <b>${tweets[i].name}</b> ${tweets[i].message}
            <div class="tweets-At">${tweets[i].tweetedAt}</div>
        </div>
    </div>
</div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}

//太郎
function tarou(){
    html = "";
    i = 0;//初期化
    answer.innerHTML = "";
    while (i < tweets.length) {
        if (tweets[i].name === "太郎") {
            html += `<div class="flex my-3">
    <div class="tweet-item">
        <img src="${tweets[i].avatar}" class="tweets-photo" alt="png">
        <div class="tweet-content">
            <b>${tweets[i].name}</b> ${tweets[i].message}
            <div class="tweets-At">${tweets[i].tweetedAt}</div>
        </div>
    </div>
</div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}

//次郎
function jirou(){
    html = "";
    i = 0;//初期化
    answer.innerHTML = "";
    while (i < tweets.length) {
        if (tweets[i].name === "次郎") {
                html += `<div class="flex my-3">
    <div class="tweet-item">
        <img src="${tweets[i].avatar}" class="tweets-photo" alt="png">
        <div class="tweet-content">
            <b>${tweets[i].name}</b> ${tweets[i].message}
            <div class="tweets-At">${tweets[i].tweetedAt}</div>
        </div>
    </div>
</div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}