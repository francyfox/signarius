import {parallaxScrolling} from "./parallax/parralax-scrolling";

export function hookDomLoaded() {
    console.log('fd')
    document.addEventListener("DOMContentLoaded", () => {
        parallaxScrolling('section');
    });
}

hookDomLoaded()