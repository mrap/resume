'use strict';

const Location = {
  CUPERTINO: 'Cupertino, CA',
  LA: 'Los Angeles, CA',
  SF: 'San Francisco, CA',
};

const jobItems = [
  {
    title: 'Amazon Web Services',
    role: 'Software Development Engineer',
    location: Location.CUPERTINO,
    startDate: 'March 2017',
    endDate: 'Present',
    faIcon: 'fa-amazon',
    details: "Trailblazing the next generation of mission-critical automation at AWS, Hardware Engineering.",
  },
  {
    title: 'Ubiquiti Networks',
    role: 'Software Engineer',
    location: Location.LA,
    startDate: 'January 2016',
    endDate: 'January 2017',
    faIcon: 'fa-video-camera',
    details: "Curated the core framework that backs our node.js application architecture. Led Android development of major video products, vastly increasing stability, performance, and maintainability.  Rebuilt our core Android video decoder to achieve real-time decoding and rendering without drift; eliminating 100% of related crashes while using 25% the original memory.",
  },
  {
    title: 'OTOY',
    role: 'Senior Software Engineer',
    location: Location.LA,
    startDate: 'February 2015',
    endDate: 'January 2016',
    faIcon: 'fa-braille',
    details: "Built an awesome streaming client that streams desktops to mobile with super low latency @ +60fps.  Core member of the Octane Render Cloud (ORC) team. We created a cloud graphics rendering platform that transformed render times from weeks into hours.  Led the development of ORC's super-performant real-time frontend UI.",
  },
  {
    title: 'Rollbar',
    role: 'Fullstack Engineer',
    location: Location.SF,
    startDate: 'September 2014',
    endDate: 'October 2014',
    faIcon: 'fa-stack-overflow',
    details: "Made issue management even easier by enabling users to connect and sync items with any of Rollbar's eleven integrated services, which include Github and Trello.  Made bugs easier to squash in Ruby by exposing local variable's state for each stack frame.",
  },
  {
    title: 'Rise Labs',
    role: 'iOS & Web Engineer',
    location: Location.SF,
    startDate: 'June 2014',
    endDate: 'September 2014',
    faIcon: 'fa-cutlery',
    details: "Rebuilt the iOS app's camera to snap photos at 6.8x original quality, while only using half the memory.  Rebuilt the coaching dashboard to be fully responsive for desktops, netbooks, and tablets.  Created the new flexible photo layout for browsing user meals at a glance.  Coded up a beautiful, full homepage redesign that shipped under a week.",
  },
  {
    title: 'Freelance Fullstack Engineer',
    location: Location.SF,
    startDate: 'March 2013',
    endDate: 'August 2014',
    faIcon: 'fa-briefcase',
    details: "Built and deployed a wide array of products on web, OSX, and iOS platforms.  Frequent, stable deployments via agile workflow.",
  },
  {
    title: 'BlurtAbout',
    role: 'Co-founder, iOS Engineer',
    location: Location.SF,
    startDate: 'November 2011',
    endDate: 'March 2013',
    faIcon: 'fa-pied-piper',
    details: "All-hats founder doing anything and everything to create a relevant and super-connected social experience for mobile.",
  },
];

const projectItems = [
  {
    title: 'Zen Typing',
    location: 'Github: mrap/combo, mrap/wordpatterns',
    startDate: 'December 2014',
    endDate: 'January 2015',
    faIcon: 'fa-keyboard-o',
    details: 'A smarter way to improve your typing. Open-sourced web app built with AngularJS + Go. Uses a superfast word analyzer library built in Go.',
  },
  {
    title: 'Skimi.io',
    location: 'Github: mrap/skim',
    startDate: 'March 7th, 2014',
    endDate: 'March 9th, 2014',
    faIcon: 'fa-book',
    details: 'Read a zillion times faster. Speed-reading web app built with AngularJS+Rails.',
  },
];

const languageIconItems = [
  {
    title: 'Go',
    devicon: 'devicon-go-plain',
  },
  {
    title: 'JS',
    devicon: 'devicon-javascript-plain',
  },
  {
    title: 'Java',
    devicon: 'devicon-java-plain',
  },
  {
    title: 'Swift/Obj-C',
    devicon: 'devicon-apple-original',
  },
  {
    title: 'Ruby',
    devicon: 'devicon-ruby-plain',
  },
  {
    title: 'Python',
    devicon: 'devicon-python-plain',
  },
  {
    title: 'C',
    devicon: 'devicon-c-plain',
  },
  {
    title: 'C++',
    devicon: 'devicon-cplusplus-plain',
  },
];

const skillsIconItems = [
  {
    title: 'Node.js',
    devicon: 'devicon-nodejs-plain',
  },
  {
    title: 'React',
    devicon: 'devicon-react-original',
  },
  {
    title: 'Android',
    devicon: 'devicon-android-plain',
  },
  {
    title: 'RoR',
    devicon: 'devicon-rails-plain',
  },
  {
    title: 'AngularJS',
    devicon: 'devicon-angularjs-plain',
  },
  {
    title: 'CSS',
    devicon: 'devicon-css3-plain',
  },
  {
    title: 'Sass',
    devicon: 'devicon-sass-original',
  },
  {
    title: 'HTML',
    devicon: 'devicon-html5-plain',
  },
  {
    title: 'Redis',
    devicon: 'devicon-redis-plain',
  },
  {
    title: 'MongoDB',
    devicon: 'devicon-mongodb-plain',
  },
  {
    title: 'Postgres',
    devicon: 'devicon-postgresql-plain',
  },
  {
    title: 'Webrtc',
    devicon: 'fa fa-connectdevelop',
  },
];

const tidbits = [
  'Personally built and deployed applications used by +100K users worldwide.',
  'Spritz needed 3 years and $3.5m to release a “demo” of their speed reading app. Built and deployed my own in 3 days.',
  'Rebuilt Rise’s iOS camera plugin: 6.8x the photo quality at only half the memory.',
  'Apple has been featuring Sunriser, iOS app, in the App Store since May 2014.',
  'Open-sourced one of the first JSON parsers for Swift.',
];

const App = React.createClass({
  render: function() {
    return (
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="seven columns">
              <HeroTitle
                title="Mike Rapadas"
                subtitle="Building Beyond Myself"
                avatarSrc="/src/img/avatar.png"
              />
            </div>
            <div className="five columns contact-info">
              <div className="inline-icon-item">
                <i className="fa fa-mobile fa-fw"></i><span>(415) 887-8085</span>
              </div>
              <div className="inline-icon-item">
                <i className="fa fa-envelope fa-fw"></i><span>mike@mrap.me</span>
              </div>
              <div className="inline-icon-item">
                <i className="fa fa-github fa-fw"></i><span>github.com/mrap</span>
              </div>
              <div className="inline-icon-item">
                <i className="fa fa-user fa-fw"></i><span>http://mrap.me</span>
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
              <SectionHeader
                title="Tidbits"
                faIcon="fa-thumbs-up"
              />
              {
                tidbits.map(t => {
                  return (
                    <div className="row tidbit">
                      <div className="twelve columns">
                        {t}
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>

          <div className="corner-footer">
            I <i className="fa fa-heart-o"></i> <i className="devicon-vim-plain"></i>
          </div>
        </div>
      </div>
    );
  }
});

const HeroTitle = React.createClass({
  render: function() {
    return (
      <div className="hero-header">
        <div className="row">
          <div className="five columns avatar">
            <img width="122" src={this.props.avatarSrc} alt="Me" className="u-max-full-width"/>
          </div>
          <div className="seven columns">
            <div className="hero-title">
              <div className="title">{this.props.title}</div>
              <div className="subtitle">{this.props.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const Timeline = React.createClass({
  render: function() {
    return (
      <div className="timeline">
        <TimelineHeader
          title={this.props.title}
          faIcon={this.props.headerIcon}
        />
        <div className="timeline-items">
          {(this.props.pageLine) ? <div className="page-line"></div> : null}
          {this.props.items.map(item => {
            return <TimelineItem item={item} />
          })}
        </div>
      </div>
    );
  }
});

const TimelineItem = React.createClass({
  render: function() {
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
          <div className="item-location">
            {this.props.item.location}
          </div>
          <div className="item-details">
            {this.props.item.details}
          </div>
        </div>
      </div>
    );
  }
});

const TimelineItemHeader = React.createClass({
  render: function() {
    let role = null;
    if (this.props.item.role) {
      role = (
        <div className="item-role">
          {this.props.item.role}
          <span className="item-role-at"> at </span>
        </div>
      );
    }

    return (
      <div className="item-header">
        {role}
        <div className="item-title">
          {this.props.item.title}
        </div>
      </div>
    );
  }
});

const SectionHeader = React.createClass({
  render: function() {
    return (
      <div className="section-header-title">
        {this.props.title}
      </div>
    );
  }
});

const TimelineHeader = React.createClass({
  render: function() {
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
  }
});

const TimelineMilestoneIcon = React.createClass({
  render: function() {
    const stackClassName = this.props.isLarge ? "fa-stack fa-lg" : "fa-stack";

    return (
      <div className="timeline-milestone-icon">
        <span className={stackClassName}>
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={`fa ${this.props.faIcon} fa-stack-1x fa-inverse`}></i>
        </span>
      </div>
    );
  }
});

const IconItems = React.createClass({
  render: function() {
    return (
      <div className="icon-items">
        <SectionHeader
          title={this.props.title}
          faIcon={this.props.faIcon}
        />
        <div className="row">
          {this.props.items.map(item => {
            return (
              <div className="three columns">
                <IconItem {...item} />
              </div>
              );
          })}
        </div>
      </div>
    );
  }
});

const IconItem = React.createClass({
  render: function() {
    return (
      <div className="icon-item">
        <i className={`${this.props.devicon}`}></i>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
