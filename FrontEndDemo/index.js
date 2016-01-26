var msg = "hello JavaScript";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from Java Script</p>";



var result = {
    name: "jQuery",
    language: "JavaScript",
    score: 4.5,
    showLog: function () {
    },
    owner: {
        login: "agnieszkakurek",
        id:123456
    }
};

result.phoneNumber = "123-456-7890";

console.log(result.phoneNumber);

var results = [{
    name: "jQuery",
    language: "JavaScript",
    score: 4.5,
    showLog: function () {

    },
    owner: {
        login: "agnieszkakurek",
        id: 123456
    }, {
    name: "jQuery UI",
    language: "JavaScript",
    score: 3.5,
    showLog: function () {

    },
    owner: {
        login: "agnieszkakurek",
        id: 123456
    }
},];

results.push(result);
results.push({
    name:"dummy projeect"
})

