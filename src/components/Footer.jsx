import SocialIcons from "./SocialIcons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <SocialIcons className="footer-social" linkClassName="footer-social-link" />
      <p className="footer-credit">Created by Rodvin Danaei © {new Date().getFullYear()}</p>
    </footer>
  );
}
