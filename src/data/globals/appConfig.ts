import { IProfileNavigation, INavigation, ISocialMedia, IUser } from './interfaces';
import userImageUrl from '../../libs/assets/images/avatars/profile.webp';
import userImageUrlRound from '../../libs/assets/images/avatars/profile_round_60.webp';

export default class AppConfig {
    static readonly APP_NAME: string = 'My Portfolio';
    static readonly TEXT_GREETING: string = 'Hi there, I\'m Indra';
    static readonly TEXT_GREETING_DESC: string = 'A passionate Software Developer, having an Experience of building Web and Android Applications using TypeScript, JavaScript, Kotlin, Java, and some other cool libraries and frameworks.';
    static readonly TEXT_FOOTER: string = 'Made with ❤️ by Indra Mahkota';

    static readonly LCS_THEME: string = 'indramahkota-theme-mode';
    static readonly LCS_DRAWER: string = 'indramahkota-drawer-mode';

    static readonly STATIC_USER: IUser = {
        name: 'Indra Mahkota',
        status: 'Open for opportunities: Yes',
        location: 'Pontianak, Indonesia',
        image: userImageUrl,
        roundImage: userImageUrlRound
    }

    static readonly APP_NAVIGATION: INavigation[] = [
        { name: 'Skills', url: '#/skills', isActive: false },
        { name: 'Work Experiences', url: '#/work-experiences', isActive: false },
        { name: 'Projects', url: '#/projects', isActive: false }
    ];

    static readonly APP_ICON_NAVIGATION: IProfileNavigation = {
        name: 'Indra Mahkota',
        url: '#/profile',
        isActive: true,
        imageUrl: userImageUrlRound,
        imageAlt: 'Indra Mahkota'
    }

    static readonly APP_SOCIAL_MEDIA: ISocialMedia[] = [
        { name: 'github', url: 'https://github.com/indramahkota', isEmail: false, color: '#333', icon: 'fab fa-github' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/indramahkota', isEmail: false, color: '#0e76a8', icon: 'fab fa-linkedin-in' },
        { name: 'google', url: 'mailto:indramahkota1@gmail.com', isEmail: true, color: '#ea4335',  icon: 'fab fa-google' },
        { name: 'gitlab', url: 'https://gitlab.com/indramahkota', isEmail: false, color: '#fca326', icon: 'fab fa-gitlab' },
        { name: 'facebook', url: 'https://www.facebook.com/indramahkota.id', isEmail: false, color: '#3b5998', icon: 'fab fa-facebook-f' }
    ];

    static readonly SUPPORT_DARK_MODE: boolean = true;
}