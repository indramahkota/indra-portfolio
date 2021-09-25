import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import CommonElement from '../_base_/commonElement';

@customElement('app-toast')
export default class AppToast extends CommonElement {
    @property({ type: String })
    message = 'This is Toaster';

    render(): TemplateResult {
        return html`
            <div class='toastContainer'>
                <p>${this.message}</p>
            </div>
        `;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
    interface HTMLElementTagNameMap {
        'app-toast': AppToast;
    }
}