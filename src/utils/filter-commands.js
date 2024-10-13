import gitCommands from "../assets/commandsData";

const filterCommands = (searchQuery) => {
	const filteredCommands = gitCommands.filter((command) => {
		const query = searchQuery.toLowerCase();
		const { code, name, description, basic } = command;
		return [name, description, code, basic].some((cmd) => cmd?.toLowerCase()?.includes(query));
	});
	return filteredCommands;
};
export default filterCommands;
