import { memo } from "react";

/**
 * LearnMoreLinks Component
 * Displays a link to external Git learning resources
 * @component
 */
const LearnMoreLinks = memo(() => {
  return (
    <section className="learnMore" aria-labelledby="learn-more-heading">
      <p id="learn-more-heading">
        If you want to learn more about Git,{" "}
        <a
          href="https://www.atlassian.com/git"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Learn more about Git on Atlassian documentation (opens in new tab)"
        >
          click here
        </a>
      </p>
    </section>
  );
});

LearnMoreLinks.displayName = "LearnMoreLinks";

export default LearnMoreLinks;
