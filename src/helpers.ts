export function isElementInViewport (el: HTMLElement | Element) {
    const rect = el.getBoundingClientRect();
    const offset = el.clientHeight / 3;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}