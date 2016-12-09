export class InputGroup extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let size = this.getAttribute('size') || '';

        let classAttribute = 'input-group';

        if (size === 'small') {
            classAttribute = `${classAttribute} input-group-sm`;
        } else if (size === 'large') {
            classAttribute = `${classAttribute} input-group-lg`;
        }

        classAttribute = `class="${classAttribute}"`;

        let content = this.innerHTML;

        this.outerHTML =
            `<div ${classAttribute}>
                ${content}
             </div>`;
    }
}

export class AddOn extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('id') || '';
        let idAttribute = '';

        if (id !== '') {
            idAttribute = `id="${id}"`;
        }
        let content = this.innerHTML;

        this.outerHTML =
            `<span class="input-group-addon ${idAttribute}>
                ${content}
             </span>`;
    }
}

export class CheckBoxAddon extends HTMLElement {

    constructor() {
        super();
    }
}
