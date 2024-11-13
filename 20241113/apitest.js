function searchZipcode() {
    let zipcode = document.querySelector("#zipcode").value;
    let url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;
    fetch(url).then(
        function (response) {
            return response.json();
        }
    ).then(
        (json) => {
            document.querySelector("#answer").innerHTML =
                `${json.results[0].address1} ${json.results[0].address2} ${json.results[0].address3}`;
        }
    );
}
//fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060").then(
//    function(response) {
//        return response.json();
//     }
// ).then(
//     function(json){
//         document.querySelector("#answer").innerHTML =
//             `${json.results[0].address1} ${json.results[0].address2} ${json.results[0].address3}`;
//     }
// );