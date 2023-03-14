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

export function propertiesOf<TObj>(_obj: (TObj | undefined) = undefined) {
    return function result<T extends keyof TObj>(name: T) {
        return name;
    }
}