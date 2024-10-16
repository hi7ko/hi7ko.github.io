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