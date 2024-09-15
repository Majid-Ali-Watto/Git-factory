import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getDatabase, ref, push } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";

function writeUserData(userToken) {
	const db = getDatabase();
	const usersRef = ref(db, "users/"); // reference to the 'users' node
	push(usersRef, {
		userToken
	});
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
export const sendPushNotification = async (accessToken, userToken, title, body) => {
	const payload = {
		message: {
			token: userToken,
			notification: {
				body: body || "This is an FCM notification message!",
				title: title || "FCM Message"
			}
		}
	};

	await fetch("https://fcm.googleapis.com/v1/projects/git-factory/messages:send", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`
		},
		body: JSON.stringify(payload)
	});
};

// Request permission and get the token
const requestNotificationPermission = async () => {
	try {
		const permission = await Notification.requestPermission();
		if (permission === "granted") {
			const token = await getToken(messaging);
			if (token) {
				writeUserData(token);
				// sendPushNotification(token);
			} else {
				alert("No registration token available. Request permission to generate one.");
			}
		} else {
			alert("Permission not granted for notifications.");
		}
	} catch (error) {
		alert("An error occurred, please refresh the app. ");
	}
};

// Function to handle foreground messages
onMessage(messaging, (payload) => {
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "/info.png"
	};

	new Notification(notificationTitle, notificationOptions);
});

// Call the request permission function
export default requestNotificationPermission;
