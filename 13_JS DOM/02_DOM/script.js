// var h1 = document.querySelector("h1");
// h1.classList.add('makeitred');
// h1.classList.remove('makeitred');

// var h1 = document.createElement('h1');
// h1.textContent = "hey";
// h1.classList.add("makeitred");

// document.querySelector("body").appendChild(h1);

// var h2 = document.createElement('h2');
// h2.textContent = "hey"
// h2.classList.add("makeitred");

// document.querySelector("body").appendChild(h2);

// var img = document.createElement("img");
// img.src = "https://plus.unsplash.com/premium_photo-1677346862368-3f140e02eb86?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// document.querySelector("body").appendChild(img);
// document.querySelector("body").removeChild(img);

var btn = document.querySelector("button"); // click , dblclick , mouseover
btn.addEventListener('mouseover', function(){
    btn.textContent = 'starting...';
    btn.style.backgroundColor = "red";
})

var btn = document.querySelector("button"); // click , dblclick , mouseover
btn.addEventListener('mouseleave', function(){
    btn.textContent = 'Download';
    btn.style.backgroundColor = "#fff";
})

document.querySelector("body")
.addEventListener("mousemove", function(dets){
    console.log(dets);
})
