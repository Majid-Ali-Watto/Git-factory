import React from "react";
import Swal from "sweetalert2";
// import showDetails from "./ShowCommandDetails";
const options = {
	position: "center",
	icon: "success",
	title: "",
	showConfirmButton: false,
	timer: 2000
};
const CommandCard = ({ command, onSelect, selected }) => {
	const copyToClipboard = (code) => {
		navigator.clipboard
			.writeText(code)
			.then(() => {
				Swal.fire({
					...options,
					title: "Code copied to clipboard!"
				});
			})
			.catch(() => {
				Swal.fire({
					...options,
					icon: "error",
					title: "Failed to copy code."
				});
			});
	};
	// onClick={() => showDetails(command)}
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
				<button className="copy-button" onClick={() => copyToClipboard(command.code)}>
					Copy
				</button>
			</div>
		</div>
	);
};

export default CommandCard;
