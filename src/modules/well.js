export class Well extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var wellSize = this.getAttribute('well-size') || '';
        var content = this.innerHTML;

        var classAttribute = 'well';

        if (wellSize === 'small') {
            classAttribute = `${classAttribute} well-sm`;
        } else if (wellSize === 'large') {
            classAttribute = `${classAttribute} well-lg`;
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<div ${classAttribute}>
        ${content}
      </div>`;
    }
}
