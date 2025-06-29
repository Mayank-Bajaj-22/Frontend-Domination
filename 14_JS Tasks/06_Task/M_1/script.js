// 6. Create a tabbed interface where clicking on tabs displays different content sections without page reload.

var about = document.querySelector("#about");
var home = document.querySelector("#home");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");

hometext.style.display = "block";

home.addEventListener("click", function(){
    saaretexthatao();
    hometext.style.display = "block";
})

about.addEventListener("click", function(){
    saaretexthatao();
    abouttext.style.display = "block";
})

contact.addEventListener("click", function(){
    saaretexthatao();
    contacttext.style.display = "block";
})

function saaretexthatao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}