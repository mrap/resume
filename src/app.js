'use strict';

const Locations = {
  LA: 'Los Angeles, CA',
  SF: 'San Francisco, CA',
};

const jobs = [
  {
    companyName: 'OTOY, Inc.',
    position: 'Senior Software Engineer',
    location: Locations.LA,
    startDate: 'February 2015',
    endDate: 'January 2016',
    faIcon: 'fa-braille',
  },
  {
    companyName: 'Rollbar, Inc.',
    position: 'Fullstack Engineer',
    location: Locations.SF,
    startDate: 'September 2014',
    endDate: 'October 2014',
    faIcon: 'fa-stack-overflow',
  },
  {
    companyName: 'Rise Labs, Inc.',
    position: 'Web & iOS Engineer',
    location: Locations.SF,
    startDate: 'June 2014',
    endDate: 'September 2014',
    faIcon: 'fa-cutlery',
  },
  {
    companyName: 'Freelance Engineer',
    position: 'Fullstack, Web, iOS',
    location: Locations.SF,
    startDate: 'March 2013',
    endDate: 'August 2014',
    faIcon: 'fa-briefcase',
  },
  {
    companyName: 'BlurtAbout, Inc.',
    position: 'Co-founder, Lead iOS Eng',
    location: Locations.SF,
    startDate: 'November 2011',
    endDate: 'March 2013',
    faIcon: 'fa-pied-piper',
  },
  {
    companyName: 'Apple, Inc.',
    position: 'Retail Specialist',
    location: Locations.SF,
    startDate: 'July 2011',
    endDate: 'November 2011',
    faIcon: 'fa-apple',
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
              <Timeline jobs={jobs} />
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
          title="The Story"
          faIcon="fa-clock-o"
        />
        {this.props.jobs.map(j => {
          return <TimelineItem job={j} />
        })}
      </div>
    );
  }
});

const TimelineItem = React.createClass({
  render: function() {
    return (
      <div className="row job">
        <div className="four columns">
          <div className="job-dates">
            <div>{this.props.job.startDate} -</div>
            <div>{this.props.job.endDate}</div>
          </div>
        </div>
        <div className="two columns">
          <div className="timeline-milestone">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className={`fa ${this.props.job.faIcon} fa-stack-1x fa-inverse`}></i>
            </span>
          </div>
        </div>
        <div className="six columns">
          <div className="job-info">
            <div className="job-company">
              {this.props.job.companyName}
            </div>
            <div className="job-position">
              {this.props.job.position}
            </div>
            <div className="job-location">
              {this.props.job.location}
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
          <div className="timeline-milestone">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className={`fa ${this.props.faIcon} fa-stack-1x fa-inverse`}></i>
            </span>
          </div>
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

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
