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
    faIcon: 'fa-keyboard-o',
  },
];

const App = React.createClass({
  render: function() {
    return (
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <HeroTitle
                title="Mike Rapadas"
                subtitle="Building Beyond Myself"
                avatarSrc="/src/img/avatar.png"
              />
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
            <div className="one-half column">
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
        <div className="page-line"></div>
        <TimelineHeader
          title={this.props.title}
          faIcon={this.props.headerIcon}
        />
        {this.props.items.map(item => {
          return <TimelineItem item={item} />
        })}
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
        <div className="two columns">
          <TimelineMilestoneIcon faIcon={this.props.item.faIcon} />
        </div>
        <div className="six columns">
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
        <div className="four columns">
          <div className="invisible">Filler</div>
        </div>
        <div className="two columns">
          <TimelineMilestoneIcon
            faIcon={this.props.faIcon}
            isLarge={true}
          />
        </div>
        <div className="six columns">
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
ReactDOM.render(
  <App />,
  document.getElementById('content')
);
