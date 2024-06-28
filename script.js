
function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

function firstFageAnimation(){
    var tl = gsap.timeline()
    tl.from("#main",{
        opacity:0,
        duration:0.3,
        delay:0.2
       
    })
    tl.from("#main",{
        transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius:"150px",
        duration:2,
        ease:"expo.out"
    
    })
    
    tl.from("navbar",{
        opacity:0,
        delay:-0.2,
        
    })
    tl.from("#page1 h1, #page1 p, #page1 div, #navbar #about-text",{
        opacity:0,
        duration:0.5,
        stagger:0.2,
        transform:" translateY(80%)"
    })
        tl.from("#page5, #page5-part1 h1",{
    opacity:0,
    duration:0.9,
    stagger:0.9,
    transform:" translateX(80%)",
    start:"#page5",
    
    markers: true
    
    
})
    
}

firstFageAnimation()


var slide1h1 = document.querySelectorAll('#page2 .slide1h1 h1');
slide1h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(-96%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page2',
      scroller: '#main',
       /*markers: true,*/
      scrub: 3
    }
  })
})
var slide2h1 = document.querySelectorAll('#page2 .slide2h1 h1');
slide2h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(0%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page2',
      scroller: '#main',
      // markers: true,
      scrub: 3
    }
  })
})











