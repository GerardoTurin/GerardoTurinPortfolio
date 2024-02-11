import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();



  return (
    <footer>
      <SocialIcons />

      <p className="footer-link">
        &copy; {currentYear} Gerardo Turin.
          <br/>All rights reserved.
      </p>

      {/* Buy Me A Coffee link */}
    </footer>
  );
};

export default Footer;
