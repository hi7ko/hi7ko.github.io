fetch("https://morimorihoge.github.io/teu2024f/tweets.json").then(
    function(response){
        return response.json();
    }
).then(
    function(json) {
        json.forEach(
            (tweet) => {
                document.querySelector("#answer").innerHTML += `${tweet.name}<br>`;

                document.querySelector("#answer").innerHTML = json[0].name;
            }
        )
    }
);