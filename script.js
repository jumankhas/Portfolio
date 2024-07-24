var tl = gsap.timeline()
var tl2 = gsap.timeline()


function navAnimation() {
    tl.from(".nav-logo, .nav-manu a", {
        y: -40,
        delay: 1,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: Power4
    })
}

function navMenuAnimation(){
    
var menu= document.querySelector(".nav-menu-under img") 
var cross = document.querySelector(".nav-menu-under-links img") 

tl2.to(".nav-menu-under-links",{
    right: 0,
    duration:0.8,
})

tl2.from(".nav-menu-under-links a",{
    x:150,
    opacity:0,
    stagger:0.2,
    duration: 0.6,
})

tl2.from(".nav-menu-under-links img",{
    opacity:0,
})

tl2.pause()

menu.addEventListener("click", function(){
    tl2.play()
})

cross.addEventListener("click", function(){
    tl2.reverse()
})


}

function heroTextIconsAnimation() {
    var clutter = ""
    document.querySelector(".head-3").textContent
        .split("")

        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;<span>`
            clutter += `<span>${e}</span>`
        })

    document.querySelector(".head-3").innerHTML = clutter


    var clutter2 = ""
    document.querySelector(".head-1").textContent
        .split("")

        .forEach(function (e2) {
            if (e2 === " ") clutter2 += `<span>&nbsp;<span>`
            clutter2 += `<span>${e2}</span>`
        })

    document.querySelector(".head-1").innerHTML = clutter2


    var clutter2 = ""
    document.querySelector(".other-head-3").textContent
        .split("")

        .forEach(function (e2) {
            // if (e2 === " ") clutter2 += `<span>&nbsp;<span>`
            clutter2 += `<span>${e2}</span>`
        })

    document.querySelector(".other-head-3").innerHTML = clutter2

    var clutter3 = ""
    document.querySelector(".p").textContent
        .split("")
        .forEach(function (el) {
            if (el === " ") clutter3 += `<span>&nbsp;</span>`
            clutter3 += `<span>${el}</span>`
        })

    document.querySelector(".p").innerHTML = clutter3



    tl.from(".head-3 span, .head-1 span, .other-head-3 span, .p span, .icons a", {
        y: 20,
        // duration:.1,
        stagger: {
            amount: 0.8,
        },
        opacity: 0
    })


    tl.from(".hero-right-side-img img", {
        y: 100,
        opacity: 0,
        duration: 1,
    }, "-=1")



}

function AboutAnimation() {
    var aboutclutter = ""

    document.querySelector(".about-h1").textContent
        .split("")
        .forEach(function (ac) {
            if (ac === "") aboutclutter += `<span>&nbsp;<span>`
            aboutclutter += `<span>${ac}</span>`
        })

    document.querySelector(".about-h1").innerHTML = aboutclutter


    var clutterh3 = ""

    document.querySelector(".about-h3").textContent
        .split("")
        .forEach(function (h3) {
            if (h3 === " ") clutterh3 += `<span>&nbsp;<span>`
            clutterh3 += `<span>${h3}</span>`
        })

    document.querySelector(".about-h3").innerHTML = clutterh3



    var clutterp = "";
    document.querySelector(".about-p").textContent
        .split("")
        .forEach(function (p) {
            if (p === " ") clutterp += `<span>&nbsp</span>`
            clutterp += `<span>${p}</span>`
        })

    document.querySelector(".about-p").innerHTML = clutterp


    gsap.from(".about-h1 span, .about-h3 span, .about-p span", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: {
            amount: 1.2
        },
        scrollTrigger: {
            trigger: ".About-me",
            start: "top 50%",
            ease: Power4,

        }
    })

    gsap.from(".about-right-side-img img", {
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".About-me",
            start: "top 70%",
            ease: Power4,

        }
    })

}

function skillsAnimation(){
    gsap.to(".skills-wrapper-black , .skills-body h1", {
        opacity: 0,
        filter: "blur(10px)",
        duration: 3,
        stagger:{
            each:-99,
            from: "random"
        },
        scrollTrigger: {
            trigger: ".Skills-section",
            start: "top 10%",
            end: "bottom 0%",
            scrub: true,
            pin: true,
            ease: Power4,
        }

    })

}

function PortfolioAnimation(){
    var clutterCenter = ""

document.querySelector(".center").textContent
    .split("")

    .forEach(function (clc) {
        if (clutterCenter === " ") clutterCenter += `<span>&nbsp;</span>`
        clutterCenter += `<span>${clc}</span>`
    })

document.querySelector(".center").innerHTML = clutterCenter


    gsap.from(".center span", {
        y: 50,
        opacity: 0,
        stagger:{
            amount:.4
        },
        scrollTrigger: {
            trigger: ".Portfolio-body",
            start: "top 85%",
            end: "bottom 0%",
        }

    })

    gsap.from(".img-black-1", {
        y: 100,
        opacity: 0,
        duration:1,
        stagger:0.3,
        scrollTrigger: {
            trigger: ".Portfolio-section",
            start: "top 50%",
            end: "bottom 0%",
            // markers: true,
            // scrub: true,
            // pin: true,
            ease: Power4,
        }

    })
}

function footerAnimation(){
    var fhclutter = ""
document.querySelector(".footer h1").textContent
.split("")
.forEach(function(fhc){
    if(fhclutter === " ") fhclutter += `<span>&nbsp;</span>`
    fhclutter += `<span>${fhc}</span>`
})

document.querySelector(".footer h1").innerHTML = fhclutter


var ftclutter = ""
document.querySelector(".footer h3").textContent
.split("")
.forEach(function(ftc){
    if(ftclutter === " ") ftclutter += `<span>&nbsp;</span>`
    ftclutter += `<span>${ftc}</span>`
})

document.querySelector(".footer h3").innerHTML = ftclutter

var fnclutter = ""
document.querySelector(".number-t").textContent
.split("")
.forEach(function(fnc){
    if(fnclutter === " ") fnclutter += `<span>&nbsp;</span>`
    fnclutter += `<span>${fnc}</span>`
})

document.querySelector(".number-t").innerHTML = fnclutter

var faclutter = ""
document.querySelector(".gmail").textContent
.split("")
.forEach(function(fac){
    if(faclutter === " ") faclutter += `<span>&nbsp;</span>`
    faclutter += `<span>${fac}</span>`
})

document.querySelector(".gmail").innerHTML = faclutter

gsap.from(".footer h1 span, .footer h3 span, .gmail span",{
    y: 50,
    stagger: 0.03,
    opacity:0,
    scrollTrigger:{
        trigger: ".footer",
        // markers: true,
        start: "top 80%",
        ease: Power4
    }
})


}


navAnimation()
navMenuAnimation()
heroTextIconsAnimation()
AboutAnimation()
skillsAnimation()
PortfolioAnimation()
footerAnimation()
























