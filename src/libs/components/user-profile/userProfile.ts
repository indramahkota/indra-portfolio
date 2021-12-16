import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import AppConfig from '../../../data/globals/appConfig';
import CommonElement from '../_base_/commonElement';

import '../sosial-media/socialMedia';

@customElement('user-profile')
export default class UserProfile extends CommonElement {
    @property({ type: String })
    title = 'PROFILE';

    @property({ type: Object })
    data = AppConfig.STATIC_USER;

    render(): TemplateResult {
        return html`
            <div class='profileContainer'>
                <div class='profileMain'>
                    <!-- <h1 tabindex='0' class='profileTitle'>${this.title}</h1> -->
                    <div class='profileContent'>
                        <div class='profileDescriptionContainer'>
                            <h2 tabindex='0' class='profileName'>${this.data.name}</h2>
                            <div class='profileLocation'>
                                <i class='fas fa-map-marker-alt'></i>
                                <span tabindex='0'>${this.data.location}</span>
                            </div>
                            <div class='profileHirable'>
                                <p tabindex='0'>${this.data.status}</p>
                            </div>
                            <div class='profileMediaSocial'>
                                <social-media></social-media>
                            </div>
                        </div>
                        <div class='profileImageContainer'>
                            <img width="200" height="200" class='profileImage' src='${this.data.image}' alt='Indra Mahkota, Developer who build this website'/>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
    interface HTMLElementTagNameMap {
        'user-profile': UserProfile;
    }
}