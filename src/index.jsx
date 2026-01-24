import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loading from "./components/Loading/Loading";

// Initialize React app with Suspense boundary for async operations
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element not found. Ensure there is a <div id="root"></div> in index.html',
  );
}

ReactDOM.createRoot(rootElement).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
);
