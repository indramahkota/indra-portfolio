import CommonElement from "./base/commonElement";
import { Card } from "./base/mixins/cardMixin";
import ScrollElement from "./base/scrollElement";
import Config from "./base/utils/Config";
import Icons from "./base/utils/Icons";
import Utils from "./base/utils/Utils";
import InButtonHamburger from "./in-button-hamburger/inButtonHamburger";
import InFooter from "./in-footer/inFooter";
import InGreeting from "./in-greeting/inGreeting";
import InHeaderLogo from "./in-header-logo/inHeaderLogo";
import InHeaderNavItem from "./in-header-nav-item/inHeaderNavItem";
import InHeaderNav from "./in-header-nav/inHeaderNav";
import InHeader from "./in-header/inHeader";
import InProfile from "./in-profile/inProfile";
import InSocialMedia from "./in-social-media/inSocialMedia";
import InToTop from "./in-to-top/inToTop";
import InToggleDark from "./in-toogle-dark/inToggleDark";

/* This declaration helps TypeScript to provide strong typing
 * when interacting with DOM APIs. The JavaScript DOM API
 * of course does not know or care about types, but TypeScript does.
 * With this mechanism you can add the type of your custom elements to the DOM APIs.
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-button-hamburger": InButtonHamburger;
    "in-footer": InFooter;
    "in-greeting": InGreeting;
    "in-header": InHeader;
    "in-header-logo": InHeaderLogo;
    "in-header-nav": InHeaderNav;
    "in-header-nav-item": InHeaderNavItem;
    "in-profile": InProfile;
    "in-social-media": InSocialMedia;
    "in-to-top": InToTop;
    "in-toggle-dark": InToggleDark;
  }
}

export { Card };
export { Config };
export { Utils };
export { Icons };
export { CommonElement };
export { ScrollElement };
export {
  InButtonHamburger,
  InFooter,
  InGreeting,
  InHeaderLogo,
  InHeaderNavItem,
  InHeaderNav,
  InHeader,
  InProfile,
  InSocialMedia,
  InToTop,
  InToggleDark,
};
