import { useState } from 'react';
import { Modal } from 'antd';
import { FaMobileAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";

interface IDetail {
  description: string[];
  technology: string;
  member: string;
  role: string;
  responsibilities: string[];
}

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: IDetail
}

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const handleOpenModal = (project: IProject) => {
    setDataDetail(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  const dataProjects: IProject[] = [
    {
      image: <FaMobileAlt
        size={60}
        color='#007AFF'
      />,
      title: 'Mobile system with AI integration',
      shortDescription: 'An Android application project integrating AI and Machine Learning. Responsibilities included classifying user intent, document fine-tuning, generating ChatGPT responses, and activating emergency services...',
      detail: {
        description: [
          `Dedicated to Australia Clients as a Backend Server developer, work closely with project stakeholders and 
          relative team to involving in building an Android application that integrates with AI Technologies and Machine 
          Learning, covering the entire process from requirements to go-live.`,
          `The project scope involves integrating tools like AI Technologies into workflows to classify user intent, 
          fine-tune documents, and generate responses from ChatGPT, activate emergency services. It also 
          includes incorporating emergency services and internal notifications.`
        ],
        technology: `Nodejs, ExpressJs, NestJs, MySQL, Redis, Microservices, AI/ML, ChatGPT, AWS, event-driven 
Kafka, Prometheus, Grafana, Figma, JIRA,Confluence, Postman, gRPC, Restful API`,
        member: '30 members',
        role: 'Backend Software Engineering',
        responsibilities: [
          `Architected and optimized database structures for robust, high-performance back-end servers, ensuring 
scalability and maintainability.`,
          `Played a pivotal role in architectural decision-making, contributing to process improvements and 
long-term technical strategy for backend systems.`,
          `Applied Test-Driven Development (TDD) practices, writing comprehensive unit and integration tests 
to guarantee backend reliability and minimize production issues.`,
          `Directed advanced SQL data management and storage strategies, leveraging deep expertise to design 
and optimize complex database systems. Integrated Redis caching to drastically enhance performance, 
reduce query latency, and ensure high availability for large-scale, data-intensive applications.`,
          `Continuously analyzed system performance metrics, proactively identifying and diagnosing 
performance bottlenecks. Led the implementation of targeted optimizations, resulting in significant 
improvements in efficiency, scalability, and overall system stability.`,
          `Engineered and optimized worker processes to efficiently handle background tasks, ensuring enhanced 
system performance, reliability, and scalability. Implemented best practices to streamline task execution, 
minimizing downtime and resource consumption.`,
        ],
      }
    },
    {
      image: <FaCalendarAlt
        size={60}
        color='#007AFF'
      />,
      title: 'Internship Booking Interview System ',
      shortDescription: 'An web application project which allow HR to submit the candidate Resumes and manager can book an interview...',
      detail: {
        description: [
          `HR personnel upload candidate resumes in PDF format, which are automatically scanned and stored in a 
structured database for easy retrieval.`,
          `Managers can apply advanced skill-based filters to efficiently search and shortlist candidates that match specific 
criteria.`,
          `The system facilitates seamless interview scheduling, allowing managers to book interviews directly through the 
platform.`,
          `Managers receive automated weekly email updates with a curated list of candidates based on their subscribed 
skill preferences, ensuring they remain informed of top talent.`
        ],
        technology: `Nodejs, ExpressJs, MongoDB, Redis, On-Premise, Trello, Github, Git.`,
        member: '5 members',
        role: 'Backend Software Engineering',
        responsibilities: [
          `Developed the automated resume scanning and storage system, enabling HR personnel to upload PDF resumes 
that are systematically parsed and saved in a structured database for efficient retrieval.`,
          `Designed and implemented advanced skill-based filtering algorithms, allowing managers to search and shortlist 
candidates based on specific skill sets, streamlining the hiring process.`,
          `Built the interview scheduling module, ensuring managers can seamlessly book interviews with shortlisted 
candidates through the platform.`,
          `Collaborated with cross-functional teams to ensure integration between the resume scanning, filtering, and 
interview scheduling functionalities. `,
          `Optimized database queries to handle large volumes of candidate data while maintaining high performance and 
reliability.`,
          `Developed and implemented an automated email notification system, providing managers with tailored candidate 
lists based on their subscribed skill preferences, ensuring they stay updated on relevant talent.`,
        ],
      }
    },
    {
      image: <MdOutlineSettingsSystemDaydream
        size={60}
        color='#007AFF'
      />,
      title: 'Isolation platform',
      shortDescription: `Creating a secure, isolated platform that enforces strict permissions and policies across various services. It ensures adherence to security protocols, safeguarding user data and system integrity by validating permissions in real-time and continuously monitoring policy compliance to prevent unauthorized access...`,
      detail: {
        description: [
          `This project aims to develop a highly secure, isolated platform designed to rigorously enforce permissions and 
policies across various services.`,
          `The platform will ensure that all access points adhere to stringent security protocols, safeguarding user data 
and system integrity.`,
          `By validating permissions in real-time and continually monitoring policy compliance, the system will provide a 
robust framework for protecting sensitive information, preventing unauthorized access, and maintaining overall 
security.`
        ],
        technology: `Nodejs, ExpressJs, MySQL, Postgres, Redis, Microservices, AWS, Prometheus, Grafana, 
Figma, JIRA, Confluence, Postman.`,
        member: '3 members',
        role: 'Backend Software Engineering',
        responsibilities: [
          `Use containerization or virtualization to further isolate services, reducing the attack surface and improving 
system security.`,
          `Troubleshot and resolved customer-reported bugs by replicating issues in AWS instances, enabling accurate 
diagnosis and effective problem resolution.`,
          `Actively collaborated with front-end, DevOps, and QA teams to ensure seamless integration across the entire 
development lifecycle. Facilitated communication to align technical and business goals, driving more cohesive 
and efficient project outcomes.`,
          `Architected and developed a secure, isolated platform to enforce permissions and policies across various 
services, ensuring compliance with stringent security protocols.`,
          `Designed and implemented real-time permission validation mechanisms to dynamically control access, 
preventing unauthorized interactions with sensitive resources.`,
          `Conducted performance and security testing, proactively identifying bottlenecks and vulnerabilities to enhance 
platform efficiency and security.`,
        ],
      }
    }
  ]
  return (
    <>
      <Modal
        title={dataDetail && dataDetail.detail ? `Project ${dataDetail.title}` : ''}
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={true}
      >
        {
          dataDetail &&
          <ul>
            <li><strong>Description:</strong></li>
            <ul>
              {dataDetail.detail.description.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <li><strong>Technology: </strong>{dataDetail.detail.technology}</li>
            <li><strong>Member: </strong>{dataDetail.detail.member}</li>
            <li><strong>Role: </strong>{dataDetail.detail.role}</li>
            <li><strong>Key responsibilities: </strong></li>
            <ul>
              {dataDetail.detail.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </ul>

        }
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Meet my amazing Projects</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li key={index} onClick={() => handleOpenModal(item)}> {/* Add onClick here */}
                      <div className="inner">
                        <div className="icon">
                          {item.image}
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;