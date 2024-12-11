document.addEventListener('DOMContentLoaded', function () {
    const greeting1 = document.getElementById('greeting1');
    const greeting2 = document.getElementById('greeting2');
    const greeting3 = document.getElementById('greeting3');
    const greeting4 = document.getElementById('greeting4');
    const container = document.querySelector('.container');
    const socials = document.getElementById('socials');

    socials.style.opacity = 0;
    socials.classList.add('hidden');

    fadeIn(greeting1, 1400, function () {
        fadeOut(greeting1, 1400, function () {
            fadeIn(greeting2, 1400, function () {
                fadeOut(greeting2, 1400, function () {
                    fadeIn(greeting3, 1400, function () {
                        fadeOut(greeting3, 1400, function () {
                            fadeIn(greeting4, 1400, function () {
                                container.style.backgroundColor = 'black'; // Change background to pink after greeting2 fades in
                                fadeOut(greeting4, 1400, function () {
                                    showSocials();
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    function fadeIn(element, duration, callback) {
        element.style.display = 'block';
        element.style.opacity = 0;
        let startTime = null;

        function fade() {
            if (startTime === null) {
                startTime = performance.now();
            }

            const progress = (performance.now() - startTime) / duration;
            element.style.opacity = Math.min(progress, 1);

            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                if (callback) callback();
            }
        }

        requestAnimationFrame(fade);
    }

    function fadeOut(element, duration, callback) {
        let startTime = null;

        function fade() {
            if (startTime === null) {
                startTime = performance.now();
            }

            const progress = (performance.now() - startTime) / duration;
            element.style.opacity = 1 - Math.min(progress, 1);

            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                element.style.display = 'none';
                if (callback) callback();
            }
        }

        requestAnimationFrame(fade);
    }

    function showSocials() {
        fadeIn(socials, 1000);
        socials.classList.remove('hidden');
    }
});
