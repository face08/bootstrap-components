export class Container extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="container">
                ${content}
            </div>`;
    }

}