import { html, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import Utils from '../../../data/utils/Utils';
import AppConfig from '../../../data/Config';
import { INavigation } from '../../../data/model/models';
import CommonElement from '../_base_/commonElement';
import IScrollEffect from '../_base_/interfaces/IScrollEffect';

@customElement('app-bar')
export default class AppBar extends CommonElement implements IScrollEffect {
    @property({ type: String })
    title = AppConfig.APP_NAME;

    @property({ type: Array })
    navData = AppConfig.APP_NAVIGATION;

    @property({ type: Object })
    iconNavData = AppConfig.APP_ICON_NAVIGATION;

    @property({ type: Boolean })
    iconNavFocus = false;

    @property({ type: Boolean })
    isDrawerOpen = false;

    @property({ type: Boolean })
    isThemeLight = true;

    @property({ type: Boolean })
    isShow = true;

    @property({ type: Boolean })
    darkMode = AppConfig.SUPPORT_DARK_MODE;

    _ticking = false;

    _currentScrollPosition = 0;

    _lastScrollPosition = 0;
    
    _onScrollHandler = (): void => {
        this._currentScrollPosition = window.scrollY;
        window.setTimeout(() => {
            this._lastScrollPosition = window.scrollY;
        }, 50);
        if (!this._ticking) {
            window.requestAnimationFrame(() => {
                this._hideOrShowHeader();
                this._ticking = false;
            });
            this._ticking = true;
        }
    };

    _onResizeHandler = (): void => {
        this._hideOrShowHeader();
        this.isDrawerOpen = false;
        Utils.setLCS(AppConfig.LCS_DRAWER, 'close');
    }

    _hideOrShowHeader(): void {
        if (this._currentScrollPosition < 120) {
            this.showHeader();
            return;
        }
        const hideHeader = this._currentScrollPosition - this._lastScrollPosition;
        if (hideHeader > 0) {
            this.isDrawerOpen = false;
            Utils.setLCS(AppConfig.LCS_DRAWER, 'close');
            this.hideHeader();
        } else if (hideHeader < -10) {
            this.showHeader();
        }
    }

    _onIconNavClickHandler(): void {
        this.dataShouldUpdate(this.iconNavData.url);
        this.iconNavFocus = true;
        if (this.isDrawerOpen) {
            this._onHamburgerClickHandler();
        }
    }

    _onHamburgerClickHandler(): void {
        this.isDrawerOpen = !this.isDrawerOpen;
        if (this.isDrawerOpen) {
            Utils.setLCS(AppConfig.LCS_DRAWER, 'open');
        } else {
            Utils.setLCS(AppConfig.LCS_DRAWER, 'close');
        }
    }

    _onNavigationClickHandler(event: Event): void {
        const path = event.composedPath();
        const { hash } = path[0] as HTMLAnchorElement;
        this.dataShouldUpdate(hash);

        this.iconNavFocus = false;
        if (this.isDrawerOpen) {
            this._onHamburgerClickHandler();
        }
    }

    _onSwitchChangeHandler(event: Event): void {
        const path = event.composedPath();
        const input = path[0] as HTMLInputElement;
        if (input.checked) {
            window.document.body.classList.remove('dark');
            Utils.setLCS(AppConfig.LCS_THEME, 'light');
        } else {
            window.document.body.classList.add('dark');
            Utils.setLCS(AppConfig.LCS_THEME, 'dark');
        }
    }

    hideHeader(): void {
        this.isShow = false;
    }

    showHeader(): void {
        this.isShow = true;
    }

    dataShouldUpdate(hash: string): void {
        this.iconNavData.isActive = this.iconNavData.url === hash || false;
        this.navData = this.navData.map(nav => {
            nav.isActive = nav.url === hash || false;
            return nav;
        });
    }

    connectedCallback(): void {
        super.connectedCallback();
        if (Utils.getLCS(AppConfig.LCS_THEME) === 'dark')
            this.isThemeLight = false;
        if (Utils.getLCS(AppConfig.LCS_DRAWER) === 'open')
            this.isDrawerOpen = true;
        if (window.location.hash === this.iconNavData.url)
            this.iconNavFocus = true;
        if (window.location.hash !== '')
            this.dataShouldUpdate(window.location.hash);

        window.addEventListener('resize', this._onResizeHandler, false);
        window.addEventListener('scroll', this._onScrollHandler, false);
    }

    disconnectedCallback(): void {
        window.removeEventListener('resize', this._onResizeHandler, false);
        window.removeEventListener('scroll', this._onScrollHandler, false);
        super.disconnectedCallback();
    }

    renderToggle(): TemplateResult {
        return html`
            <label class='toggleLabel'>
                <input aria-label='This input for Toggle Dark or Light Mode' @change='${this._onSwitchChangeHandler}' type='checkbox' ?checked=${this.isThemeLight}>
                <span class='slider round'></span>
                <div class='toggleIcon'>
                    <i class='fas fa-sun'></i>
                    <i class='fas fa-moon'></i>
                </div>
            </label>
        `;
    }

    renderNavList(nav: INavigation): TemplateResult {
        return html`
            <li>
                <a href='${nav.url}' @click='${this._onNavigationClickHandler}'
                    class='${nav.isActive ? 'active' : ''}'>
                    ${nav.name}
                    <span class='chevron'></span>
                </a>
            </li>
        `;
    }

    render(): TemplateResult {
        return html`
            <div class=${this.isShow ? 'headerContainer' : 'headerContainer hide'}>
                <header class='header'>
                    <a href='/' class='headerLogo'>${this.title}</a>

                    ${this.darkMode ? this.renderToggle() : nothing}

                    <button aria-label='Toggle Menu Button' class='headerButton ${this.isDrawerOpen ? 'change' : ''}' @click='${this._onHamburgerClickHandler}'>
                        <span class='humburger'></span>
                    </button>

                    <nav class='headerNavigation ${this.isDrawerOpen ? 'change' : ''}'>
                        <ul>
                            ${this.navData.map(nav => this.renderNavList(nav))}

                            <li>
                                <a href='${this.iconNavData.url}' class='anchorIconContainer ${this.iconNavFocus || this.iconNavData.isActive  ? 'active' : ''}' @click='${this._onIconNavClickHandler}'>
                                    <img class='anchorIcon' src='${this.iconNavData.imageUrl}' alt='${this.iconNavData.imageAlt}'/>
                                    <p class='anchorName'>${this.iconNavData.name}</p>
                                    <span class='chevron'></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        `;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
    interface HTMLElementTagNameMap {
        'app-bar': AppBar;
    }
}