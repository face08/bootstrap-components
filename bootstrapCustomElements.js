
class Alert extends HTMLElement {

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
         </button>`
    }

    this.outerHTML =
      `<div ${classAttribute} role="alert">
        ${dismissableContent}
        ${content}
       </div>`
  }
}

class AlertLink extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    var href = this.getAttribute('href') || '#';
    var content = this.innerHTML;

    this, outerHTML =
      `<a href="${href}" class="alert-link">${content}</a>`
  }
}

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

class Navbar extends HTMLElement {

  constructor() {
    super();
  }

  createdCallback() {
    var id = this.getAttribute('id') || '';
    var href = this.getAttribute('href') || '#';
    var brandText = this.getAttribute('brand-text') || '';
    var content = this.innerHTML;

    this.outerHTML =
      `<nav class="navbar navbar-default">
         <div class="container-fluid">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#{id}" aria-expanded="false">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
             </button>
             <a class="navbar-brand" href="${href}">Brand</a>
           </div>
           <div class="collapse navbar-collapse" id="${id}">
             ${content}
           </div>
         </div>
       </nav>`;
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
    var context = this.getAttribute('context') || '';
    var striped = this.getAttribute('striped') || 'false';
    var animate = this.getAttribute('animate') || 'false';
    var content = this.innerHTML;

    var classAttribute = "progress-bar";

    if (context !== '') {
      classAttribute += ` progress-bar-${context}`;
    }

    if (striped === 'true') {
      classAttribute += " progress-bar-striped";
    }

    if (animate === 'true') {
      classAttribute += " active";
    }

    classAttribute = `class="${classAttribute}"`

    var screenReaderText = `${current}% Complete`;

    if (context !== '') {
      screenReaderText += ` (${context})`;
    }

    this.outerHTML =
      `<div class="progress">
         <div ${classAttribute} role="progressbar" aria-valuenow="${current}" aria-valuemin="${min}" aria-valuemax="${max}" style="width: ${current}%;">
           <span class="sr-only">${screenReaderText}</span>
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

document.registerElement('x-alert', Alert);
document.registerElement('x-badge', Badge);
document.registerElement('x-divider', Divider);
document.registerElement('x-progress-bar', ProgressBar);
document.registerElement('x-dropdown-item', DropDownItem);
document.registerElement('x-dropdown-header', DropDownHeader);
document.registerElement('x-dropdown', Dropdown);
document.registerElement('x-dropup', Dropup);
document.registerElement('x-button-dropdown', ButtonDropdown);
document.registerElement('x-split-button-dropdown', SplitButtonDropdown);