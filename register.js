import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerform");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const firstName = document.getElementById("UFname").value.trim();
        const lastName = document.getElementById("ULname").value.trim();
        const email = document.getElementById("UEmail").value.trim();
        const password = document.getElementById("Upassword").value.trim();
        const errorMessage = document.getElementById("error-message");

        errorMessage.textContent = "";

        if (!firstName || !lastName || !email || !password) {
            errorMessage.textContent = "Please fill out all fields.";
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save additional data (first name, last name)
            await setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                email,
                createdAt: new Date().toISOString()
            });

            alert("Account created successfully!");
            window.location.href = "dentonList.html";  // Adjust if necessary
        } catch (error) {
            errorMessage.textContent = error.message;
        }
    });
});
