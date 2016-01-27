$(document).ready(function () {


    //var msg = "hello JavaScript";
    //console.log(msg);

    //var resultsDiv = document.getElementById("results");
    //resultsDiv.innerHTML = "<p>This is from Java Script</p>";

    var resultList = $("#resultList");
    resultList.text("This is from jQuery");

    //var toggleButton = $("#toggleButton");
    //toggleButton.on("click", function () {
        //resultList.toggle(500);

        //if (toggleButton.text() == "Hide") toggleButton.text("Show");
       // else toggleButton.text("Hide");

    //});

    //var listItems = $("header nav li");
    //listItems.css("font-weight", "bold");
    //listItems.filter(":first").css("font-size", "18px");
    


    //var result = {
    //name: "jQuery",
    //language: "JavaScript",
    //score: 4.5,
    //showLog: function () {
    // },
    //owner: {
    // login: "agnieszkakurek",
    // id:123456
    //}
    //};

    //result.phoneNumber = "123-456-7890";

    //console.log(result.phoneNumber);

    var results = [
     {
     name: "jQuery",
     language: "JavaScript",
    score: 4.5,
    showLog: function () {

     },
    owner: {
     login: "agnieszkakurek",
     id: 123456
     }
    },
    {
     name: "jQuery UI",
     language: "JavaScript",
     score: 3.5,
     showLog: function () {

    },
    owner: {
     login: "agnieszkakurek",
     id: 123456
     }
    },
    ];

    resultList.empty();
    $.each(results, function (i, item) {
        var newResult = ("<div class = 'result'>" +
            "<div class = 'title'>" + item.name + "</div>" +
            "<div>Lanugage:" + item.language + "</div>" +
            "<div>Owner:" + item.owner.login + "</div>" +
            "</div>");

        newResult.hover(function () {

            $(this).css("background-color", "lightgray");
        }, function () {

            $(this).css("background-color", "transparent");
        }
        );

        resultList.append(newResult);
            
    }
    );

   //for (var x = 0; x < results.length; x++) {
     //var result = results[x];
     //if (result.score < 4) continue-9+60;
     //console.log(result.name);
    //}
    //console.log(results.length);
    //console.log(results[0].name);

    //results.push(result);
    //results.push({
    //name:"dummy projeect"
    //})

});