﻿var msg = "hello JavaScript";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from Java Script</p>";

console.log("msg is " + typeof (msg));
console.log("resultsDiv is" + typeof (resultsDiv));

var none;
console.log("none is" + typeof (none));

var aNumber = 10;
console.log("aNumber is" + typeof (aNumber));
 
var trueFalse = true;
console.log("trueFalse is" + typeof (trueFalse));

//msgs = "this shouldn't work";

if (!none == undefined) {
    console.log("none is undefined");
}


if (aNumber == "10") {
    console.log("10 is 10")
}

//function showMsg(msg) {
   // console.log("showMsg:" + msg);
//}
function showMsg(msg, more) {
    if (more) {
        console.log("showMsg+" + msg + more)
    } else {
        console.log("showMsg+" + msg);
    }
}

showMsg("some information");
showMsg("some information", "and even more");

var showIt = function (msg) {
    console.log(msg);
}

showMsg("Some message");

function showItThen(msg, callback) {
    showIt(msg);
    callback();
}

showItThen("showItThen called", function () {
    console.log("collback called");
});

var inGlobal = true;

function testMe() {
    console.log("testMe():" + inGlobal);
    var someMsg = "some Message";
    console.log("testMe():" + someMsg);
    showItThen("with Closure", function () {
        showIt("testMe With Closure():" + someMsg);
    });
}
//console.log("global:" + someMsg);
testMe();

     