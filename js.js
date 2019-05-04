let calc = Math.floor((Math.random() * 10) + 1);
console.log(calc);

var targetNumber = calc;
var start = 0;
var startAgain = 0;

$("#totals").text(start);
$("#number").text(start);
$("#numbers").text(startAgain);
$(".random").text(targetNumber);
var counter = 0;
var numberOptions = [10, 5, 3, 7];
for (var i = 0; i < numberOptions.length; i++) {
    var calcs = $("")
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}
var increment = numberOptions[Math.round(Math.random())];
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("you have " + counter + " times");
    if(counter === targetNumber) {
        alert("win");
    }
    else if (counter <= targetNumber) {
        alert("lose")
    }
});