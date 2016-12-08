export class BreadCrumbs extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<ol class="breadcrumb">
         ${content}
       </ol>`;
    }
}

export class BreadCrumb extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let content = this.innerHTML;

        this.outerHTML =
            `<li><a href="${href}">${content}</li>`;
    }
}
