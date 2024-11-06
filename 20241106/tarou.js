let answer = document.querySelector('#answer');

// while
//let i = 0;
//let html = '';
//while(i < tweets.length) {
//    html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//    i++;
//}

//for
let i = 0;
let html = '';
for(let i=0;i < tweets.length;i++) {
    html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
}


answer.innerHTML = `<ul>${html}</ul>`;