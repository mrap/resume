import {
  JobItem,
  LanguageIconItem,
  ProjectItem,
  SkillsIconItem,
  Tidbit,
} from "./types";

export const Location = {
  CUPERTINO: "Cupertino, CA",
  LA: "Los Angeles, CA",
  SF: "San Francisco, CA",
  NYC: "New York City, NY",
};

export const jobItems: JobItem[] = [
  {
    title: "Google",
    role: "Web Solutions Engineer",
    location: Location.NYC,
    startDate: "Feb 2021",
    endDate: "Present",
    faIcon: "fa-google",
    brief:
      "Technical lead for internal and external web products serving Google Ads teams.",
    details:
      "Led and built impactful fullstack products for Google Ads, including the first external Certified Publisher Program portal that accelerated pipeline velocity by 53%. Designed and implemented a centralized analytics platform, increasing targeted outcomes by 20%. Led a natural language data platform project that significantly enhanced organizational data accessibility.",
  },
  {
    title: "IIMORA",
    role: "Music Producer",
    location: Location.SF,
    startDate: "Mar 2018",
    endDate: "Aug 2020",
    faIcon: "fa-music",
    brief:
      "Independent electronic music production with global audience reach.",
    details:
      "Released three electronic music albums independently, reaching 49K+ plays globally.",
  },
  {
    title: "Amazon Web Services",
    role: "Software Development Engineer II",
    location: Location.CUPERTINO,
    startDate: "Mar 2017",
    endDate: "Mar 2018",
    faIcon: "fa-amazon",
    brief:
      "Lead engineer for next-gen hardware engineering automation platform.",
    details:
      "Led development of AWS Hardware Engineering's next-gen automation platform after identifying design flaws in existing systems. As tech lead, directed a cross-functional team that created solutions projected to reduce maintenance and scaling costs by 2-3x.",
  },
  {
    title: "Ubiquiti Networks",
    role: "Software Engineer",
    location: Location.LA,
    startDate: "Jan 2016",
    endDate: "Oct 2016",
    faIcon: "fa-video-camera",
    brief: "Android and Node.js development for video surveillance products.",
    details:
      "Led Android development for major video products, achieving real-time video decoding with 75% reduced memory usage. Created a core Node.js application framework used across multiple critical products.",
  },
  {
    title: "OTOY",
    role: "Senior Software Engineer",
    location: Location.LA,
    startDate: "Feb 2015",
    endDate: "Jan 2016",
    faIcon: "fa-braille",
    brief:
      "Core engineer for cloud rendering platform and streaming technology.",
    details:
      "Engineered streaming client for real-time desktops to mobile at +60fps. Core developer of Octane Render Cloud, turning render 'weeks' into 'hours'. Led frontend dashboard development.",
  },
  {
    title: "Rollbar",
    role: "Fullstack Engineer",
    location: Location.SF,
    startDate: "Sept 2014",
    endDate: "Oct 2014",
    faIcon: "fa-stack-overflow",
    brief: "Implemented service integrations and Ruby debugging improvements.",
    details:
      "Enabled users to connect and sync items with eleven integrated services including Github and Trello. Enhanced Ruby debugging by exposing local variable state for each stack frame.",
  },
  {
    title: "Rise Labs",
    role: "iOS & Web Engineer",
    location: Location.SF,
    startDate: "Jun 2014",
    endDate: "Sept 2014",
    faIcon: "fa-cutlery",
    brief:
      "Enhanced mobile and web applications for nutrition coaching platform.",
    details:
      "Rebuilt iOS camera to deliver 6.8x photo quality while halving memory usage. Created responsive coaching dashboard and flexible photo layout for meal browsing. Shipped homepage redesign in three days.",
  },
  {
    title: "Freelance Fullstack Engineer",
    location: Location.SF,
    startDate: "Mar 2013",
    endDate: "Aug 2014",
    faIcon: "fa-briefcase",
    brief:
      "Delivered full-stack web, iOS, and OSX applications for various clients.",
    details:
      "Built and deployed diverse products for web, OSX, and iOS platforms using agile workflow with frequent, stable deployments.",
  },
  {
    title: "BlurtAbout",
    role: "Co-founder, iOS Engineer",
    location: Location.SF,
    startDate: "Nov 2011",
    endDate: "Mar 2013",
    faIcon: "fa-pied-piper",
    brief: "Co-founded and built mobile social experience from the ground up.",
    details:
      "Founded and built a connected social experience for mobile, handling all aspects from development to business strategy.",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Zen Typing",
    location: "Github: mrap/combo, mrap/wordpatterns",
    startDate: "Dec 2014",
    endDate: "Jan 2015",
    faIcon: "fa-keyboard-o",
    details:
      "A smarter way to improve your typing. Open-sourced web app built with AngularJS + Go. Uses a superfast word analyzer library built in Go.",
  },
  {
    title: "Skimi.io",
    location: "Github: mrap/skim",
    startDate: "Mar 7th, 2014",
    endDate: "Mar 9th, 2014",
    faIcon: "fa-book",
    details:
      "Read a zillion times faster. Speed-reading web app built with AngularJS+Rails.",
  },
];

export const languageIconItems: LanguageIconItem[] = [
  {
    title: "Go",
    devicon: "devicon-go-plain",
  },
  {
    title: "TypeScript",
    devicon: "devicon-typescript-plain",
  },
  {
    title: "Java",
    devicon: "devicon-java-plain",
  },
  {
    title: "Swift/Obj-C",
    devicon: "devicon-apple-original",
  },
  {
    title: "Ruby",
    devicon: "devicon-ruby-plain",
  },
  {
    title: "Python",
    devicon: "devicon-python-plain",
  },
  {
    title: "C",
    devicon: "devicon-c-plain",
  },
  {
    title: "C++",
    devicon: "devicon-cplusplus-plain",
  },
];

export const skillsIconItems: SkillsIconItem[] = [
  {
    title: "Node.js",
    devicon: "devicon-nodejs-plain",
  },
  {
    title: "React",
    devicon: "devicon-react-original",
  },
  {
    title: "Android",
    devicon: "devicon-android-plain",
  },
  {
    title: "RoR",
    devicon: "devicon-rails-plain",
  },
  {
    title: "AngularJS",
    devicon: "devicon-angularjs-plain",
  },
  {
    title: "CSS",
    devicon: "devicon-css3-plain",
  },
  {
    title: "Sass",
    devicon: "devicon-sass-original",
  },
  {
    title: "HTML",
    devicon: "devicon-html5-plain",
  },
  {
    title: "Redis",
    devicon: "devicon-redis-plain",
  },
  {
    title: "MongoDB",
    devicon: "devicon-mongodb-plain",
  },
  {
    title: "Postgres",
    devicon: "devicon-postgresql-plain",
  },
  {
    title: "Webrtc",
    devicon: "fa fa-connectdevelop",
  },
];

export const tidbits: Tidbit[] = [
  {
    text: "Personally built and deployed applications used by +100K users worldwide.",
  },
  {
    text: `Spritz needed 3 years and $3.5m to release a "demo" of their speed reading app. Built and deployed my own in 3 days.`,
  },
  {
    text: "Rebuilt Rise's iOS camera plugin: 6.8x the photo quality at only half the memory.",
  },
  {
    text: "Open-sourced one of the first JSON parsers for Swift.",
    subtext: "Github: mrap/SwiftJSONParser",
  },
];
