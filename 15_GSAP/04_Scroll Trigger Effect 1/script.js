gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        star:"top 0%",
        end:"top -100%",
        scrub: 2,
        pin:true,
    }
})