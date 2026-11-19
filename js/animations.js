// Boot automático curto; respeita preferência por movimento reduzido.
const bootScreen = document.getElementById('boot-screen');
const desktop = document.getElementById('desktop');
const progressBar = document.querySelector('.progress-bar');
let finished = false;
let progress = 0;
let intervalId;

function finishBoot() {
    if (finished) return;
    finished = true;
    clearInterval(intervalId);
    desktop.hidden = false;
    progressBar.style.width = '100%';
    bootScreen.classList.add('is-leaving');
    setTimeout(() => {
        bootScreen.hidden = true;
        document.querySelector('[data-open="projects"]').focus({preventScroll: true});
    }, 350);
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finishBoot();
} else {
    intervalId = setInterval(() => {
        progress = Math.min(100, progress + 5);
        progressBar.style.width = progress + '%';
        if (progress >= 100) finishBoot();
    }, 80);
}
