import SocialIcons from "./SocialIcons.jsx";

export default function Jumbo({ count = "" }) {
  return (
    <section id="home" className="jumbo">
      <div className="jumbo-inner">
        <img src="/static/rod.jpeg" alt="Rodvin Danaei" className="jumbo-photo" width="88" height="88" />
        <h1 className="jumbo-title">Hi, I&apos;m Rodvin</h1>
        <h2 className="jumbo-subtitle">A Full stack developer</h2>
        {count && (
          <p className="jumbo-text">
            and this page has been viewed <span className="jumbo-count">{count}</span> times
          </p>
        )}
        <hr />
        <SocialIcons className="jumbo-social" linkClassName="jumbo-social-link" />
      </div>
    </section>
  );
}
