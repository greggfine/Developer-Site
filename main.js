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

// SCROLL MAGIC

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.skills-divider',
    duration: 0,
    triggerHook: 0.87,
    reverse: true,
})
.setClassToggle('.skills-divider', 'show')
.addTo(controller)

// const projectCardScene = new ScrollMagic.Scene({
//     triggerElement: '.project-card-box-1',
//     triggerHook: 0.8,
//     // reverse: false
// })
// .setClassToggle('.project-card-box-1', 'move-in')
// .addTo(controller)

// const projectCardScene3 = new ScrollMagic.Scene({
//     triggerElement: '.project-card-box-3',
//     triggerHook: 0.8,
//     // reverse: false
// })
// .setClassToggle('.project-card-box-3', 'move-in')
// .addTo(controller)

// const projectCardScene5 = new ScrollMagic.Scene({
//     triggerElement: '.project-card-box-5',
//     triggerHook: 0.8,
//     // reverse: false
// })
// .setClassToggle('.project-card-box-5', 'move-in')
// .addTo(controller)

const footerNameScene = new ScrollMagic.Scene({
    triggerElement: '.footer-name',
    triggerHook: 1,
})
.setClassToggle('.footer-name', 'footer-name-reveal')
.addTo(controller)

const mailContainerScene = new ScrollMagic.Scene({
    triggerElement: '.mail-container',
    triggerHook: 1,
})
    .setClassToggle('.mail-container', 'mail-container-reveal')
    .addTo(controller)