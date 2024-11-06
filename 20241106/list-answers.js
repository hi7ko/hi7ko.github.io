function doCheckAnswers() {
    let input = document.querySelector('#input_string').value;
    let answer = document.querySelector('#answer');
    let answers = Array.from(document.querySelectorAll(".answer-list li"));

    // inputの文字列がanswers配列の中のElementどれかのinnerHTMLと一致すれば正解

    // // whileで書いた場合
    // // answers[0] ... answers[3]までの繰り返し
    // let i = 0;
    // while(i < answers.length){
    //   if(answers[i].innerHTML == input){
    //     answer.innerHTML = '正解';
    //     break;
    //   }else{
    //     answer.innerHTML = '不正解';
    //   }
    //   i++;
    // }

    // // forで書いた場合
    // // answers[0] ... answers[3]までの繰り返し
    // for(let i = 0; i < answers.length; i++) {
    //   if(answers[i].innerHTML == input){
    //     answer.innerHTML = '正解';
    //     break;
    //   }else{
    //     answer.innerHTML = '不正解';
    //   }
    // }

    // Array.forEachした場合
    let isCorrect = false; // 正解があったかどうかのフラグ変数
    answers.forEach(function (item) {
        // answersから1つ取り出した要素がitemとしてアクセスできる
        if (item.innerHTML === input) {
            isCorrect = true;
        }
    });
    if (isCorrect) {
        answer.innerHTML = '正解';
    } else {
        answer.innerHTML = '不正解';
    }
}









