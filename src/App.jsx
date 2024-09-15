import { useEffect, useState } from "react";
import "./App.css";
import GitCommandsList from "./components/Commands-List";
import requestNotificationPermission, { sendPushNotification } from "../firebase/firebase";

import { getDatabase, ref, onValue } from "firebase/database";

const App = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	function getData(title, body) {
		if (!title?.trim() && !body?.trim()) return;
		const db = getDatabase();
		const starCountRef = ref(db, "users/");
		onValue(starCountRef, async (snapshot) => {
			const data = snapshot.val();
			console.log("🚀 -> onValue -> data:", data);
			await fetch("http://localhost:3000/")
				.then((response) => response.json())
				.then((response) => {
					Object.keys(data).forEach((key) => sendPushNotification(response, data[key].userToken, title, body));
				})
				.catch((err) => alert("Failed to send notifications"));
		});
	}
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/firebase-messaging-sw.js")
				.then((registration) => {
					console.log("Service Worker registered with scope:", registration.scope);
				})
				.catch((error) => {
					console.log("Service Worker registration failed:", error);
				});
		}
		requestNotificationPermission();
	}, []);

	return (
		<>
			<GitCommandsList />
			<label>Title</label>
			<input
				type="text"
				name="title"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<br />
			<label>Body</label>
			<input
				type="text"
				name="body"
				value={body}
				onChange={(event) => setBody(event.target.value)}
			/>

			<button
				style={{ marginBottom: "100px" }}
				onClick={() => getData(title, body)}>
				Send Notifications
			</button>
		</>
	);
};

export default App;
