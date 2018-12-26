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
    smoothScroll("#technical-skills", 1000);
})

var projectSelect = document.querySelector("#project-select");
projectSelect.addEventListener('click', function () {
    smoothScroll("#project-section", 1000);
})

var contactSelect = document.querySelector("#contact-select");
contactSelect.addEventListener('click', function () {
    smoothScroll("#contact-section", 1000);
})
