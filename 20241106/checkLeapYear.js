function checkYear(){
    let year = Number(document.querySelector("#year").value);
    let answer = document.querySelector("#answer");

    // // 解法1
    // if(year % 4 != 0){
    //   // 4で割り切れないのは平年
    //   answer.innerHTML = '平年';
    // }else if(year % 100 != 0){
    //   answer.innerHTML = '閏年';
    // }else if(year % 400 != 0){
    //   answer.innerHTML = '平年';
    // }else{
    //   answer.innerHTML = '閏年';
    // }

    // 解法2：if文の数を少なくしてみる
    if((year % 400 == 0) ||
        (year % 4 == 0 && year % 100 != 0)){
        answer.innerHTML = '閏年';
    }else{
        answer.innerHTML = '平年';
    }
}









