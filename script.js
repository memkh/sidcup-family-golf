var cursor = document.querySelector("#cursor");
var cblur = document.querySelector("#cursor-blur");
var arrow = document.querySelector("#arrow");

document.addEventListener("mousemove", function(dets){ //dets = details
    cursor.style.left = dets.x - 25 + "px";
    cursor.style.top = dets.y -  25 + "px";
    cblur.style.left = dets.x - 200 + "px";
    cblur.style.top = dets.y - 200 + "px";
});

var h4 = document.querySelectorAll("#nav h4");
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.backgroundColor = "transparent";
        cursor.style.scale = 3;
        cursor.style.border = "0.1px solid #fff";
    });
    elem.addEventListener("mouseleave", function(){
        cursor.style.backgroundColor = "#95C11E";
        cursor.style.scale = 1;
        cursor.style.border = "none";
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    },
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger : {
        trigger: "#main",
        scroler: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});
gsap.from("#about-us img, .desc", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
});
gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    },
});
gsap.from(".img1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: ".img1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
});
gsap.from(".img2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: ".page3 p",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4
    }
});
gsap.from(".page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
});
