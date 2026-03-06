import { useEffect } from "react";

export default function About() {
  useEffect(() => { document.title = "About — Rodvin"; }, []);
  return (
    <section className="about-page">
      <div className="about-page-inner">
        <div className="about-pic-wrap">
          <img src="/static/rod.jpeg" alt="Rodvin Danaei" className="about-pic" width="120" height="130" loading="lazy" />
        </div>
        <div className="about-text">
          <h1 className="about-title">About me</h1>
          <p className="about-para">
            Hi, I&apos;m Rodvin Danaei, a previous geneticist falling in love with programming and now a Full-stack Developer, cloud advocate, data scientist, gamer, and a die-hard fan of all kinds of outdoor activities.
          </p>
        </div>
      </div>
    </section>
  );
}
