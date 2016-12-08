export class Jumbotron extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="jumbotron">
        ${content}
      </div>`;
    }
}
