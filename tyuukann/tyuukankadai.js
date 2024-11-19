function searchtweetAll() {
    let url = `https://morimorihoge.github.io/teu2024f/tweets.json`;

    fetch(url).then(
        function (response) {
            return response.json();
        }
    ).then(
        (json) => {
            document.querySelector("#answer").innerHTML =
                `${json[0].name} ${json[0].message} ${json[0].tweetedAt} ${json[0].avatar}`;
        }
    );
}
