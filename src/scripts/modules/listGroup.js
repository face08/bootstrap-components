export class ListGroup extends HTMLElement {
    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<ul class="list-group">
         ${content}
       </ul>`;
    }
}

export class ListGroupItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<li class="list-group-item">${content}</li>`;
    }
}
