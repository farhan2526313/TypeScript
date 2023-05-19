"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function str(hello) {
    console.log("My Number is :" + hello);
}
function add12(text, callback) {
    callback(text);
}
add12("15", str);
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }
// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }
// callingFunction("myText", myCallBack);
