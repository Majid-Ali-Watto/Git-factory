import PropTypes from "prop-types";
import { memo, useCallback } from "react";
import { scrollToTop } from "../utils/scroll-methods";

/**
 * Footer Component
 * Displays footer with author info and scroll-to-top button
 * @component
 * @param {Boolean} showScrollTop - Whether to show the scroll to top button
 */
const Footer = memo(({ showScrollTop }) => {
  const handleScrollToTop = useCallback(() => {
    scrollToTop();
  }, []);

  return (
    <footer role="contentinfo">
      <h3>
        Developer and Author -
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://majidev.netlify.app/"
          aria-label="Visit Majid Ali's portfolio"
        >
          {" "}
          Majid Ali
        </a>
      </h3>
      {showScrollTop && (
        <button
          type="button"
          className="scroll-to-top-btn"
          onClick={handleScrollToTop}
          aria-label="Scroll back to top"
          title="Move to top"
        >
          <img src="/top.png" className="header-icon" alt="Scroll to top" />
        </button>
      )}
    </footer>
  );
});

Footer.displayName = "Footer";

Footer.propTypes = {
  showScrollTop: PropTypes.bool.isRequired,
};

export default Footer;
