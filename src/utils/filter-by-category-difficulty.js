import gitCommands from "../assets/commandsData.js";

/**
 * Get all unique categories from commands
 * @returns {Array<string>} Array of category names
 */
export const getCategories = () => {
  const categories = new Set();
  gitCommands.forEach((cmd) => {
    if (cmd.category) categories.add(cmd.category);
  });
  return Array.from(categories).sort();
};

/**
 * Get all unique difficulty levels from commands
 * @returns {Array<string>} Array of difficulty levels
 */
export const getDifficultyLevels = () => {
  return ["beginner", "intermediate", "advanced"];
};

/**
 * Filter commands by category and difficulty
 * @param {string} category - Category to filter by (empty string = all)
 * @param {string} difficulty - Difficulty to filter by (empty string = all)
 * @param {Array} commands - Array of commands to filter (defaults to all)
 * @returns {Array} Filtered commands
 */
export const filterByCategory = (
  category,
  difficulty = "",
  commands = gitCommands,
) => {
  return commands.filter((cmd) => {
    const categoryMatch = !category || cmd.category === category;
    const difficultyMatch = !difficulty || cmd.difficulty === difficulty;
    return categoryMatch && difficultyMatch;
  });
};

/**
 * Get count of commands by category
 * @returns {Object} Object with category names as keys and counts as values
 */
export const getCommandCountByCategory = () => {
  const counts = {};
  gitCommands.forEach((cmd) => {
    if (cmd.category) {
      counts[cmd.category] = (counts[cmd.category] || 0) + 1;
    }
  });
  return counts;
};

/**
 * Get count of commands by difficulty
 * @returns {Object} Object with difficulty levels as keys and counts as values
 */
export const getCommandCountByDifficulty = () => {
  const counts = {
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  };
  gitCommands.forEach((cmd) => {
    if (cmd.difficulty && counts.hasOwnProperty(cmd.difficulty)) {
      counts[cmd.difficulty]++;
    }
  });
  return counts;
};

/**
 * Get commands by category
 * @param {string} category - Category name
 * @returns {Array} Commands in the category
 */
export const getCommandsByCategory = (category) => {
  return gitCommands.filter((cmd) => cmd.category === category);
};

/**
 * Get commands by difficulty
 * @param {string} difficulty - Difficulty level
 * @returns {Array} Commands with that difficulty
 */
export const getCommandsByDifficulty = (difficulty) => {
  return gitCommands.filter((cmd) => cmd.difficulty === difficulty);
};

/**
 * Get all commands in a category with specific difficulty
 * @param {string} category - Category name
 * @param {string} difficulty - Difficulty level
 * @returns {Array} Filtered commands
 */
export const getCommandsByCategoryAndDifficulty = (category, difficulty) => {
  return gitCommands.filter(
    (cmd) => cmd.category === category && cmd.difficulty === difficulty,
  );
};

/**
 * Get difficulty badge color and icon
 * @param {string} difficulty - Difficulty level
 * @returns {Object} Object with color, icon, and label
 */
export const getDifficultyInfo = (difficulty) => {
  const info = {
    beginner: { color: "#28a745", icon: "🟢", label: "Beginner" },
    intermediate: { color: "#ffc107", icon: "🟡", label: "Intermediate" },
    advanced: { color: "#dc3545", icon: "🔴", label: "Advanced" },
  };
  return info[difficulty] || { color: "#6c757d", icon: "⚪", label: "Unknown" };
};

export default {
  getCategories,
  getDifficultyLevels,
  filterByCategory,
  getCommandCountByCategory,
  getCommandCountByDifficulty,
  getCommandsByCategory,
  getCommandsByDifficulty,
  getCommandsByCategoryAndDifficulty,
  getDifficultyInfo,
};
