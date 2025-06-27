// 3. Create a form with input fields and a submit button. Use JavaScript to validate the form and display an error message if the input is invalid.

var form = document.querySelector("form");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var h4 = document.querySelector("#error");

form.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(input1.value, input2.value);
    if(input1.value === '' || input2.value === ''){
        // console.log("Blank");
        h4.textContent = "Error, Some Fileds are blank";
        h4.style.color = "red";
    }
    else{
        h4.textContent = "";
        h4.style.color = "black";
    }
})