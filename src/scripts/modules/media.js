export class Media extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<div class="media">
        ${content}
       </div>`;
    }
}

export class MediaBody extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<div class="media-body">
        ${content}
       </div>`;
    }
}

export class MediaHeading1 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h1 class="media">${content}</h1>`;
    }
}

export class MediaHeading2 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h2 class="media">${content}</h2>`;
    }
}

export class MediaHeading3 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h3 class="media">${content}</h3>`;
    }
}

export class MediaHeading4 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h4 class="media">${content}</h4>`;
    }
}

export class MediaHeading5 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h5 class="media">${content}</h5>`;
    }
}

export class MediaHeading6 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h6 class="media">${content}</h6>`;
    }
}

export class MediaObject extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var alignment = this.getAttribute('alignment') || '';
        var horizontalPosition = this.getAttribute('horizontal-position') || 'left';
        var href = this.getAttribute('href') || '#';
        var src = this.getAttribute('src') || '';
        var alt = this.getAttribute('alt') || '';

        var classAttribute = 'media-left ';

        if (horizontalPosition === 'right') {
            classAttribute = 'media-right ';
        }

        switch (alignment) {
        case 'top':
            classAttribute += 'media-top ';
            break;
        case 'middle':
            classAttribute += 'media-middle ';
            break;
        case 'bottom':
            classAttribute += 'media-bottom ';
            break;
        }

        classAttribute = ` class="${classAttribute.trim()}"`;

        this.outerHTML =
            `<div${classAttribute}>
        <a href="${href}">
          <img class="media-object" src="${src}" alt="${alt}">
        </a>
       </div>`;
    }
}
