export interface JobItem {
  title: string;
  role?: string;
  location: string;
  startDate: string;
  endDate: string;
  faIcon: string;
  brief: string;
  details: string;
}

export interface ProjectItem {
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  faIcon: string;
  details: string;
}

export interface LanguageIconItem {
  title: string;
  devicon: string;
}

export interface SkillsIconItem {
  title: string;
  devicon: string;
}

export interface Tidbit {
  text: string;
  subtext?: string;
}

export interface HeroTitleProps {
  title: string;
  subtitle: string;
  avatarSrc?: string;
}

export interface TimelineProps {
  title: string;
  headerIcon: string;
  items: JobItem[] | ProjectItem[];
  pageLine?: boolean;
}

export interface TimelineItemProps {
  item: JobItem | ProjectItem;
}

export interface TimelineItemHeaderProps {
  item: JobItem | ProjectItem;
}

export interface SectionHeaderProps {
  title: string;
  faIcon?: string;
}

export interface TimelineHeaderProps {
  title: string;
  faIcon?: string;
}

export interface TimelineMilestoneIconProps {
  faIcon: string;
  isLarge?: boolean;
}

export interface IconItemsProps {
  title: string;
  faIcon: string;
  items: LanguageIconItem[] | SkillsIconItem[];
}

export interface IconItemProps {
  title: string;
  devicon: string;
}
