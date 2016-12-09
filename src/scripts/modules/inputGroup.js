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

export class ButtonAddOn extends HTMLElement {

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
            `<span class="input-group-btn">
                <button class="btn btn-default" type="button" ${idAttribute}>${content}</button>
             </span>`;
    }
}

export class CheckBoxAddOn extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('id') || '';
        let idAttribute = '';

        if (id !== '') {
            idAttribute = `id="${id}"`;
        }
        
        let ariaLabel = this.getAttribute('aria-label') || '';
        let ariaLabelAttribute = '';

        if (ariaLabel !== '') {
            ariaLabelAttribute = `aria-label="${ariaLabel}"`;
        }

        this.outerHTML =
            `<span class="input-group-addon">
                <input type="checkbox" ${ariaLabelAttribute} ${idAttribute}>
             </span>`;
    }
}

export class DropdownAddOn extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let buttonLabel = this.getAttribute('button-label') || '';
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="input-group-btn">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${buttonLabel} <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    ${content}
                </ul>
             </div>`;
    }
}

export class RadioAddOn extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let id = this.getAttribute('id') || '';
        let idAttribute = '';

        if (id !== '') {
            idAttribute = `id="${id}"`;
        }
        
        let ariaLabel = this.getAttribute('aria-label') || '';
        let ariaLabelAttribute = '';

        if (ariaLabel !== '') {
            ariaLabelAttribute = `aria-label="${ariaLabel}"`;
        }

        this.outerHTML =
            `<span class="input-group-addon>
                <input type="radio" ${ariaLabelAttribute} ${idAttribute}>
             </span>`;
    }
}