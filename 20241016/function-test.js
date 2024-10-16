// コンソールにメッセージを出力する関数を宣言する
function logMessage(){
    console.log("logMessage()が呼び出されました");
}

// 引数に渡した任意のメッセージを表示する関数
function logMessage2(message){
    console.log(`logMessage2: ${message}`);
}

// 引数を三つ持ち、それぞれを出力する関数
function logMessage3(message1, message2, message3){
    console.log(`logMessage3: ${message1}, ${message2}, ${message3}`);
}

// 引数を二つ持ち、二つ目の引数にデフォルト値を持つ関数
function logMessage4(message1, message2 = "default"){
    console.log(`logMessage4: ${message1}, ${message2}`);
}

// 2021 * 1010を計算し、その結果を戻り値として返す関数
function calc1(){
    return 2021 * 1010;
}

// 引数を2つ持ち、その二つの引数のかけ算の結果を返す関数を書く
function calc2(num1, num2){
    return num1 * num2;
}

// 引数を2つ持ち、その二つの引数をかけ算の結果の1の位の値を返す関数を書く
function calc3(num1, num2){
    return (num1 * num2) % 10;
}

// 引数を2つ持ち、その二つの引数をかけ算の結果の10の位の値を返す関数を書く
function calc4(num1, num2){
    return Math.trunc((num1 * num2) % 100 / 10);
}
