import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6hUmfzZ4lwt9BNud6XrZJkzoSwey3iPc",
    authDomain: "parcs-b7ed0.firebaseapp.com",
    projectId: "parcs-b7ed0",
    storageBucket: "parcs-b7ed0.firebasestorage.app",
    messagingSenderId: "978349964117",
    appId: "1:978349964117:web:0e595228fc7870afd88ddc",
    measurementId: "G-Q2PMDDBBVP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginform");  // Fixed form ID

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;  // Fixed email field ID
        const password = document.getElementById("password").value;  // Fixed password field ID
        const errorMessage = document.getElementById("error-message");

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User signed in:", user);

                // Redirect after successful login
                window.location.href = "dentonList.html";
            })
            .catch((error) => {
                console.error("Login error:", error.message);
                errorMessage.textContent = error.message;  // Show error message
            });
    });
});
