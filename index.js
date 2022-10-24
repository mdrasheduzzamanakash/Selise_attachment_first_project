var input = document.getElementById("inputField");
var display = document.getElementById("displayField");
var button = document.getElementById("buttonField");


button.addEventListener('click', clickHandler);


function clickHandler() {
    var inputValue = input.value;
    display.innerText = inputValue.trim();
}