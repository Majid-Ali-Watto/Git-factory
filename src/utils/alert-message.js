import Swal from "sweetalert2";
import { options } from "../assets/themeAndOptions";

function Alert(title) {
	Swal.fire({
		...options,
		title
	});
}
export default Alert;
