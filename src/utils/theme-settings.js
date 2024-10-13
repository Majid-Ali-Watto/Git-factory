import { themeStatus } from "../assets/themeAndOptions";

function changeTheme(theme, setIsDark) {
	setIsDark((prev) => !prev);
	const root = document.getElementById("root");
	root.style.backgroundColor = themeStatus[theme].bg;
	root.style.color = themeStatus[theme].text;
}
export default changeTheme;
