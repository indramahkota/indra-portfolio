export interface InNavigationModel {
  name: string;
  url: string;
  isActive: boolean;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
}

export interface InUserModel {
  name: string;
  status: string;
  location: string;
  image: string;
  roundImage: string;
}

export interface InSocialMediaModel {
  name: string;
  url: string;
  icon: string;
  color: string;
  isEmail: boolean;
}

export interface InProjectModel {
  title: string;
  description: string;
}
