// 2. Create a page with two images and a button. When the button is clicked, swap the source attribute of the images.

var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");
var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    var src1 = img1.src;
    var src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
})