export class Pager extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var ariaLabel = this.getAttribute('aria-label') || '';
        var content = this.innerHTML;

        this.outerHTML =
            `<nav aria-label="${ariaLabel}">
                 <ul class="pager">
                     ${content}
                 </ul>
             </nav>`;
    }
}

export class PagerPrevious extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var sideAlign = this.getAttribute('side-align') || '';
        var showArrow = this.getAttribute('show-arrow') || '';
        var href = this.getAttribute('href') || '#';
        var disabled = this.getAttribute('disabled') || '';
        var content = this.innerHTML;
        var showArrowContent = '';

        if (showArrow === 'true') {
            showArrowContent = '<span aria-hidden="true">&larr;</span>';
        }

        var classAttribute = '';

        if (sideAlign === 'true') {
            classAttribute = 'previous ';
        }

        if (disabled === 'true') {
            classAttribute += 'disabled ';
        }

        classAttribute = ` class="${classAttribute.trim()}"`;

        this.outerHTML =
            `<li${classAttribute}>
                 <a href="${href}">${showArrowContent}${content}</a>
             </li>`;
    }
}

export class PagerNext extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var sideAlign = this.getAttribute('side-align') || '';
        var showArrow = this.getAttribute('show-arrow') || '';
        var href = this.getAttribute('href') || '#';
        var disabled = this.getAttribute('disabled') || '';
        var content = this.innerHTML;
        var showArrowContent = '';

        if (showArrow === 'true') {
            showArrowContent = '<span aria-hidden="true">&rarr;</span>';
        }

        var classAttribute = '';

        if (sideAlign === 'true') {
            classAttribute = 'next ';
        }

        if (disabled === 'true') {
            classAttribute += 'disabled ';
        }

        classAttribute = ` class="${classAttribute.trim()}"`;

        this.outerHTML =
            `<li${classAttribute}>
                 <a href="${href}">${content}${showArrowContent}</a>
             </li>`;
    }
}