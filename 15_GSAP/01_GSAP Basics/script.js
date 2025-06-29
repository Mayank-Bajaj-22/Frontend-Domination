// GSAP - Green Shock Animation Platform {JS Library}

var tl = gsap.timeline()

tl.to("#box1", {
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    scale:0.5,
    // backgroundColor:"blue",
})

// gsap.from("#box1", {
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     scale:0.5,
//     backgroundColor:"blue",
// })

tl.to("#box2", {
    x:1000,
    duration:2,
    rotate:360,
    scale:0.5,
})

tl.to("#box3", {
    x:1000,
    duration:2,
    rotate:360,
    scale:0.5,
})
