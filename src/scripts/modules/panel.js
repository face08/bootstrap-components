export class Panel extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var panelType = this.getAttribute('panel-type') || '';
        var content = this.innerHTML;

        var classAttribute = 'panel';

        switch (panelType) {
        case 'primary':
            classAttribute = `${classAttribute} panel-primary`;
            break;
        case 'success':
            classAttribute = `${classAttribute} panel-success`;
            break;
        case 'info':
            classAttribute = `${classAttribute} panel-info`;
            break;
        case 'warning':
            classAttribute = `${classAttribute} panel-warning`;
            break;
        case 'danger':
            classAttribute = `${classAttribute} panel-danger`;
            break;
        default:
            classAttribute = `${classAttribute} panel-default`;
            break;
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<div ${classAttribute}>
        ${content}
      </div>`;
    }

}

export class PanelBody extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="panel-body">
                 ${content}
             </div>`;
    }
}

export class PanelFooter extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="panel-footer">
                 ${content}
             </div>`;
    }
}

export class PanelHeading extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="panel-heading">
                 ${content}
             </div>`;
    }
}

export class PanelTitle1 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h1 class="panel-title">
                 ${content}
             </h1>`;
    }
}

export class PanelTitle2 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h2 class="panel-title">
                 ${content}
             </h2>`;
    }
}

export class PanelTitle3 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h3 class="panel-title">
                 ${content}
             </h3>`;
    }
}

export class PanelTitle4 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h4 class="panel-title">
                 ${content}
             </h4>`;
    }
}

export class PanelTitle5 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h5 class="panel-title">
                 ${content}
             </h5>`;
    }
}

export class PanelTitle6 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h6 class="panel-title">
                 ${content}
             </h6>`;
    }
}