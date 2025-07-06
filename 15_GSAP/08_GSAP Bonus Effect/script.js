gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// for only 1 element
// var h1Text = document.querySelector("#firsth1").textContent
// var splitedText = h1Text.split("")

// var clutter = ""
// splitedText.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })
// document.querySelector("#firsth1").innerHTML = clutter

// gsap.to("#page2 h1 span",{
//     color: "#E3E3C4",
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 10%",
//         scrub:1,
//     }
// })

var allH1 = document.querySelectorAll("#page2 h1")
allH1.forEach(function(elem){
    var clutter = ""
    var h1Text = elem.textContent
    var splitedText = h1Text.split("")
    splitedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
})

gsap.to("#page2 h1 span",{
    color: "#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:2,
    }
})