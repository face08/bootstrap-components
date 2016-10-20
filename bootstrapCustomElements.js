class Badge extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    var content = this.innerHTML;

    this.outerHTML =
      `<span class="badge">${content}</span>`;
  }

}

class ButtonDropdown extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    var id = this.getAttribute('id') || '';
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
       </div>`
  }
}

class SplitButtonDropdown extends HTMLElement {

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
       </div>`
  }
}

class Divider extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    this.outerHTML =
      `<li role="separator" class="divider"></li>`;
  }

}

class ProgressBar extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    var min = this.getAttribute('data-min') || '0';
    var max = this.getAttribute('data-max') || '0';
    var current = this.getAttribute('data-current') || '0';
    var content = this.innerHTML;

    this.outerHTML =
      `<div class="progress">
         <div class="progress-bar" role="progressbar" aria-valuenow="${current}" aria-valuemin="${min}" aria-valuemax="${max}" style="width: ${current}%;">
           <span class="sr-only">${current}% Complete</span>
${content}
         </div>
       </div>`;
  }

}

class DropDownItem extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    var href = this.getAttribute('href') || '#';
    var content = this.innerHTML;
    this.outerHTML =
      `<li><a href="${href}">${content}</a></li>`;
  }
}

class DropDownHeader extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    var content = this.innerHTML;
    this.outerHTML =
      `<li class="dropdown-header">${content}</li>`;
  }

}

class Dropup extends HTMLElement {

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

class Dropdown extends HTMLElement {

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

document.registerElement('x-badge', Badge);
document.registerElement('x-divider', Divider);
document.registerElement('x-progress-bar', ProgressBar);
document.registerElement('x-dropdown-item', DropDownItem);
document.registerElement('x-dropdown-header', DropDownHeader);
document.registerElement('x-dropdown', Dropdown);
document.registerElement('x-dropup', Dropup);
document.registerElement('x-button-dropdown', ButtonDropdown);
document.registerElement('x-split-button-dropdown', SplitButtonDropdown);