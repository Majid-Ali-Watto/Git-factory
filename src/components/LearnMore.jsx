import { memo } from "react";

/**
 * LearnMoreLinks Component
 * Displays a link to external Git learning resources
 * @component
 */
const LearnMoreLinks = memo(() => {
  return (
    <section className="learn-more">
      <p>
        Want to go deeper? Read the{" "}
        <a
          href="https://www.atlassian.com/git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atlassian Git tutorials
        </a>
        .
      </p>
    </section>
  );
});

LearnMoreLinks.displayName = "LearnMoreLinks";

export default LearnMoreLinks;
