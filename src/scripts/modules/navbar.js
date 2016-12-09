export class Navbar extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var id = this.getAttribute('id') || '';
        var position = this.getAttribute('position') || '';
        var href = this.getAttribute('href') || '#';
        //var brandText = this.getAttribute('brand-text') || '';
        var content = this.innerHTML;

        var classAttribute = 'navbar navbar-default';

        if (position !== '') {
            classAttribute += ` navbar-${position}`;
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<nav ${classAttribute}>
         <div class="container-fluid">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#${id}" aria-expanded="false">
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

export class NavbarMenu extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<ul class="nav navbar-nav">
        ${content}
       </ul>`;
    }
}

export class NavbarMenuItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var href = this.getAttribute('href') || '#';
        var active = this.getAttribute('active') || '';
        var content = this.innerHTML;
        var screenReaderText = '';
        var classAttribute = '';

        if (active !== '') {
            screenReaderText = ' <span class="sr-only">(current)</span>';
            classAttribute = ' class="active"';
        }

        this.outerHTML =
            `<li${classAttribute}><a href="${href}">${content}${screenReaderText}</a></li>`;
    }
}

export class NavbarPills extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var stacked = this.getAttribute('stacked') || 'false';
        var justified = this.getAttribute('justified') || 'false';
        var content = this.innerHTML;

        var classAttribute = 'nav nav-pills';

        if (stacked === 'true') {
            classAttribute += ' nav-stacked';
        }

        if (justified === 'true') {
            classAttribute += ' nav-justified';
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<ul ${classAttribute}>
         ${content}
       </ul>`;
    }
}

export class NavbarTabs extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var justified = this.getAttribute('justified') || 'false';
        var content = this.innerHTML;

        var classAttribute = 'nav nav-tabs';

        if (justified === 'true') {
            classAttribute += ' nav-justified';
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<ul ${classAttribute}>
         ${content}
       </ul>`;
    }
}

export class NavTab extends HTMLElement {

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
            classAttribute = ' disabled';
        }

        classAttribute = ` class="${classAttribute.trim()}"`;

        var content = this.innerHTML;
        this.outerHTML =
            `<li role="presentation"${classAttribute}>
         <a href="${href}">${content}</a>
       </li>`;
    }
}

export class NavTabDropdown extends HTMLElement {

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

export class NavbarForm extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var placeholderText = this.getAttribute('placeholder-text') || '';
        var buttonText = this.getAttribute('button-text') || '';

        this.outerHTML =
            `<form class="navbar-form navbar-left">
         <div class="form-group">
           <input type="text" class="form-control" placeholder="${placeholderText}">
         </div>
         <button type="submit" class="btn btn-default">${buttonText}</button>
       </form>`;
    }

}

export class NavbarDropdown extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var title = this.getAttribute('title') || '';
        var content = this.innerHTML;

        this.outerHTML =
            `<ul class="nav navbar-nav">
         <li class="dropdown">
           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true
             aria-expanded="false">${title} <span class="caret"></span></a>
           <ul class="dropdown-menu">
             ${content}
           </ul>
         </li>
       </ul>`;
    }

}

export class NavbarButton extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<button type="button" class="btn btn-default navbar-btn">${content}</button>`;
    }

}

export class NavbarText extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<p class="navbar-text">${content}</p>`;
    }

}

export class NavbarLink extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let alignment = this.getAttribute('alignment') || '';
        let position = this.getAttribute('position') || '';
        let content = this.innerHTML;
        let linkText = this.getAttribute('link-text') || '';

        let classAttribute = 'navbar-text';

        if (position !== '') {
            classAttribute += ` navbar-${alignment}`;
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<p ${classAttribute}>${content}<a href="${href}" class="navbar-link">${linkText}</a></p>`;
    }

}
