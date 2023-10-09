
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3BZy3mxI0aXRIACojPHLpwl2cBUXd6r4",
    authDomain: "fir-53910.firebaseapp.com",
    databaseURL: "https://fir-53910-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-53910",
    storageBucket: "fir-53910.appspot.com",
    messagingSenderId: "509743027710",
    appId: "1:509743027710:web:304835470a9276f06c1caf",
    measurementId: "G-3L2K0706QY"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);