function  smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);

        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
}

var aboutSelect = document.querySelector("#about-select");
aboutSelect.addEventListener('click', function(){
    smoothScroll("#about-section", 1000);
})

var skillsSelect = document.querySelector("#skills-select");
skillsSelect.addEventListener('click', function () {
    smoothScroll("#technical-skills-section", 1000);
})

var projectSelect = document.querySelector("#project-select");
projectSelect.addEventListener('click', function () {
    smoothScroll("#project-section", 1000);
})

var contactSelect = document.querySelector("#contact-select");
contactSelect.addEventListener('click', function () {
    smoothScroll("#contact-section", 1000);
})


const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('#menu-icon');
menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('show-links')
})

const menuIconTop = document.querySelector("#menu-icon-top");
menuIcon.addEventListener("click", function() {
  menuIconTop.classList.toggle("close-x-top");
});

const menuIconMiddle = document.querySelector("#menu-icon-middle");
menuIcon.addEventListener("click", function() {
  menuIconMiddle.classList.toggle("close-x-middle");
});

const menuIconBottom = document.querySelector("#menu-icon-bottom");
menuIcon.addEventListener("click", function() {
  menuIconBottom.classList.toggle("close-x-bottom");
});

/* SCROLLTRIGGER */

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".skill", {autoAlpha: 0, scale: 0}, {
    scrollTrigger: {
        trigger: ".skill",
        toggleActions: "play none none none",

    },
    duration: 1.2,
    autoAlpha: 1,
    scale: 1,
    ease: "power3.out"
})

gsap.fromTo(".footer-name", {y: 30, opacity: 0}, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: ".footer",
    }
})

gsap.fromTo(".gregg-secondary-img", {opacity: 0}, {
    opacity: 1,
    duration: 2,
ease: "power3.out",
    scrollTrigger: {
        trigger: ".gregg-secondary-img"
    }
})

const projectCardBoxesOdd = gsap.utils.toArray(".odd");
projectCardBoxesOdd.forEach((projectCardBox) => {
    gsap.fromTo(projectCardBox, {opacity: 0, x: -50}, {
    duration: 1,
    opacity: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: projectCardBox,

    }
    })
})

const projectCardBoxesEven = gsap.utils.toArray(".even");
projectCardBoxesEven.forEach((projectCardBox) => {
    gsap.fromTo(projectCardBox, {opacity: 0, x: 50}, {
    duration: 1,
    opacity: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: projectCardBox,

    }
    })
})