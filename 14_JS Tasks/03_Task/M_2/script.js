// 3. Create a form with input fields and a submit button. Use JavaScript to validate the form and display an error message if the input is invalid.

// jab bhi form ke saath deall karo yaad rakho ki submit hone par forms page ko reload kar dete hai , aur tumhe khayyal rakhna hai ke pages reload naa ho, naitho agar page reload hua to js nahi chalegi, kyu js chal paye se pahle hi page relkoad ho chuka hoga

// form ko submit karne par reload se rokne ke liye

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("#error");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     inps.forEach(function(inp){
//         if(inp.value.trim() === ''){
//             h4.textContent = "Error, Some Fields are blank.";
//             h4.style.color = "red";
//         }
//         else{
//             h4.textContent = "";
//             h4.style.color = "blank";
//         }
//     })
// })

form.addEventListener("submit", function(event){
    event.preventDefault();
    for(var i=0; i<inps.length; i++){
        if(inps[i].value.trim() == ''){
            h4.textContent = "Error, Some Fields are blank";
            h4.style.color = "red";
            break;
        }
        h4.textContent = "";
        h4.style.color = "black";
    }
})
