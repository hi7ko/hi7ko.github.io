function doFizzBuzz(){
    let answer = document.querySelector("#answer");

    // 解1：単純にこれまで通り実装する
    // let i = 1;
    // while (i <= 100) {
    //   if((i % 3 == 0) && (i % 5 == 0)){
    //     answer.innerHTML += `FizzBuzz<br>`;
    //   }else if(i % 3 == 0){
    //     answer.innerHTML += `Fizz<br>`;
    //   }else if(i % 5 == 0){
    //     answer.innerHTML += `Buzz<br />`;
    //   }else {
    //     answer.innerHTML += `${i}<br>`;
    //   }
    //   i++;
    // }

    // 解2：FizzBuzz判定を関数化して処理を分ける
    let i = 1;
    while (i <= 100) {
        answer.innerHTML += checkFizzBuzz(i);
        i++;
    }
}

function checkFizzBuzz(num) {
    if (num % 15 === 0) {
        return 'FizzBuzz<br>';
    } else if (num % 3 === 0) {
        return 'Fizz<br>';
    } else if (num % 5 === 0) {
        return 'Buzz<br>';
    } else {
        return num + '<br>';
    }
}