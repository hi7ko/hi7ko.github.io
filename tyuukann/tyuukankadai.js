let i =0;
answer.innerHTML ="";
let html = "";
while(i < tweets.length){
    html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>`
    i++;
}
answer.innerHTML = `${html}`;

function All() {
    let i =0;
    answer.innerHTML ="";
    html = "";
    while(i < tweets.length){
        html += `<div class="border border-secondary me-2 p-2">
        <div class="border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png">
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
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
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
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
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
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
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}