function logMessage() {
    console.log("LogMessageが呼び出されました。");
}function logMessage2(message){
    console.log(`logMessage2: ${message}`);
}
// テンプレート変数を使わない場合
console.log("logMessage2: " + message);

// テンプレート変数を使った場合
console.log(`logMessage2: ${message}`);