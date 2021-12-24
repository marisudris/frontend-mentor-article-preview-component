'use strict';

const shareButton = document.querySelector('.js-share');
const toggleTip = document.querySelector('.js-toggletip');

function openToggletip() {
    shareButton.setAttribute('aria-expanded', 'true');
    shareButton.classList.add('share--active');
    toggleTip.setAttribute('aria-hidden', 'false');
}

function closeToggletip() {
    shareButton.setAttribute('aria-expanded', 'false');
    shareButton.classList.remove('share--active');
    toggleTip.setAttribute('aria-hidden', 'true');
}

function switchToggletip(evt) {
    evt.stopPropagation();
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

window.addEventListener('click', (evt) => {
    if (
        shareButton.getAttribute('aria-expanded') === 'true' &&
        !evt.target.closest('.toggletip')
    ) {
        closeToggletip();
    }
});
