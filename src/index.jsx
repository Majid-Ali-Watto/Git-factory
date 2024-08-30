import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Loader } from "circle-loader";
// import Loading from "./components/Loading/Loading";
import 'circle-loader/dist/bundle.css'
ReactDOM.createRoot(document.getElementById("root")).render(
	<Suspense fallback={Loader.start()}>
		<App />
	</Suspense>
);
