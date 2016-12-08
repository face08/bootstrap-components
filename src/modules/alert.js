export class Alert extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var dismissable = this.getAttribute('dismissable') || '';
        var providedClass = this.getAttribute('class') || '';
        var classAttribute = `class="alert ${providedClass}${dismissable === 'true' ? ' alert-dismissable' : ''}"`;
        var content = this.innerHTML;

        var dismissableContent = '';

        if (dismissable === 'true') {
            dismissableContent =
                `<button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times</span>
         </button>`;
        }

        this.outerHTML =
            `<div ${classAttribute} role="alert">
                ${dismissableContent}
                ${content}
             </div>`;
    }
}

export class AlertLink extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var href = this.getAttribute('href') || '#';
        var content = this.innerHTML;

        this.outerHTML =
            `<a href="${href}" class="alert-link">${content}</a>`;
    }
}
