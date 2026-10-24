import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Award,
  HeartHandshake,
  Database,
  ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = {
  Programming: ["Python", "SQL", "C", "Java"],
  "Databases & Analytics": [
    "PostgreSQL",
    "SQL Server",
    "SQLite",
    "NoSQL fundamentals",
    "Excel",
    "Power BI",
    "Google Sheets"
  ],
  "Developer Tools": ["Git", "GitHub", "Docker", "Ubuntu", "VS Code"],
  "Currently Learning": [
    "ETL / ELT",
    "Data modeling",
    "Apache Spark",
    "Apache Kafka",
    "Workflow orchestration",
    "Terraform",
    "Google Cloud"
  ]
};

const projects = [
  {
    number: "01",
    title: "EasyPark",
    subtitle: "Parking Management System",
    status: "Academic project",
    description:
      "A parking management application built with Python Tkinter and PostgreSQL, using relational schemas and SQL to support parking-management functionality.",
    tags: ["Python", "Tkinter", "PostgreSQL", "SQL"],
    icon: "parking"
  },
  {
    number: "02",
    title: "DormSense",
    subtitle: "Dormitory Sensing & Monitoring",
    status: "In progress",
    description:
      "An ongoing project exploring sensing and monitoring for dormitory environments. More details will be added as the project develops.",
    tags: ["IoT", "Monitoring", "In progress"],
    icon: "sensor"
  }
];

function SectionHeading({ eyebrow, title, number }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <span className="section-number">{number}</span>
    </div>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function App() {
  return (
    <main className="page-shell">
      <nav className="topbar">
        <a className="wordmark" href="#top" aria-label="Aymane home">
          AE<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="#contact">
          <span className="status-dot" /> Open to opportunities
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> COMPUTER SCIENCE · BIG DATA ANALYTICS
          </span>
          <h1>
            Building with data.
            <br />
            <span>Learning by doing.</span>
          </h1>
          <p className="hero-description">
            I'm Aymane, a Computer Science student at Al Akhawayn University
            interested in data engineering, databases, and the systems that turn
            data into something useful.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowDownRight size={16} />
            </a>
            <a className="button button-quiet" href="#contact">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={14} /> Casablanca, Morocco
            </span>
            <span>
              <GraduationCap size={15} /> Al Akhawayn University
            </span>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src={`${import.meta.env.BASE_URL}portrait.png`} alt="Portrait of Aymane Ezzourkani" />
          </div>
          <div className="portrait-caption">
            <span className="caption-dot" /> CURIOUS BY NATURE <span>·</span>{" "}
            BUILDING STEP BY STEP
          </div>
          <div className="portrait-index">01 / ABOUT</div>
        </div>
      </section>

      <section className="intro-grid" id="about">
        <div className="intro-label">
          <span className="eyebrow">01 — OVERVIEW</span>
          <h2>
            A little about
            <br />
            what I do.
          </h2>
        </div>
        <div className="intro-text">
          <p className="large-copy">
            I'm pursuing a B.S. in Computer Science with a specialization in Big
            Data Analytics and a minor in Business Administration.
          </p>
          <p>
            I'm building my foundation in programming, databases, and analytics
            through coursework, projects, and hands-on learning. I'm especially
            interested in how data is collected, organized, processed, and made
            useful.
          </p>
          <p>
            I'm looking to keep learning, contribute to practical projects, and
            grow into a data engineering role.
          </p>
          <div className="mini-stats">
            <div>
              <strong>2027</strong>
              <span>Expected graduation</span>
            </div>
            <div>
              <strong>03+</strong>
              <span>Languages & tools in practice</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Project in progress</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <SectionHeading eyebrow="02 — SELECTED WORK" title="Projects" number="02" />
        <p className="section-intro">
          A selection of academic and personal work. Projects are described
          based on their current scope.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number} / PROJECT</span>
                <span
                  className={`project-status ${
                    project.status === "In progress" ? "status-progress" : ""
                  }`}
                >
                  <span />
                  {project.status}
                </span>
              </div>
              <div className={`project-art ${project.icon}`}>
                {project.icon === "parking" ? (
                  <div className="parking-visual">
                    <div className="parking-sign">P</div>
                    <div className="parking-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="parking-car">
                      <span />
                      <span />
                    </div>
                  </div>
                ) : (
                  <div className="sensor-visual">
                    <div className="sensor-core">
                      <Database size={31} />
                    </div>
                    <div className="orbit orbit-one" />
                    <div className="orbit orbit-two" />
                    <span className="sensor-node node-one" />
                    <span className="sensor-node node-two" />
                    <span className="sensor-node node-three" />
                  </div>
                )}
              </div>
              <div className="project-content">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <span>
                  {project.status === "In progress"
                    ? "MORE DETAILS COMING"
                    : "ACADEMIC PROJECT"}
                </span>
                <ArrowUpRight size={17} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeading
          eyebrow="03 — EXPERIENCE"
          title="Where I've contributed"
          number="03"
        />
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">MAY — SEP 2026</div>
            <div className="timeline-main">
              <div className="timeline-title">
                <div>
                  <h3>Data & Operations Analyst Intern</h3>
                  <p>
                    LEGACY OF SEA (SARL AU) <span>· Casablanca, Morocco</span>
                  </p>
                </div>
                <BriefcaseBusiness size={19} />
              </div>
              <ul>
                <li>Assisted with data preparation using Excel, SQL, and Python.</li>
                <li>Created Power BI dashboards and monitored operational KPIs.</li>
                <li>Supported inventory tracking and basic data analysis.</li>
              </ul>
              <div className="tags">
                <Tag>Excel</Tag>
                <Tag>SQL</Tag>
                <Tag>Python</Tag>
                <Tag>Power BI</Tag>
              </div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">SEP 2026 — PRESENT</div>
            <div className="timeline-main">
              <div className="timeline-title">
                <div>
                  <h3>Secretary General</h3>
                  <p>United Lights · Al Akhawayn University</p>
                </div>
                <HeartHandshake size={19} />
              </div>
              <ul>
                <li>
                  Support club leadership and coordination for a student
                  organization focused on disability inclusion and accessibility.
                </li>
                <li>Help coordinate meetings, communication, and club activities.</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">SEP — DEC 2025</div>
            <div className="timeline-main">
              <div className="timeline-title">
                <div>
                  <h3>Treasurer</h3>
                  <p>The Tennis Club · Al Akhawayn University</p>
                </div>
                <BriefcaseBusiness size={19} />
              </div>
              <ul>
                <li>
                  Managed club budgets and expense records using Excel and Google
                  Sheets.
                </li>
                <li>Supported event coordination.</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">DEC 2025 — JAN 2026</div>
            <div className="timeline-main">
              <div className="timeline-title">
                <div>
                  <h3>Volunteer</h3>
                  <p>Association Sportive Bonne Forme · Morocco</p>
                </div>
                <HeartHandshake size={19} />
              </div>
              <ul>
                <li>
                  Supported inclusive sports initiatives by helping organize
                  community football matches and recreational activities.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="two-column section">
        <div className="info-panel" id="education">
          <SectionHeading
            eyebrow="04 — EDUCATION"
            title="Learning & growth"
            number="04"
          />
          <div className="education-card">
            <div className="icon-box">
              <GraduationCap size={21} />
            </div>
            <div>
              <span className="date-label">SEP 2023 — EXPECTED 2027</span>
              <h3>Al Akhawayn University</h3>
              <p>B.S. in Computer Science</p>
              <p className="muted">
                Specialization: Big Data Analytics
                <br />
                Minor: Business Administration
              </p>
            </div>
          </div>
          <div className="honors">
            <span className="eyebrow">HONORS & AWARDS</span>
            <p>
              <Award size={15} /> Dean's List — Fall 2024
            </p>
            <p>
              <Award size={15} /> Merit Scholarship — Al Akhawayn University
            </p>
          </div>
        </div>
        <div className="info-panel" id="certifications">
          <SectionHeading
            eyebrow="05 — CERTIFICATIONS"
            title="Credentials"
            number="05"
          />
          <div className="cert-list">
            <div className="cert-item">
              <span className="cert-icon">
                <Award size={17} />
              </span>
              <div>
                <h3>Hedera Certified Foundation (HCF)</h3>
                <p>The Hashgraph Association · Oct 2026</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-icon">
                <Award size={17} />
              </span>
              <div>
                <h3>Introduction to NoSQL Databases</h3>
                <p>IBM · Dec 2025</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-icon">
                <Award size={17} />
              </span>
              <div>
                <h3>Django Application Development with SQL and Databases</h3>
                <p>IBM · Dec 2025</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-icon">
                <Award size={17} />
              </span>
              <div>
                <h3>Problem Solving Using Computational Thinking</h3>
                <p>University of Michigan · Oct 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <SectionHeading
          eyebrow="06 — TOOLKIT"
          title="Tools I work with"
          number="06"
        />
        <p className="section-intro">
          A practical toolkit in progress. Technologies in the learning list are
          areas I'm currently exploring.
        </p>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, list]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="tags">
                {list.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <span className="eyebrow">07 — CONTACT</span>
          <h2>
            Let's build
            <br />
            <span>something useful.</span>
          </h2>
          <p>
            Interested in data, technology, or an opportunity to learn and
            contribute? Feel free to reach out.
          </p>
          <a
            className="button button-primary"
            href="mailto:ezzourkaniayman05@gmail.com"
          >
            Email me <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="contact-links">
          <a href="mailto:ezzourkaniayman05@gmail.com">
            <span className="contact-icon">
              <Mail size={18} />
            </span>
            <span>
              <small>EMAIL</small>
              <strong>ezzourkaniayman05@gmail.com</strong>
            </span>
            <ArrowUpRight size={16} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <span className="contact-icon">
              <ExternalLink size={18} />
            </span>
            <span>
              <small>LINKEDIN</small>
              <strong>Find me on LinkedIn</strong>
            </span>
            <ArrowUpRight size={16} />
          </a>
          <a href="https://github.com/ezayman" target="_blank" rel="noreferrer">
            <span className="contact-icon">
              <Code2 size={18} />
            </span>
            <span>
              <small>GITHUB</small>
              <strong>github.com/ezayman</strong>
            </span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#top">
          AE<span>.</span>
        </a>
        <span>Designed and built with care · 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
