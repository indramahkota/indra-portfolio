import { html, render } from 'lit';
import "./views/IndraApp";

window.addEventListener('DOMContentLoaded', () => {
    render(html`
        <a id='skip-to-content' class='skip-link' href='#content'>Skip to Content</a>
        <indra-app></indra-app>
    `, document.body);
});