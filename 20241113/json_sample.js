fetch("https://morimorihoge.github.io/teu2024f/tweets.json").then(
    function(response){
        return response.json();
    }
).then(
    function(json){
        document.querySelector("#answer").innerHTML = JSON[0].name;
    }
);