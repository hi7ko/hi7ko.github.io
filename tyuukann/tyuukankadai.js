function searchtweetAll() {
    let url = `https://morimorihoge.github.io/teu2024f/tweets.json`;

    fetch(url).then(
        function (response) {
            return response.json();
        }
    ).then(
        (json) => {
            document.querySelector("#answer").innerHTML =
                `${json.tweets[0].name} ${json.tweets[0].message} ${json.tweets[0].tweetedAt} ${json.tweets[0].avatar}`;
        }
    );
}
