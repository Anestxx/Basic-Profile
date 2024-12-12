document.addEventListener('DOMContentLoaded', function () {
    const greeting1 = document.getElementById('greeting1');
    const greeting2 = document.getElementById('greeting2');
    const greeting3 = document.getElementById('greeting3');
    const greeting4 = document.getElementById('greeting4');
    const greeting5 = document.getElementById('greeting5');
    const container = document.querySelector('.container');
    const socials = document.getElementById('socials');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    socials.style.opacity = 0;
    socials.classList.add('hidden');
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    fadeIn(greeting1, 1400, function () {
        fadeOut(greeting1, 1400, function () {
            fadeIn(greeting2, 1400, function () {
                fadeOut(greeting2, 1400, function () {
                    fadeIn(greeting3, 1400, function () {
                        fadeOut(greeting3, 1400, function () {
                            fadeIn(greeting4, 1400, function () {
                                container.style.backgroundColor = 'black';
                                fadeOut(greeting4, 1400, function () {
                                    fadeIn(greeting5, 1400, function () { 
                                        showButtons(); 
                                    });
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

    function showButtons() {
        yesBtn.style.display = 'inline-block';
        noBtn.style.display = 'inline-block';
    }

    yesBtn.addEventListener('click', function () {
        fadeOut(greeting5, 0);
        fadeOut(yesBtn, 0);
        fadeOut(noBtn, 0);

        socials.classList.remove('hidden');
        socials.style.display = 'block';
        fadeIn(socials, 1000);
    });

    noBtn.addEventListener('click', function () {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        fadeOut(socials, 1000);
    });

    // Function to move noBtn randomly on hover
    noBtn.addEventListener('mouseover', function () {
        const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
