import { memo, useCallback } from "react";
import showArea from "../utils/gitFirstTimeGuide";

/**
 * MustRead Component
 * Displays a section encouraging users to read the first-time Git push guide
 * @component
 */
const MustRead = memo(() => {
  const handleClick = useCallback(() => {
    showArea();
  }, []);

  return (
    <section aria-label="First-time setup">
      <button type="button" className="must-read" onClick={handleClick}>
        <span className="must-read-label">Must read</span>
        <span className="must-read-title">Guide to push for the first time</span>
        <span className="must-read-arrow" aria-hidden="true">
          →
        </span>
      </button>
    </section>
  );
});

MustRead.displayName = "MustRead";

export default MustRead;
