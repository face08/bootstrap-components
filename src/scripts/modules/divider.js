export class Divider extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        this.outerHTML =
            '<li role="separator" class="divider"></li>';
    }

}
