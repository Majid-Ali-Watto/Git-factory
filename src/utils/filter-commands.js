import gitCommands from "../assets/commandsData";

/**
 * Filters Git commands based on a search query
 * Searches across command name, description, code, and category fields
 * @param {string} searchQuery - The search term to filter by
 * @returns {Array} Array of command objects matching the search query
 * @example
 * const results = filterCommands('clone');
 * // Returns all commands with 'clone' in name, description, or code
 */
const filterCommands = (searchQuery) => {
  if (!searchQuery || typeof searchQuery !== "string") {
    return gitCommands;
  }

  const query = searchQuery.toLowerCase().trim();

  if (query.length === 0) {
    return gitCommands;
  }

  const filteredCommands = gitCommands.filter((command) => {
    if (!command) return false;

    const { code = "", name = "", description = "", basic = "" } = command;

    // Create searchable fields
    const searchFields = [
      name.toLowerCase(),
      description.toLowerCase(),
      code.toLowerCase(),
      basic.toLowerCase(),
    ];

    // Check if any field contains the query
    return searchFields.some((field) => field.includes(query));
  });

  return filteredCommands;
};

export default filterCommands;
