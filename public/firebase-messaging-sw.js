importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
import { firebaseConfig } from "../firebase/firebaseConfig";

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message: ", payload);
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "/info.png" // Optional: add a notification icon
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
