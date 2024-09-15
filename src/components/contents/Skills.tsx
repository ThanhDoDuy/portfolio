import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div className="arlo_tm_section" id="skills">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
        <div className="arlo_tm_title_holder">
          <h3>Skills</h3>
          <span>Main Skills</span>
        </div>
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Frontend skills</h4>
                <ul>
                  <li>Frameworks/Libraries: Experienced in using Bootstrap and React.js for building responsive and dynamic web interfaces.</li>
                  <li>Responsive Design: Focused on creating web-friendly designs to ensure a consistent user experience.</li>
                </ul>
              </div>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">HTML/CSS/Javascript</span>
                      <span className="number">90%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={90}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">React.JS(Typescript)/Redux</span>
                      <span className="number">95%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Design UI/UX</span>
                      <span className="number">80%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={80}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Backend Skills</h4>
                <ul>
                  <li>Frameworks/Libraries: Proficient in Nodejs, ExpressJS, NestJs to build scalable server-side applications and RESTful APIs, gRPC.</li>
                  <li>Databases: Experienced with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) for data management.</li>
                  <li>Authentication/Authorization: Implemented secure authentication using JWT, OAuth for user verification and RBAC.</li>
                  <li>Communication Technologies: Developed RESTful APIs and used gRPC, MQTT, RabbitMQ, and Kafka for reliable data exchange.</li>
                  <li>Containerization & Orchestration: Proficient in using Docker for application containerization and orchestration.</li>
                  <li>Cloud Services: Knowledgeable in utilizing AWS for cloud infrastructure and deployment.</li>
                  <li>Version Control & Collaboration: Experienced in Git, Bitbucket, and JIRA for code versioning and project management.</li>
                  <li>Testing Frameworks: Implemented unit and integration testing using Jest and Jasmine to ensure code quality.</li>
                  <li>Architectural Patterns: Designed and maintained both Microservices and Monolithic architectures for various projects.</li>
                </ul>
              </div>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Nodejs</span>
                      <span className="number">95%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">ExpressJs/ Nestjs</span>
                      <span className="number">95%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">MongoDB/ Redis</span>
                      <span className="number">90%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={90}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">MySQL/ Postgres</span>
                      <span className="number">95%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Rest APIs/ gRPC</span>
                      <span className="number">95%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Mqtt/ RabbitMQ/ Kafka</span>
                      <span className="number">90%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={90}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Docker</span>
                      <span className="number">90%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={90}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Git</span>
                      <span className="number">95%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Microservices</span>
                      <span className="number">90%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={90}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">Jest/ Jasmine</span>
                      <span className="number">95%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                  <div className="arlo_tm_progress">
                    <span>
                      <span className="label">AWS</span>
                      <span className="number">80%</span>
                    </span>
                    <span className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={80}
                        bgColor={'#333'}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;