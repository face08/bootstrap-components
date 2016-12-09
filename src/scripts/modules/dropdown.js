export class Dropdown extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var id = this.getAttribute('id') || '';
        var title = this.getAttribute('title') || '';
        var content = this.innerHTML;
        this.outerHTML =
            `<div class="dropdown">
         <button class="btn btn-default dropdown-toggle" type="button" id="${id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
           ${title}
           <span class="caret"></span>
         </button>
         <ul class="dropdown-menu" aria-labelledby="${id}">
           ${content}
         </ul>
       </div>`;
    }
}

export class DropdownHeader extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<li class="dropdown-header">${content}</li>`;
    }

}

export class DropdownItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let content = this.innerHTML;
        this.outerHTML =
            `<li><a href="${href}">${content}</a></li>`;
    }
}

export class Dropup extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var id = this.getAttribute('id') || '';
        var title = this.getAttribute('title') || '';
        var content = this.innerHTML;
        this.outerHTML =
            `<div class="dropup">
         <button class="btn btn-default dropdown-toggle" type="button" id="${id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
           ${title}
           <span class="caret"></span>
         </button>
         <ul class="dropdown-menu" aria-labelledby="${id}">
           ${content}
         </ul>
       </div>`;
    }
}
