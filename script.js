'use strict';

const shareButton = document.querySelector('.js-share');
const toggleTip = document.querySelector('.js-toggletip');

function openToggletip() {
    shareButton.setAttribute('aria-expanded', 'true');
    toggleTip.setAttribute('aria-hidden', 'false');
}

function closeToggletip() {
    shareButton.setAttribute('aria-expanded', 'false');
    toggleTip.setAttribute('aria-hidden', 'true');
}

function switchToggletip() {
    if (shareButton.getAttribute('aria-expanded') === 'false') {
        openToggletip();
    } else {
        closeToggletip();
    }
}

shareButton.addEventListener('click', switchToggletip);

window.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
        closeToggletip();
    }
});
