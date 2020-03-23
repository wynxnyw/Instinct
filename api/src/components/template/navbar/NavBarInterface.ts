export interface NavBarLink {
  text: string;
  icon: string;
  path: string;
}

export interface NavBarProps {
  links?: NavBarLink[];
}
