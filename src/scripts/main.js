import {Alert, AlertLink} from './modules/alert';
import {Badge} from './modules/badge';
import {BreadCrumbs, BreadCrumb} from './modules/breadcrumbs';
import {ButtonDropdown, SplitButtonDropdown} from './modules/buttonDropdown';
import {Container} from './modules/container';
import {Divider} from './modules/divider';
import {Jumbotron} from './modules/jumbotron';
import {Media, MediaBody, MediaHeading1, MediaHeading2, MediaHeading3,
    MediaHeading4,MediaHeading5, MediaHeading6, MediaObject} from './modules/media';
import {NavPill, NavPillDropdown} from './modules/navpill';
import {Navbar, NavbarMenu, NavbarForm, NavbarDropdown, NavbarButton,
    NavbarTabs, NavTab, NavbarText, NavbarMenuItem, NavbarLink, NavbarPills} from './modules/navbar';
import {Panel, PanelBody, PanelFooter, PanelHeading, PanelTitle1, PanelTitle2,
    PanelTitle3, PanelTitle4, PanelTitle5, PanelTitle6} from './modules/panel';
import {Pager, PagerNext, PagerPrevious} from './modules/pager';
import {ProgressBar} from './modules/progressBar';
import {Well} from './modules/well';

document.registerElement('x-alert', Alert);
document.registerElement('x-alert-link', AlertLink);
document.registerElement('x-badge', Badge);
document.registerElement('x-breadcrumbs', BreadCrumbs);
document.registerElement('x-breadcrumb', BreadCrumb);
document.registerElement('x-button-dropdown', ButtonDropdown);
document.registerElement('x-container', Container);
document.registerElement('x-divider', Divider);
document.registerElement('x-jumbotron', Jumbotron);
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
document.registerElement('x-nav-tab', NavTab);
document.registerElement('x-navbar-text', NavbarText);
document.registerElement('x-navbar-link', NavbarLink);
document.registerElement('x-nav-menu-item', NavbarMenuItem);
document.registerElement('x-navbar-pills', NavbarPills);
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
document.registerElement('x-well', Well);
