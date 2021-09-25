import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import CommonElement from '../../../libs/components/_base_/commonElement';

import "../../../libs/components/user-profile/userProfile";
import "../../../libs/components/app-greeting/appGreeting";

@customElement('landing-page')
export class Landing extends CommonElement {
    /* Display flex align items center tidak mengizinkan child div width 100% */
    /* Basis display [container -> main -> content -> item] */
    render() {
        return html`
            <app-greeting></app-greeting>
            <user-profile></user-profile>
        `;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
    interface HTMLElementTagNameMap {
        'landing-page': Landing;
    }
}