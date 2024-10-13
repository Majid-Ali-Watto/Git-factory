import React from "react";
import { scrollToTop } from "../utils/scroll-methods";

function Footer({ showScrollTop }) {
	return (
		<footer>
			<h3>
				Developer and Author -
				<a target="_blank" href="https://majidev.netlify.app/">
					Majid Ali
				</a>
			</h3>
			{showScrollTop && (
				<abbr title="Move to top">
					<img src="/top.png" className="header-icon" onClick={scrollToTop}></img>
				</abbr>
			)}
		</footer>
	);
}

export default Footer;
