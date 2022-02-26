export interface INavigation {
  name: string;
  url: string;
  isActive: boolean;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
}

export interface IUser {
  name: string;
  status: string;
  location: string;
  image: string;
  roundImage: string;
}

export interface ISocialMedia {
  name: string;
  url: string;
  icon: string;
  color: string;
  isEmail: boolean;
}
