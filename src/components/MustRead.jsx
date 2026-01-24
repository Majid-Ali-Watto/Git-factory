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
    <section aria-labelledby="must-read-heading">
      <ul>
        <li className="must-read">
          <strong
            id="must-read-heading"
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }}
            style={{ cursor: "pointer" }}
          >
            Must Read
          </strong>
          <h3>Guide to Push for First Time</h3>
        </li>
      </ul>
    </section>
  );
});

MustRead.displayName = "MustRead";

export default MustRead;
