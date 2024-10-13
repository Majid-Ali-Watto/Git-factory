import React from "react";
import showArea from "../utils/gitFirstTimeGuide";
function MustRead() {
	return (
		<div>
			<ul>
				<li className="must-read">
					<strong onClick={showArea}>Must Read </strong>
					<h5>Guide to Push for first time</h5>
				</li>
			</ul>
		</div>
	);
}

export default MustRead;
