import Tools from "./Tools";

export default function Resume() {
  return (
    <section id="my_work" className="resume">
      <div className="resume-inner">
        <div className="resume-row">
          <div className="resume-label"><span className="cert-label">CERTIFICATIONS</span></div>
          <div className="resume-content">
            <a href="https://www.credly.com/badges/9cbf6658-9301-4380-9bc9-6f20277f1d1f/public_url" target="_blank" rel="noopener noreferrer">
              <img src="/static/aws-certified-solutions-architect-associate.png" alt="AWS Solutions Architect Associate" className="cert-img" loading="lazy" width="80" height="80" />
            </a>
            <a href="https://www.credly.com/badges/debc0506-c300-4f21-8331-0ff07cf4a6f6/public_url" target="_blank" rel="noopener noreferrer">
              <img src="/static/project-management-professional-pmp.png" alt="PMP" className="cert-img" loading="lazy" width="80" height="80" />
            </a>
          </div>
        </div>
        <hr />
        <div className="resume-row">
          <div className="resume-label"><span className="cert-label">WORKS</span></div>
          <div className="resume-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-body">
                  <strong className="company">EECOL</strong>
                  <span className="title">Full-stack developer</span>
                  <span className="timeline-date">May 2019 - Present</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-body">
                  <strong className="company">ReWatt Power</strong>
                  <span className="title">Full-stack developer</span>
                  <span className="timeline-date">December 2018 - May 2019</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-body">
                  <strong className="company">Cenovus</strong>
                  <span className="title">Engineering Information Management Technician</span>
                  <span className="timeline-date">July 2014 - May 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="resume-row">
          <div className="resume-label"><span className="toolset-label">MY TOOLSET</span></div>
          <div className="resume-content">
            <Tools />
          </div>
        </div>
      </div>
    </section>
  );
}
