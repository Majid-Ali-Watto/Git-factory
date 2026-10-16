import { useEffect, useState, useRef, memo, useCallback } from "react";
import PropTypes from "prop-types";
import CommandCard from "./CommandCard.jsx";
import Footer from "./Footer.jsx";
import MustRead from "./MustRead.jsx";
import LearnMoreLinks from "./LearnMore.jsx";
import Header from "./Header.jsx";
import { isScrolledPast } from "../utils/scroll-methods.js";

/**
 * GitCommandsList Component
 * Main component that displays and manages Git commands with search, filter, and selection
 * @component
 */
const GitCommandsList = memo(() => {
  const [selectedCommands, setSelectedCommands] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [filteredCommands, setFilteredCommands] = useState([]);
  const commandsListRef = useRef(null);
  const commandsListHTMLRef = useRef(null);

  // Handle command selection
  const handleSelect = useCallback((command) => {
    setSelectedCommands((prevSelected) => {
      const isSelected = prevSelected.includes(command);
      return isSelected
        ? prevSelected.filter((c) => c !== command)
        : [...prevSelected, command];
    });
  }, []);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(isScrolledPast(300));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header
        commandsListHTMLRef={commandsListHTMLRef}
        commandsListRef={commandsListRef}
        setFilteredCommands={setFilteredCommands}
        filteredCommands={filteredCommands}
        selectedCommands={selectedCommands}
        setSelectedCommands={setSelectedCommands}
      />
      <div className="blog-container">
        <MustRead />
        <div ref={commandsListHTMLRef}>
          <main className="commands-list" ref={commandsListRef}>
            {filteredCommands && filteredCommands.length > 0 ? (
              filteredCommands.map((command, index) => (
                <CommandCard
                  key={`${command.name}-${index}`}
                  command={command}
                  onSelect={handleSelect}
                  selected={selectedCommands.includes(command)}
                />
              ))
            ) : (
              <div className="no-commands-message">
                <p>No commands found.</p>
                <p>Try a different search or clear the filters.</p>
              </div>
            )}
          </main>
          <LearnMoreLinks />
          <Footer showScrollTop={showScrollTop} />
        </div>
      </div>
    </div>
  );
});

GitCommandsList.displayName = "GitCommandsList";

export default GitCommandsList;
