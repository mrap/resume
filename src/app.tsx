import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  jobItems,
  languageIconItems,
  projectItems,
  skillsIconItems,
  tidbits,
} from "./data";
import {
  HeroTitleProps,
  IconItemProps,
  IconItemsProps,
  SectionHeaderProps,
  TimelineHeaderProps,
  TimelineItemHeaderProps,
  TimelineItemProps,
  TimelineMilestoneIconProps,
  TimelineProps,
} from "./types";

const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  subtitle,
  avatarSrc,
}) => {
  return (
    <div className="hero-header">
      <div className="row">
        <div className="twelve columns">
          <div className="hero-title">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, faIcon }) => {
  return <div className="section-header-title">{title}</div>;
};

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ title, faIcon }) => {
  return (
    <div className="row">
      <div className="three columns">
        <div className="invisible">Filler</div>
      </div>
      <div className="two columns">
        <div className="invisible">Filler</div>
      </div>
      <div className="seven columns">
        <SectionHeader title={title} faIcon={faIcon} />
      </div>
    </div>
  );
};

const TimelineMilestoneIcon: React.FC<TimelineMilestoneIconProps> = ({
  faIcon,
  isLarge,
}) => {
  const stackClassName = isLarge ? "fa-stack fa-lg" : "fa-stack";

  return (
    <div className="timeline-milestone-icon">
      <span className={stackClassName}>
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className={`fa ${faIcon} fa-stack-1x fa-inverse`}></i>
      </span>
    </div>
  );
};

const TimelineItemHeader: React.FC<TimelineItemHeaderProps> = ({ item }) => {
  let role = null;
  if ("role" in item) {
    role = <div className="item-role">{item.role}</div>;
  }

  return (
    <div className="item-header">
      {role}
      <div className="item-title">{item.title}</div>
    </div>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => {
  return (
    <div className="row timeline-item">
      <div className="four columns">
        <div className="item-dates">
          <div>{item.startDate} -</div>
          <div>{item.endDate}</div>
        </div>
      </div>
      <div className="one column">
        <TimelineMilestoneIcon faIcon={item.faIcon} />
      </div>
      <div className="seven columns">
        <TimelineItemHeader item={item} />
        <div className="item-location">{item.location}</div>
        <div className="item-details">{item.details}</div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  title,
  headerIcon,
  items,
  pageLine,
}) => {
  return (
    <div className="timeline">
      <TimelineHeader title={title} faIcon={headerIcon} />
      <div className="timeline-items">
        {pageLine ? <div className="page-line"></div> : null}
        {items.map((item, index) => {
          return <TimelineItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

const IconItem: React.FC<IconItemProps> = ({ title, devicon }) => {
  return (
    <div className="icon-item">
      <i className={`${devicon}`}></i>
      <div className="title">{title}</div>
    </div>
  );
};

const IconItems: React.FC<IconItemsProps> = ({ title, faIcon, items }) => {
  return (
    <div className="icon-items">
      <SectionHeader title={title} faIcon={faIcon} />
      <div className="row">
        {items.map((item, index) => {
          return (
            <div key={index} className="three columns">
              <IconItem title={item.title} devicon={item.devicon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App: React.FC = () => {
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
            {tidbits.map((t, index) => {
              return (
                <div key={index} className="row tidbit">
                  <div className="twelve columns">
                    <div>{t.text}</div>
                    <div className="subtext">{t.subtext}</div>
                  </div>
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
};

const root = ReactDOM.createRoot(
  document.getElementById("content") as HTMLElement
);
root.render(<App />);
