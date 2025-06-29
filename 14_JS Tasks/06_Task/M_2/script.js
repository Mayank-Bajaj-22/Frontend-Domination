// 6. Create a tabbed interface where clicking on tabs displays different content sections without page reload.

var divs = document.querySelectorAll('.tabs');
var texts = document.querySelectorAll('h3');

texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach(function (div, index){
    div.addEventListener("click", function(){
        hideAllText();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    });
});

function hideAllText(){
    texts.forEach(function (text){
        text.style.display = "none";
    });
}