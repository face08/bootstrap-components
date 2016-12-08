export class ProgressBar extends HTMLElement {

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

        var classAttribute = 'progress-bar';

        if (context !== '') {
            classAttribute += ` progress-bar-${context}`;
        }

        if (striped === 'true') {
            classAttribute += ' progress-bar-striped';
        }

        if (animate === 'true') {
            classAttribute += ' active';
        }

        classAttribute = `class="${classAttribute}"`;

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
