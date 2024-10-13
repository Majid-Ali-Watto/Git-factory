import copyToClipboard from "../utils/copy-method";

const CommandCard = ({ command, onSelect, selected }) => {
	return (
		<div className="command">
			<input type="checkbox" className="checkbox" checked={selected} onChange={() => onSelect(command)} />
			<h2>{command.name}</h2>
			<p>{command.description}</p>
			<p>
				<strong>E.g.</strong> {command.example}
			</p>
			<div style={{ position: "relative" }}>
				<pre>
					<code dangerouslySetInnerHTML={{ __html: command.code }} />
				</pre>
				<button className="copy-button" onClick={() => copyToClipboard(command.code, "Code copied to clipboard!", "Failed to copy code.")}>
					Copy
				</button>
			</div>
		</div>
	);
};

export default CommandCard;
