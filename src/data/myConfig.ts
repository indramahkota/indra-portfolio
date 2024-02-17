import userImageUrl from "@in/assets/webp/profile.webp";
import userImageUrlRound from "@in/assets/webp/profile_round_60.webp";
import Icons from "@in/base/utils/Icons";
import {
  InNavigationModel,
  InProjectModel,
  InSocialMediaModel,
  InUserModel,
} from "@in/data/models";

export default class AppConfig {
  static readonly APP_NAME: string = "My Portfolio";
  static readonly TEXT_GREETING: string = "Hi there, I'm Indra";
  static readonly TEXT_GREETING_DESC: string =
    "A passionate Software Developer, having an Experience of building Web and Android Applications using TypeScript, JavaScript, Kotlin, Java, and some other cool libraries and frameworks.";
  static readonly TEXT_FOOTER: string = "Made with ❤️ by Indra Mahkota";

  static readonly STATIC_USER: InUserModel = {
    name: "Indra Mahkota",
    status: "Open for opportunities: Yes",
    location: "Pontianak, Indonesia",
    image: userImageUrl,
    roundImage: userImageUrlRound,
  };

  static readonly APP_NAVIGATION: InNavigationModel[] = [
    {
      name: "Skills",
      url: "#/skills",
      isActive: false,
      imageUrl: undefined,
      imageAlt: undefined,
    },
    {
      name: "Work Experiences",
      url: "#/work-experiences",
      isActive: false,
      imageUrl: undefined,
      imageAlt: undefined,
    },
    {
      name: "Projects",
      url: "#/projects",
      isActive: false,
      imageUrl: undefined,
      imageAlt: undefined,
    },
    {
      name: "Indra Mahkota",
      url: "#/profile",
      isActive: false,
      imageUrl: userImageUrlRound,
      imageAlt: "Profile Image",
    },
  ];

  static readonly APP_SOCIAL_MEDIA: InSocialMediaModel[] = [
    {
      name: "github",
      url: "https://github.com/indramahkota",
      isEmail: false,
      color: "#333",
      icon: Icons.GITHUB,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/indramahkota",
      isEmail: false,
      color: "#0e76a8",
      icon: Icons.LINKEDIN,
    },
    {
      name: "google",
      url: "mailto:indramahkota1@gmail.com",
      isEmail: true,
      color: "#ea4335",
      icon: Icons.GOOGLE,
    },
    {
      name: "gitlab",
      url: "https://gitlab.com/indramahkota",
      isEmail: false,
      color: "#fca326",
      icon: Icons.GITLAB,
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/mhkt.ind",
      isEmail: false,
      color: "#3b5998",
      icon: Icons.FACEBOOK,
    },
  ];

  static readonly APP_PROJECTS: InProjectModel[] = [
    {
      title: "Skills",
      description: "#/skills",
    },
    {
      title: "Skills",
      description: "#/skills",
    },
    {
      title: "Skills",
      description: "#/skills",
    },
    {
      title: "Skills",
      description: "#/skills",
    },
    {
      title: "Skills",
      description: "#/skills",
    },
    {
      title: "Skills",
      description: "#/skills",
    },
  ];

  static readonly SUPPORT_DARK_MODE: boolean = true;
}
