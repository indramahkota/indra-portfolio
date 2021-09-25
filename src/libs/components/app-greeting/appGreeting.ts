import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import AppConfig from '../../../data/globals/appConfig';
import CommonElement from '../../../libs/components/_base_/commonElement';

@customElement('app-greeting')
export class AppGreeting extends CommonElement {
    @property()
    greeting?: string = AppConfig.TEXT_GREETING;

    @property()
    greetingDesc?: string = AppConfig.TEXT_GREETING_DESC;

    render() {
        return html`
            <div class="greetingContainer" id="greeting">
                <div class="greetingMain">
                    <h1 class="greetingText">
                        ${this.greeting}
                        <span class="waveEmoji">👋</span>
                    </h1>
                    <p class="greetingText greetingDescription">${this.greetingDesc}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
    interface HTMLElementTagNameMap {
        'app-greeting': AppGreeting;
    }
}