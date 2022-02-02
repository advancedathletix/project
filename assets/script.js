var foodSearch = document.querySelector("#foodSearch");
var searchBtn = document.querySelector(".searchBtn");
var foodHistory = [];



// api key
var APIKey = "98ae22214a5c4ef1a13990b2af5cf1eb";

function getCals() {
    var cals = foodSearch.value;
    foodHistory.push(cals)
    calcCalories(cals)
}


function calcCalories() {
    var calories = `https://platform.fatsecret.com/js?key=${APIKey}`;
    fetch(calories)
        .then(function (red) {
            return res.json();
        })
        .then(function (data) {
            oneCall()
        })

}

function oneCall(){
    var oneCallApi=`https://platform.fatsecret.com/js?key=${APIKey}`;
    fetch(oneCallApi)
    .then(function(data){
        console.log(data)
    })
}


searchBtn.addEventListener("click", getCals)

    
