var tm = gsap.timeline()
tm
.from(" #navbar ", {
    y : "-50%" ,
    opacity : 0,
    duration : 1.1,
    delay : .5,
})
.from("#page1 h1 span",{
    y  : "100%",
    opacity : 0,
    duration : 1,
    stagger : .2,
})
.from(".container .leftbox span, .leftbox button", {
    y : 50,
    opacity : 0,
    // duration : 1,
    stagger : .1,
})
.from("#page1>svg rect",{
    opacity : 0,
    stagger : .2,
    duration : 1,
}, "a")
.from(".container video",{
    y  : "50%",
    opacity : 0,
    duration : 1.5,
}, "a")
.from(".container .circle",{
    scale : 0,
    opacity : 0,
    duration : 1,
}, "a")

gsap.from("#page2 .header h1 , .header p ",{
    y  : "100%",
    opacity : 0,
    // duration : 1,
    stagger : .3,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page2",
        // markers : true,
        start : "top 55%"
    }
})
gsap.from("#page2 #b1, #b2",{
    y  : "20%",
    duration : 1,
    opacity : 0,
    stagger : .2,
    scrollTrigger : {
        scroller : "body",
        trigger : ".row1",
        // markers : true,
        start : "top 63% "
    }
})
gsap.from("#page2 #b3, #b4",{
    y  : "20%",
    duration : 1,
    opacity : 0,
    stagger : .2,
    scrollTrigger : {
        scroller : "body",
        trigger : "#b4",
        // markers : true,
        start : "0% 80%"
    }
})
gsap.from("#page2 #b5, #b6",{
    y  : "20%",
    duration : 1,
    opacity : 0,
    stagger : .2,
    scrollTrigger : {
        scroller : "body",
        trigger : "#b6",
        // markers : true,
        start : "-50% 50%"
    }
})
gsap.from("#page2 button",{
    y  : "100%",
    opacity : 0,
    duration: .5,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page2 button",
        // markers : true,
        start : "top 80%"
    }
})
gsap.from("#page3 svg rect",{
    opacity : 0,
    stagger : .2 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page2 button",
        // markers : true,
        start : "top 50%"
    }
})

gsap.from("#page3 h1, #page3 .rect",{
    y  : "30%",
    duration : 1,
    opacity : 0,
    stagger : .2 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page3",
        // markers : true,
        start : "10% 30%"
    }
})
gsap.from("#page3 .navigation",{
    y  : "30%",
    duration : 1,
    opacity : 0,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page3",
        // markers : true,
        start : "55% 40%"
    }
})
gsap.from(".header3 h1, .header3 p, .header3 button ",{
    y  : "100%",
    opacity : 0 ,
    stagger : .2 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page4",
        // markers : true,
        start : "top 40%"
    }
})

gsap.from("#page4 svg rect",{
    opacity : 0 ,
    stagger : .2 ,
    delay : 1,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page4",
        // markers : true,
        start : "top 40%"
    }
})
gsap.from(".lbox1 video",{
    y : 200 ,
    duration : 1,
    opacity : 0 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page4",
        // markers : true,
        start : "20% 50%"
    }
})
gsap.from(" .lbox1 h2, .lbox1 p",{
    y : "100%" ,
    // duration : 1,
    opacity : 0 ,
    stagger : .2 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page4",
        // markers : true,
        start : "20% 50%"
    }
})
gsap.from(".lbox2 video",{
    y : 200 ,
    duration : 1,
    opacity : 0 ,
        scrollTrigger : {
        scroller : "body",
        trigger : "#page4",
        // markers : true,
        start : "45% 50%"
    }
})
gsap.from(" .lbox2 h2, .lbox2 p",{
    y : "100%" ,
    // duration : 1,
    opacity : 0 ,
    stagger : .2 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page4",
        // markers : true,
        start : "45% 50%"
    }
})
gsap.from(".lbox3 video",{
    y : 200 ,
    duration : 1,
    opacity : 0 ,
    scrollTrigger : {
        scroller : "body",
        trigger : ".lbox3",
        // markers : true,
        start : "25% 55%"
    }
})
gsap.from(" .lbox3 h2, .lbox3 p",{
    y : "100%" ,
    // duration : 1,
    opacity : 0 ,
    stagger : .2 ,
    scrollTrigger : {
        scroller : "body",
        trigger : ".lbox3",
        // markers : true,
        start : "25% 55%"
    }
})

gsap.from(".rbox1 h1, .rbox1 h5, .rbox1 button",{
    y : "30%" ,
    opacity : 0 ,
    stagger : .2 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#footer",
        // markers : true,
        start : "20% 60%"
    }
})
gsap.from(".lbox1 img",{
    y : 100 ,
    duration: .8,
    opacity : 0 ,
    scrollTrigger : {
        scroller : "body",
        trigger : "#footer",
        // markers : true,
        start : "20% 60%"
    }
})

var swiper = new Swiper(".mySwiper", {
    loop : true ,
    slidesPerView: "auto",
    autoCentered:true,
    centeredSlides: true,
    // mousewheel : true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });