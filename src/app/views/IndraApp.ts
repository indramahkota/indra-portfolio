import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import CommonElement from '../../libs/components/_base_/commonElement';
import EventType from '../../data/utils/EventType';

import "../../libs/components/app-toast/appToast";
import "../../libs/components/foot-bar/footBar";
import '../../libs/components/app-bar/appBar';
import './pages/Landing';

@customElement('indra-app')
export class IndraApp extends CommonElement {
  @property({ type: String })
  toastMessage: string | null = null;

  _timeOutId: number | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(EventType.SHOW_TOAST, this._showToastHandler, false);
  }

  disconnectedCallback(): void {
    this.removeEventListener(EventType.SHOW_TOAST, this._showToastHandler, false);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <app-bar></app-bar>
      <main id='content'>
        <landing-page></landing-page>
      </main>
      <foot-bar></foot-bar>

      ${this.toastMessage ? html`
              <app-toast message='${this.toastMessage}'></app-toast>
          ` : nothing}
    `;
  }

  _showToastHandler = (event: Event): void => {
    const details = (event as CustomEvent).detail;
    if (details.message === undefined || details.message === '')
      return;

    if (this._timeOutId) clearTimeout(this._timeOutId);

    this.toastMessage = details.message;

    this._timeOutId = window.setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    'indra-app': IndraApp;
  }
}