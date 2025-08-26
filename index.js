
const body = document.getElementsByTagName('body')[0];
window.addEventListener('scroll', () => {
    // User scrolled down from the top
    if (!body.classList.contains('scrolled')) {
        body.classList.add('scrolled');
    }

    // User scrolled up to the top
    if (body.classList.contains('scrolled') && window.scrollY === 0) {
        body.classList.remove('scrolled');
    }
});