'use strict';

const Location = {
  LA: 'Los Angeles, CA',
  SF: 'San Francisco, CA',
};

const jobItems = [
  {
    title: 'OTOY, Inc.',
    subtitle: 'Senior Software Engineer',
    detail: Location.LA,
    startDate: 'February 2015',
    endDate: 'January 2016',
    faIcon: 'fa-braille',
  },
  {
    title: 'Rollbar, Inc.',
    subtitle: 'Fullstack Engineer',
    detail: Location.SF,
    startDate: 'September 2014',
    endDate: 'October 2014',
    faIcon: 'fa-stack-overflow',
  },
  {
    title: 'Rise Labs, Inc.',
    subtitle: 'Web & iOS Engineer',
    detail: Location.SF,
    startDate: 'June 2014',
    endDate: 'September 2014',
    faIcon: 'fa-cutlery',
  },
  {
    title: 'Freelance Engineer',
    subtitle: 'Fullstack, Web, iOS',
    detail: Location.SF,
    startDate: 'March 2013',
    endDate: 'August 2014',
    faIcon: 'fa-briefcase',
  },
  {
    title: 'BlurtAbout, Inc.',
    subtitle: 'Co-founder, Lead iOS Eng',
    detail: Location.SF,
    startDate: 'November 2011',
    endDate: 'March 2013',
    faIcon: 'fa-pied-piper',
  },
  {
    title: 'Apple, Inc.',
    subtitle: 'Retail Specialist',
    detail: Location.SF,
    startDate: 'July 2011',
    endDate: 'November 2011',
    faIcon: 'fa-apple',
  },
];

const projectItems = [
  {
    title: 'Zen Typing',
    subtitle: 'A smarter way to improve your typing. Open-sourced web app built with AngularJS + Go. Uses an e cent word analyzer library built in Go.',
    detail: 'Github: mrap/combo, mrap/wordpatterns',
    startDate: 'December 2014',
    endDate: 'January 2015',
    faIcon: 'fa-keyboard-o',
  },
  {
    title: 'Skimi.io',
    subtitle: 'Read a zillion times faster. Speed-reading web app built with AngularJS+Rails.',
    detail: 'Github: mrap/skim',
    startDate: 'March 7th, 2014',
    endDate: 'March 9th, 2014',
    faIcon: 'fa-book',
  },
];

const languageIconItems = [
  {
    title: 'Go',
    devicon: 'devicon-go-plain',
  },
  {
    title: 'Swift/Obj-C',
    devicon: 'devicon-apple-original',
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
    title: 'RoR',
    devicon: 'devicon-rails-plain',
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
                <i className="fa fa-mobile fa-fw"></i><span>(415)887-8085</span>
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
            <div className="seven columns">
              <Timeline
                title="The Story"
                headerIcon="fa-clock-o"
                items={jobItems}
              />
              <Timeline
                title="Pet Projects"
                headerIcon="fa-rocket"
                items={projectItems}
              />
            </div>
            <div className="five columns">
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
              <TimelineHeader
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
          <div className="five columns">
            <img width="122" src={this.props.avatarSrc} alt="Me" className="u-max-full-width"/>
          </div>
          <div className="hero-title seven columns">
            <div className="title">{this.props.title}</div>
            <div className="subtitle">{this.props.subtitle}</div>
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
          <div className="page-line"></div>
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
          <div className="item-info">
            <div className="item-title">
              {this.props.item.title}
            </div>
            <div className="item-subtitle">
              {this.props.item.subtitle}
            </div>
            <div className="item-detail">
              {this.props.item.detail}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const TimelineHeader = React.createClass({
  render: function() {
    return (
      <div className="row timeline-header">
        <div className="three columns">
          <div className="invisible">Filler</div>
        </div>
        <div className="two columns">
          <TimelineMilestoneIcon
            faIcon={this.props.faIcon}
            isLarge={true}
          />
        </div>
        <div className="seven columns">
          <div className="timeline-header-title">
            {this.props.title}
          </div>
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
        <TimelineHeader
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
