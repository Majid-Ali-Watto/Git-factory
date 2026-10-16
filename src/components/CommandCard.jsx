import PropTypes from "prop-types";
import { memo } from "react";
import copyToClipboard from "../utils/copy-method";
import { getDifficultyInfo } from "../utils/filter-by-category-difficulty.js";

/**
 * CommandCard Component
 * Displays a Git command with its details, example, and copy functionality
 * @component
 * @param {Object} command - The command object containing name, description, example, and code
 * @param {Function} onSelect - Callback when command checkbox is toggled
 * @param {Boolean} selected - Whether the command is currently selected
 */
const CommandCard = memo(({ command, onSelect, selected }) => {
  if (!command) return null;

  const handleCopy = () => {
    copyToClipboard(
      command.code,
      "Code copied to clipboard!",
      "Failed to copy code.",
    );
  };

  return (
    <article
      className={`command-card${selected ? " selected" : ""}`}
      data-difficulty={command.difficulty}
    >
      <div className="command-card-header">
        <input
          type="checkbox"
          className="command-checkbox"
          checked={selected}
          onChange={() => onSelect(command)}
          aria-label={`Select ${command.name} command`}
        />
        <div className="command-title-section">
          <h2 className="command-title">{command.name}</h2>
          <div className="command-meta">
            {command.category && (
              <span className="category-tag command-category">{command.category}</span>
            )}
            {command.basic && (
              <span className="essential-tag" title="Part of the basic commands set">
                ★ Essential
              </span>
            )}
            {command.difficulty && (
              <span
                className={`difficulty-badge difficulty-${command.difficulty}`}
                title={getDifficultyInfo(command.difficulty).label}
              >
                {getDifficultyInfo(command.difficulty).icon}{" "}
                {getDifficultyInfo(command.difficulty).label}
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="command-description">{command.description}</p>
      {command.warning && (
        <p className="command-warning" role="note">
          <strong>Caution:</strong> {command.warning}
        </p>
      )}
      {command.example && (
        <p className="command-example">
          <strong>Example:</strong> {command.example}
        </p>
      )}
      <div className="command-code-block">
        <pre>
          <code
            dangerouslySetInnerHTML={{ __html: command.code }}
            aria-label={`Code for ${command.name}`}
          />
        </pre>
        <button
          type="button"
          className="copy-button"
          onClick={handleCopy}
          aria-label={`Copy ${command.name} command code`}
          title="Copy command to clipboard"
        >
          Copy
        </button>
      </div>
    </article>
  );
});

CommandCard.displayName = "CommandCard";

CommandCard.propTypes = {
  command: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    example: PropTypes.string,
    code: PropTypes.string.isRequired,
    basic: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default CommandCard;
