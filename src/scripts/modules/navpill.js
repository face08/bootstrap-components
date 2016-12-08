export class NavPill extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var href = this.getAttribute('href') || '#';
        var active = this.getAttribute('active') || 'false';
        var disabled = this.getAttribute('disabled') || 'false';
        var classAttribute = '';

        if (active === 'true') {
            classAttribute = 'active';
        }

        if (disabled === 'true') {
            classAttribute += ' disabled';
        }

        classAttribute = ` class="${classAttribute.trim()}"`;

        var content = this.innerHTML;
        this.outerHTML =
            `<li role="presentation"${classAttribute}>
         <a href="${href}">${content}</a>
       </li>`;
    }
}

export class NavPillDropdown extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let title = this.getAttribute('title') || '';
        let href = this.getAttribute('href') || '#';
        let content = this.innerHTML;

        this.outerHTML =
            `<li role="presentation} class="dropdown">
         <a class="dropdown-toggle" data-toggle="dropdown" href="${href}" role="button" aria-haspopup="true" aria-expanded="false">
           ${title} <span class="caret"></span>
         </a>
         <ul class="dropdown-menu">
           ${content}
         </ul>
       </li>`;
    }
}