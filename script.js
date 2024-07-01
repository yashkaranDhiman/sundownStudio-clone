let imageDiv = document.getElementById("imgs");
let alldivs = document.querySelectorAll(".divs");
let page4Main = document.getElementById("page4-main");
let scrollCursor = document.getElementById("scroll-cursor");
let marquee = document.querySelector(".swiper")
let page5 = document.getElementById("page5");

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

alldivs.forEach((e)=>{
    // console.log(e.querySelector('h2').getAttribute("data-image"));
    e.addEventListener("mouseenter",(m)=>{
        console.log(m.target.querySelector('h2').getAttribute("data-image"));
        imageDiv.style.background = `url(${m.target.querySelector('h2').getAttribute("data-image")})`
        imageDiv.style.zIndex = 9999999;
    })
})

page4Main.addEventListener("mouseleave",()=>{
    imageDiv.style.zIndex = 1;
    imageDiv.style.background = `url()`
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

page5.addEventListener("mousemove",(e)=>{

    scrollCursor.style.top = e.clientY + "px"
    scrollCursor.style.left = e.clientX-50 + "px"
})

marquee.addEventListener("mouseenter",(e)=>{
    scrollCursor.style.scale = 1
})
marquee.addEventListener("mouseleave",(e)=>{
    scrollCursor.style.scale = 0;
    console.log("left");
})
scrollCursor.addEventListener("mouseover",(e)=>{
    marquee.style.cursor = "none";
    scrollCursor.style.cursor = "none";
})
