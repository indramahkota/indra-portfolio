import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import EventType from '../../../data/utils/EventType';
import CommonElement from '../_base_/commonElement';

@customElement('favorite-button')
export default class FavoriteButton extends CommonElement {
    @property({ type: Boolean })
    isFavorite = false;

    _onButtonClickHandler(): void {
        this.isFavorite = !this.isFavorite;
        this.isFavorite ? this._dispatchData({}, EventType.FAVORITE_ADD) :
            this._dispatchData({}, EventType.FAVORITE_DELETE);
    }

    render(): TemplateResult {
        return html`
            <button aria-label='${!this.isFavorite ? 'Add into favorites' : 'Remove from favorites'}' class='favoriteButton' @click='${this._onButtonClickHandler}'>
                ${this.isFavorite ? html`<i style='color: #ff69b4;' class='fas fa-heart'></i>` : html`<i class='far fa-heart'></i>`}
            </button>
        `;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
    interface HTMLElementTagNameMap {
        'favorite-button': FavoriteButton;
    }
}