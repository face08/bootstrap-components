export class Thumbnail extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var href = this.getAttribute('href') || '#';
        var src = this.getAttribute('src') || '';
        var alt = this.getAttribute('alt') || '';

        this.outerHTML =
            `<a href="${href}" class="thumbnail">
                 <img src="${src}" alt="${alt}">
             </a>`;
    }
}
