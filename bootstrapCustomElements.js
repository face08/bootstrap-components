
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

class BreadCrumbs extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<ol class="breadcrumb">
         ${content}
       </ol>`
    }
}

class BreadCrumb extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let content = this.innerHTML;

        this.outerHTML =
            `<li><a href="${href}">${content}</li>`
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

class Media extends HTMLElement {

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

class MediaBody extends HTMLElement {

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

class MediaHeading1 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h1 class="media">${content}</h1>`;
    }
}

class MediaHeading2 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h2 class="media">${content}</h2>`;
    }
}

class MediaHeading3 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h3 class="media">${content}</h3>`;
    }
}

class MediaHeading4 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h4 class="media">${content}</h4>`;
    }
}

class MediaHeading5 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h5 class="media">${content}</h5>`;
    }
}

class MediaHeading6 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<h6 class="media">${content}</h6>`;
    }
}

class MediaObject extends HTMLElement {

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

        var content = this.innerHTML;

        this.outerHTML =
            `<div${classAttribute}>
        <a href="${href}">
          <img class="media-object" src="${src}" alt="${alt}">
        </a>
       </div>`;
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

class Container extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="container">
        ${content}
      </div>`
    }

}

class Navbar extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var id = this.getAttribute('id') || '';
        var position = this.getAttribute('position') || '';
        var href = this.getAttribute('href') || '#';
        var brandText = this.getAttribute('brand-text') || '';
        var content = this.innerHTML;

        var classAttribute = "navbar navbar-default";

        if (position !== '') {
            classAttribute += ` navbar-${position}`;
        }

        classAttribute = `class="${classAttribute}"`

        this.outerHTML =
            `<nav ${classAttribute}>
         <div class="container-fluid">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#${id}" aria-expanded="false">
               <span class="sr-only">Toggle navigation</span>1
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

class NavbarMenu extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;
        this.outerHTML =
            `<ul class="nav navbar-nav">
        ${content}
       </ul>`
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

        classAttribute = `class="${classAttribute}"`;

        var screenReaderText = `${current}% Complete`;

        if (context !== '') {
            screenReaderText += ` (${context})`; Unexpected
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

class NavbarMenuItem extends HTMLElement {

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

class NavbarPills extends HTMLElement {

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

class NavPill extends HTMLElement {

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

class NavPillDropdown extends HTMLElement {

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

class NavbarTabs extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        1
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

class NavTab extends HTMLElement {

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

class NavTabDropdown extends HTMLElement {

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

class DropdownItem extends HTMLElement {

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

class LinkListGroup extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<div class="list-group">
         ${content}
       </div>`;
    }
}

class LinkListGroupItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let href = this.getAttribute('href') || '#';
        let active = this.getAttribute('active') || 'false';
        let content = this.innerHTML;
        var classAttribute = "list-group-item";

        if (active === 'true') {
            classAttribute = `${classAttribute} active`;
        }

        classAttribute = ` class="${classAttribute}"`;
        this.outerHTML =
            `<a href="${href}"${classAttribute}>${content}</a>`;
    }
}

class ListGroup extends HTMLElement {
    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<ul class="list-group">
         ${content}
       </ul>`;
    }
}

class ListGroupItem extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        let content = this.innerHTML;

        this.outerHTML =
            `<li class="list-group-item">${content}</li>`;
    }
}

class NavbarForm extends HTMLElement {

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

class NavbarDropdown extends HTMLElement {

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

class NavbarButton extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<button type="button" class="btn btn-default navbar-btn">${content}</button>`;
    }

}

class NavbarText extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<p class="navbar-text">${content}</p>`
    }

}

class NavbarLink extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var href = this.getAttribute('href') || '#';
        var alignment = this.getAttribute('alignment') || '';
        var linkText = this.getAttribute('link-text') || '';

        var classAttribute = "navbar-text";

        if (position !== '') {
            classAttribute += ` navbar-${alignment}`;
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<p ${classAttribute}>${content}<a href="${href}" class="navbar-link">${link - text}</a></p>`;
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

class Jumbotron extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="jumbotron">
        ${content}
      </div>`;
    }
}

class Pager extends HTMLElement {

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

class PagerPrevious extends HTMLElement {

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
            showArrowContent = '<span aria-hidden="true">&larr;</span>'
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

class PagerNext extends HTMLElement {

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
            showArrowContent = '<span aria-hidden="true">&rarr;</span>'
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

class Panel extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var panelType = this.getAttribute('panel-type') || '';
        var content = this.innerHTML;

        var classAttribute = "panel";

        switch (panelType) {
            case "primary":
                classAttribute = `${classAttribute} panel-primary`;
                break;
            case "success":
                classAttribute = `${classAttribute} panel-success`;
                break;
            case "info":
                classAttribute = `${classAttribute} panel-info`;
                break;
            case "warning":
                classAttribute = `${classAttribute} panel-warning`;
                break;
            case "danger":
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
      </div>`
    }

}

class PanelBody extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="panel-body">
        ${content}
      </div>`
    }
}

class PanelFooter extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="panel-footer">
        ${content}
      </div>`
    }
}

class PanelHeading extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<div class="panel-heading">
        ${content}
      </div>`
    }
}

class PanelTitle1 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h1 class="panel-title">
        ${content}
      </h1>`
    }
}

class PanelTitle2 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h2 class="panel-title">
        ${content}
      </h2>`
    }
}

class PanelTitle3 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h3 class="panel-title">
        ${content}
      </h3>`
    }
}

class PanelTitle4 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h4 class="panel-title">
        ${content}
      </h4>`
    }
}

class PanelTitle5 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h5 class="panel-title">
        ${content}
      </h5>`
    }
}

class PanelTitle6 extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var content = this.innerHTML;

        this.outerHTML =
            `<h6 class="panel-title">
        ${content}
      </h6>`
    }
}

class Thumbnail extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var href = this.getAttribute('href') || '#';
        var src = this.getAttribute('src') || '';
        var alt = this.getAttribute('alt') || '';

        this.outerHTML =
            `<a href="${href}" class="thumbnail">
        <img src="${src}" alt="${alt}">
      </a>`
    }
}

class Well extends HTMLElement {

    constructor() {
        super();
    }

    createdCallback() {
        var wellSize = this.getAttribute('well-size') || '';
        var content = this.innerHTML;

        var classAttribute = "well";

        if (wellSize === 'small') {
            classAttribute = `${classAttribute} well-sm`;
        } else if (wellSize === 'large') {
            classAttribute = `${classAttribute} well-lg`;
        }

        classAttribute = `class="${classAttribute}"`;

        this.outerHTML =
            `<div ${classAttribute}>
        ${content}
      </div>`;
    }
}

document.registerElement('x-alert', Alert);
document.registerElement('x-badge', Badge);
document.registerElement('x-breadcrumbs', BreadCrumbs);
document.registerElement('x-breadcrumb', BreadCrumb);
document.registerElement('x-button-dropdown', ButtonDropdown);
document.registerElement('x-container', Container);
document.registerElement('x-divider', Divider);
document.registerElement('x-media', Media);
document.registerElement('x-media-body', MediaBody);
document.registerElement('x-media-header1', MediaHeading1);
document.registerElement('x-media-header2', MediaHeading2);
document.registerElement('x-media-header3', MediaHeading3);
document.registerElement('x-media-header4', MediaHeading4);
document.registerElement('x-media-header5', MediaHeading5);
document.registerElement('x-media-header6', MediaHeading6);
document.registerElement('x-media-object', MediaObject);
document.registerElement('x-nav-pill', NavPill);
document.registerElement('x-nav-pill-dropdown', NavPillDropdown);
document.registerElement('x-navbar', Navbar);
document.registerElement('x-navbar-menu', NavbarMenu);
document.registerElement('x-navbar-form', NavbarForm);
document.registerElement('x-navbar-dropdown', NavbarDropdown);
document.registerElement('x-navbar-button', NavbarButton);
document.registerElement('x-navbar-tabs', NavbarTabs);
document.registerElement('x-navbar-text', NavbarText);
document.registerElement('x-navbar-link', NavbarLink);
document.registerElement('x-nav-menu-item', NavbarMenuItem);
document.registerElement('x-navbar-pills', NavbarPills);
document.registerElement('x-nav-tab', NavTab);
document.registerElement('x-nav-tab-dropdown', NavTabDropdown);
document.registerElement('x-pager', Pager);
document.registerElement('x-pager-next', PagerNext);
document.registerElement('x-pager-previous', PagerPrevious);
document.registerElement('x-panel', Panel);
document.registerElement('x-panel-body', PanelBody);
document.registerElement('x-panel-footer', PanelFooter);
document.registerElement('x-panel-heading', PanelHeading);
document.registerElement('x-panel-title-1', PanelTitle1);
document.registerElement('x-panel-title-2', PanelTitle2);
document.registerElement('x-panel-title-3', PanelTitle3);
document.registerElement('x-panel-title-4', PanelTitle4);
document.registerElement('x-panel-title-5', PanelTitle5);
document.registerElement('x-panel-title-6', PanelTitle6);
document.registerElement('x-progress-bar', ProgressBar);
document.registerElement('x-split-button-dropdown', SplitButtonDropdown);
document.registerElement('x-thumbnail', Thumbnail);
document.registerElement('x-well', Well);
