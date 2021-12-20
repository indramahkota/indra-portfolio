import { html, render } from 'lit';
import AppConfig from '../data/Config';
import Utils from '../data/utils/Utils';

import './views/IndraApp';

if (Utils.getLCS(AppConfig.LCS_THEME) === 'dark') {
    window.document.body.classList.add('dark');
} else {
    window.document.body.classList.remove('dark');
}

window.addEventListener('DOMContentLoaded', () => {
    render(html`
        <a id='skip-to-content' class='skip-link' href='#content'>Skip to Content</a>
        <indra-app></indra-app>
    `, document.body);
});