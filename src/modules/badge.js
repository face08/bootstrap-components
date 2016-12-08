export class Badge extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<span class="badge">${content}</span>`;
    }

}
