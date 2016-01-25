var msg = "hello JavaScript";
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

if (none == undefined) {
    console.log("none is undefined");
}

if (aNumber == "10") {
    console.log("10 is 10")
}

     