import { useEffect, useState, useCallback, memo, useRef } from "react";
import PropTypes from "prop-types";
import {
  downloadPDFTable,
  downloadHTMLFile,
  downloadPDFasList,
} from "../utils/download.js";
import { copySelected } from "../utils/copy-method.js";
import filterCommands from "../utils/filter-commands.js";
import {
  getCategories,
  getDifficultyLevels,
  filterByCategory,
} from "../utils/filter-by-category-difficulty.js";
import Alert from "../utils/alert-message.js";
import localAlert from "../utils/local-alert.js";

const DOWNLOAD_OPTIONS = {
  tablePdf: "Table (PDF)",
  listPdf: "List (PDF)",
  listHtml: "List (HTML)",
};

/**
 * Header Component
 * Provides search, filter, and download functionality for Git commands
 * @component
 * @param {Object} props - Component props
 * @param {React.MutableRefObject} props.commandsListHTMLRef - Ref to commands HTML list
 * @param {React.MutableRefObject} props.commandsListRef - Ref to commands list
 * @param {Function} props.setFilteredCommands - Sets filtered commands
 * @param {Array} props.filteredCommands - Currently filtered commands
 * @param {Array} props.selectedCommands - Currently selected commands
 * @param {Function} props.setSelectedCommands - Sets selected commands
 */
const Header = memo(
  ({
    commandsListHTMLRef,
    commandsListRef,
    setFilteredCommands,
    filteredCommands,
    selectedCommands,
    setSelectedCommands,
  }) => {
    // Honours /?search=term so the SearchAction in the page's structured data works.
    const [searchQuery, setSearchQuery] = useState(
      () => new URLSearchParams(window.location.search).get("search") ?? "",
    );
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedOption, setSelectedOption] = useState(
      DOWNLOAD_OPTIONS.listPdf,
    );
    const [categories] = useState(getCategories());
    const [difficultyLevels] = useState(getDifficultyLevels());
    const downloadDropdownRef = useRef(null);

    const handleSearchChange = useCallback((event) => {
      setSearchQuery(event.target.value);
    }, []);

    const handleCategoryChange = useCallback((event) => {
      setSelectedCategory(event.target.value);
    }, []);

    const handleDifficultyChange = useCallback((event) => {
      setSelectedDifficulty(event.target.value);
    }, []);

    const selectAll = useCallback(() => {
      setSelectedCommands(filteredCommands);
      Alert("All commands selected!");
    }, [filteredCommands, setSelectedCommands]);

    const unselectAll = useCallback(() => {
      setSelectedCommands([]);
      Alert("All commands unselected!");
    }, [setSelectedCommands]);

    // Update filtered commands when search query, category, or difficulty changes
    useEffect(() => {
      let filtered = filterCommands(searchQuery);
      filtered = filterByCategory(
        selectedCategory,
        selectedDifficulty,
        filtered,
      );
      setFilteredCommands(filtered);
    }, [
      searchQuery,
      selectedCategory,
      selectedDifficulty,
      setFilteredCommands,
    ]);

    const handleChange = useCallback((event) => {
      setSelectedOption(event.target.value);
    }, []);

    const handleDownload = useCallback(async () => {
      try {
        // Close dropdown if it's open
        if (downloadDropdownRef.current) {
          downloadDropdownRef.current.blur();
        }

        // Show download started message and wait for it
        await localAlert.fire({
          position: "center",
          icon: "info",
          title: `Download Started for ${selectedOption}`,
          showConfirmButton: false,
          timer: 1000,
        });

        // Perform the download
        switch (selectedOption) {
          case DOWNLOAD_OPTIONS.tablePdf:
            downloadPDFTable(
              selectedCommands.length > 0 ? selectedCommands : filteredCommands,
            );
            break;
          case DOWNLOAD_OPTIONS.listPdf:
            downloadPDFasList(commandsListRef);
            break;
          case DOWNLOAD_OPTIONS.listHtml:
            downloadHTMLFile(commandsListHTMLRef);
            break;
          default:
            throw new Error(`Unknown Download Type: ${selectedOption}`);
        }

        // Small delay to ensure download is registered before showing success
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Show download completed message
        await localAlert.fire({
          position: "center",
          icon: "success",
          title: `File downloaded for ${selectedOption}`,
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error) {
        console.error("Download error:", error);
        await localAlert.fire({
          position: "center",
          icon: "error",
          title: error.message || "Download failed",
          showConfirmButton: true,
        });
      }
    }, [
      selectedOption,
      selectedCommands,
      filteredCommands,
      commandsListRef,
      commandsListHTMLRef,
    ]);

    const copyButtonTitle = `Copy ${selectedCommands.length} selected commands`;

    return (
      <header className="site-header" role="banner">
        <div className="header-inner">
          <div className="header-brand">
            <img
              src="/git-icon.png"
              alt=""
              className="brand-logo"
              width="40"
              height="40"
            />
            <div className="brand-text">
              <h1 className="app-title">Git Commands Guide</h1>
            </div>
          </div>

          <div className="header-controls">
            <input
              type="search"
              className="search-input"
              placeholder="Search commands…"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search Git commands"
              aria-describedby="search-hint"
            />
            <span id="search-hint" className="sr-only">
              Search by command name, description, or category
            </span>

            <select
              className="filter-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              aria-label="Filter by category"
            >
              <option value="">Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="filter-select"
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
              aria-label="Filter by difficulty level"
            >
              <option value="">Levels</option>
              <option value="beginner">🟢 Beginner</option>
              <option value="intermediate">🟡 Intermediate</option>
              <option value="advanced">🔴 Advanced</option>
            </select>
          </div>

          <div className="toolbar">
            <p className="result-count" role="status" aria-live="polite">
              {filteredCommands.length} command
              {filteredCommands.length === 1 ? "" : "s"}
              {selectedCommands.length > 0 &&
                ` | ${selectedCommands.length} selected`}
            </p>

            <div className="selection-actions">
              <button
                type="button"
                title="Select All Commands"
                onClick={selectAll}
                className="icon-button"
                aria-label="Select all commands"
              >
                <img src="/select.png" alt="" className="header-icon" />
              </button>

              {selectedCommands.length >= 2 && (
                <>
                  <button
                    type="button"
                    title={copyButtonTitle}
                    onClick={() => copySelected(selectedCommands)}
                    className="icon-button"
                    aria-label={copyButtonTitle}
                  >
                    <img src="/copy.png" alt="" className="header-icon" />
                  </button>
                  <button
                    type="button"
                    title="Unselect All Commands"
                    onClick={unselectAll}
                    className="icon-button"
                    aria-label="Unselect all commands"
                  >
                    <img src="/delete.png" alt="" className="header-icon" />
                  </button>
                </>
              )}
            </div>

            <div className="download-actions">
              <select
                ref={downloadDropdownRef}
                className="select-dropdown"
                value={selectedOption}
                onChange={handleChange}
                aria-label="Select download format"
              >
                {Object.values(DOWNLOAD_OPTIONS).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                type="button"
                title="Download Selected Commands"
                onClick={handleDownload}
                className="download-button"
                aria-label="Download commands"
              >
                <img src="/download.png" alt="" className="header-icon" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  },
);

Header.displayName = "Header";

Header.propTypes = {
  commandsListHTMLRef: PropTypes.object.isRequired,
  commandsListRef: PropTypes.object.isRequired,
  setFilteredCommands: PropTypes.func.isRequired,
  filteredCommands: PropTypes.array.isRequired,
  selectedCommands: PropTypes.array.isRequired,
  setSelectedCommands: PropTypes.func.isRequired,
};

export default Header;
