export class LinkListGroup extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="list-group">
         ${content}
       </div>`;
    }
}

export class LinkListGroupItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let active = this.getAttribute('active') || 'false';
        let content = this.innerHTML;
        var classAttribute = 'list-group-item';

        if (active === 'true') {
            classAttribute = `${classAttribute} active`;
        }

        classAttribute = ` class="${classAttribute}"`;
        this.outerHTML =
            `<a href="${href}"${classAttribute}>${content}</a>`;
    }
}
