export class ButtonDropdown extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        //var id = this.getAttribute('id') || '';
        var title = this.getAttribute('title') || '';
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="btn-group">
         <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           ${title}
           <span class="caret"></span>
         </button>
         <ul class="dropdown-menu">
           ${content}
         </ul>
       </div>`;
    }
}

export class SplitButtonDropdown extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var title = this.getAttribute('title') || '';
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="btn-group">
         <button type="button" class="btn btn-default">${title}</button>
         <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <span class="caret"></span>
           <span class="sr-only">Toggle Dropdown</span>
         </button>
         <ul class="dropdown-menu">
           ${content}
         </ul>
       </div>`;
    }
}
