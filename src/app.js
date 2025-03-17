"use strict";

const Location = {
  CUPERTINO: "Cupertino, CA",
  LA: "Los Angeles, CA",
  SF: "San Francisco, CA",
  NYC: "New York City, NY",
};

const jobItems = [
  {
    title: "Google",
    role: "Web Solutions Engineer",
    location: Location.NYC,
    startDate: "Feb 2021",
    endDate: "Present",
    faIcon: "fa-google",
    details:
      "Led, designed, developed, and maintained impactful internal and external fullstack products that empower Google Ads sellside with critical intel and substantial FTE savings. Served as Tech Lead for Google's first external Certified Publisher Program portal, enhancing sales efficiency for thousands of users, accelerating pipeline velocity by 53%, and surfacing substantial revenue opportunities. Fully owned end-to-end design and implementation, including schema, infrastructure, API development, and overall architecture for a centralized analytics platform optimizing our entire tool portfolio, enabling strategic focus on high-impact projects and increasing targeted outcomes by over 20%. Also led a natural language data platform project, significantly enhancing organizational data accessibility and empowering data-driven decision-making.",
  },
  {
    title: "IIMORA",
    role: "Music Producer",
    location: Location.SF,
    startDate: "Mar 2018",
    endDate: "Aug 2020",
    faIcon: "fa-music",
    details:
      "Dedicated time to deeply engage with a passion for music production, independently releasing three albums and accumulating over 49K plays globally.",
  },
  {
    title: "Amazon Web Services",
    role: "Software Development Engineer II",
    location: Location.CUPERTINO,
    startDate: "Mar 2017",
    endDate: "Mar 2018",
    faIcon: "fa-amazon",
    details:
      "Trailblazed the next generation of mission-critical automation at AWS, Hardware Engineering. After identifying and addressing fundamental design flaws in existing approaches, I developed a proof of concept that reshaped the strategic direction of a revolutionary internal hardware collaboration platform. This pivotal contribution positioned me as the tech lead, placing me at the helm of a cross-functional team of senior and junior engineers. Under my leadership, we aligned on solutions projected to significantly reduce maintenance and scaling expenses by 2-3x, earning buy-in from senior stakeholders.",
  },
  {
    title: "Ubiquiti Networks",
    role: "Software Engineer",
    location: Location.LA,
    startDate: "Jan 2016",
    endDate: "Oct 2016",
    faIcon: "fa-video-camera",
    details:
      "Led Android development and significantly improved performance and maintainability for major video products, achieving real-time video decoding with a 75% reduction in memory usage. Curated a core Node.js application framework, establishing a stable, scalable foundation used across multiple critical products.",
  },
  {
    title: "OTOY",
    role: "Senior Software Engineer",
    location: Location.LA,
    startDate: "Feb 2015",
    endDate: "Jan 2016",
    faIcon: "fa-braille",
    details: `Engineered our blazingly fast streaming client: realtime desktops to mobile with super low latency @ +60fps.  Core engineer of Octane Render Cloud (ORC), a cloud graphics rendering platform that turned render "weeks" into "hours".  Led development of ORC's frontend dashboard.`,
  },
  {
    title: "Rollbar",
    role: "Fullstack Engineer",
    location: Location.SF,
    startDate: "Sept 2014",
    endDate: "Oct 2014",
    faIcon: "fa-stack-overflow",
    details:
      "Made issue management even easier by enabling users to connect and sync items with any of Rollbar's eleven integrated services, which include Github and Trello.  Made bugs easier to squash in Ruby by exposing local variable's state for each stack frame.",
  },
  {
    title: "Rise Labs",
    role: "iOS & Web Engineer",
    location: Location.SF,
    startDate: "Jun 2014",
    endDate: "Sept 2014",
    faIcon: "fa-cutlery",
    details:
      "Rebuilt the iOS app's camera to snap photos at 6.8x original quality, while only using half the memory.  Rebuilt the coaching dashboard to be fully responsive for all devices.  Created the new flexible photo layout for browsing user meals at a glance.  Hacked and shipped the beautiful homepage redesign in only three days.",
  },
  {
    title: "Freelance Fullstack Engineer",
    location: Location.SF,
    startDate: "Mar 2013",
    endDate: "Aug 2014",
    faIcon: "fa-briefcase",
    details:
      "Built and deployed a wide array of products on web, OSX, and iOS platforms.  Frequent, stable deployments via agile workflow.",
  },
  {
    title: "BlurtAbout",
    role: "Co-founder, iOS Engineer",
    location: Location.SF,
    startDate: "Nov 2011",
    endDate: "Mar 2013",
    faIcon: "fa-pied-piper",
    details:
      "All-hats founder doing anything and everything to create a relevant and super-connected social experience for mobile.",
  },
];

const projectItems = [
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

const languageIconItems = [
  {
    title: "Go",
    devicon: "devicon-go-plain",
  },
  {
    title: "JS",
    devicon: "devicon-javascript-plain",
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

const skillsIconItems = [
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

const tidbits = [
  "Personally built and deployed applications used by +100K users worldwide.",
  "Spritz needed 3 years and $3.5m to release a “demo” of their speed reading app. Built and deployed my own in 3 days.",
  "Rebuilt Rise’s iOS camera plugin: 6.8x the photo quality at only half the memory.",
  "Apple has been featuring Sunriser, iOS app, in the App Store since May 2014.",
  "Open-sourced one of the first JSON parsers for Swift.",
];

const App = React.createClass({
  render: function () {
    return (
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="nine columns">
              <HeroTitle
                title="Michael Rapadas"
                subtitle="A high-impact, ultra-versatile software engineer fueled by captivating projects and driven teams."
                avatarSrc="/src/img/avatar.png"
              />
            </div>
            <div className="three columns contact-info-wrapper">
              <div className="contact-info">
                <div className="inline-icon-item">
                  <i className="fa fa-mobile fa-fw"></i>
                  <span>(415) 887-8085</span>
                </div>
                <div className="inline-icon-item">
                  <i className="fa fa-envelope fa-fw"></i>
                  <span>mike@mrap.me</span>
                </div>
                <div className="inline-icon-item">
                  <i className="fa fa-github fa-fw"></i>
                  <span>github.com/mrap</span>
                </div>
                <div className="inline-icon-item">
                  <i className="fa fa-user fa-fw"></i>
                  <span>http://mrap.me</span>
                </div>
                <div className="inline-icon-item">
                  <i className="fa fa-spotify fa-fw"></i>
                  <span>IIMORA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <Timeline
                title="The Story"
                headerIcon="fa-clock-o"
                items={jobItems}
                pageLine={true}
              />
              <Timeline
                title="Pet Projects"
                headerIcon="fa-rocket"
                items={projectItems}
              />
            </div>
            <div className="four columns">
              <IconItems
                title="Fluency"
                faIcon="fa-code"
                items={languageIconItems}
              />
              <IconItems
                title="Skills"
                faIcon="fa-cube"
                items={skillsIconItems}
              />
              <SectionHeader title="Tidbits" faIcon="fa-thumbs-up" />
              {tidbits.map((t) => {
                return (
                  <div className="row tidbit">
                    <div className="twelve columns">{t}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="corner-footer">
            I <i className="fa fa-heart-o"></i>{" "}
            <i className="devicon-vim-plain"></i>
          </div>
        </div>
      </div>
    );
  },
});

const HeroTitle = React.createClass({
  render: function () {
    return (
      <div className="hero-header">
        <div className="row">
          <div className="twelve columns">
            <div className="hero-title">
              <div className="title">{this.props.title}</div>
              <div className="subtitle">{this.props.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

const Timeline = React.createClass({
  render: function () {
    return (
      <div className="timeline">
        <TimelineHeader
          title={this.props.title}
          faIcon={this.props.headerIcon}
        />
        <div className="timeline-items">
          {this.props.pageLine ? <div className="page-line"></div> : null}
          {this.props.items.map((item) => {
            return <TimelineItem item={item} />;
          })}
        </div>
      </div>
    );
  },
});

const TimelineItem = React.createClass({
  render: function () {
    return (
      <div className="row timeline-item">
        <div className="four columns">
          <div className="item-dates">
            <div>{this.props.item.startDate} -</div>
            <div>{this.props.item.endDate}</div>
          </div>
        </div>
        <div className="one column">
          <TimelineMilestoneIcon faIcon={this.props.item.faIcon} />
        </div>
        <div className="seven columns">
          <TimelineItemHeader {...this.props} />
          <div className="item-location">{this.props.item.location}</div>
          <div className="item-details">{this.props.item.details}</div>
        </div>
      </div>
    );
  },
});

const TimelineItemHeader = React.createClass({
  render: function () {
    let role = null;
    if (this.props.item.role) {
      role = <div className="item-role">{this.props.item.role}</div>;
    }

    return (
      <div className="item-header">
        {role}
        <div className="item-title">{this.props.item.title}</div>
      </div>
    );
  },
});

const SectionHeader = React.createClass({
  render: function () {
    return <div className="section-header-title">{this.props.title}</div>;
  },
});

const TimelineHeader = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="three columns">
          <div className="invisible">Filler</div>
        </div>
        <div className="two columns">
          <div className="invisible">Filler</div>
        </div>
        <div className="seven columns">
          <SectionHeader {...this.props} />
        </div>
      </div>
    );
  },
});

const TimelineMilestoneIcon = React.createClass({
  render: function () {
    const stackClassName = this.props.isLarge ? "fa-stack fa-lg" : "fa-stack";

    return (
      <div className="timeline-milestone-icon">
        <span className={stackClassName}>
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={`fa ${this.props.faIcon} fa-stack-1x fa-inverse`}></i>
        </span>
      </div>
    );
  },
});

const IconItems = React.createClass({
  render: function () {
    return (
      <div className="icon-items">
        <SectionHeader title={this.props.title} faIcon={this.props.faIcon} />
        <div className="row">
          {this.props.items.map((item) => {
            return (
              <div className="three columns">
                <IconItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
});

const IconItem = React.createClass({
  render: function () {
    return (
      <div className="icon-item">
        <i className={`${this.props.devicon}`}></i>
        <div className="title">{this.props.title}</div>
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById("content"));
