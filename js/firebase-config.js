// Firebase Configuration & GitHub Authentication
// Secure loader: checks runtime /api/config or local private window.__ENV__
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { 
  getAuth, 
  GithubAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

let auth = null;
let provider = null;
let isInitialized = false;

export async function initFirebase() {
  if (isInitialized) return auth;

  let config = null;

  // 1. Check local private window.__ENV__ (from local js/env.js)
  if (typeof window !== "undefined" && window.__ENV__ && window.__ENV__.FIREBASE_API_KEY && !window.__ENV__.FIREBASE_API_KEY.startsWith("YOUR_")) {
    config = {
      apiKey: window.__ENV__.FIREBASE_API_KEY,
      authDomain: window.__ENV__.FIREBASE_AUTH_DOMAIN,
      projectId: window.__ENV__.FIREBASE_PROJECT_ID,
      storageBucket: window.__ENV__.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: window.__ENV__.FIREBASE_MESSAGING_SENDER_ID,
      appId: window.__ENV__.FIREBASE_APP_ID,
      measurementId: window.__ENV__.FIREBASE_MEASUREMENT_ID
    };
  } else {
    // 2. Fetch from Vercel Serverless /api/config
    try {
      const res = await fetch("/api/config");
      if (res.ok) {
        const data = await res.json();
        if (data && data.apiKey) {
          config = data;
        }
      }
    } catch (e) {
      // Offline / static fallback
    }
  }

  if (config && config.apiKey) {
    try {
      const app = initializeApp(config);
      auth = getAuth(app);
      provider = new GithubAuthProvider();
      provider.addScope("read:user");
      isInitialized = true;
      return auth;
    } catch (err) {
      console.error("Firebase Initialization Error:", err);
    }
  }

  return null;
}

// Trigger initial setup
initFirebase();

export async function loginWithGithub() {
  const authInstance = await initFirebase();
  if (!authInstance || !provider) {
    return { 
      success: false, 
      error: "Firebase API credentials not configured. Please set your environment variables in Vercel or local .env." 
    };
  }
  try {
    const result = await signInWithPopup(authInstance, provider);
    return { success: true, user: result.user };
  } catch (error) {
    console.error("GitHub Auth Error:", error);
    return { success: false, error: error.message };
  }
}

export async function logoutUser() {
  const authInstance = await initFirebase();
  if (!authInstance) return { success: true };
  try {
    await signOut(authInstance);
    return { success: true };
  } catch (error) {
    console.error("Logout Error:", error);
    return { success: false, error: error.message };
  }
}

export async function subscribeAuth(callback) {
  const authInstance = await initFirebase();
  if (authInstance) {
    return onAuthStateChanged(authInstance, callback);
  }
}

window.CmdVaultAuth = {
  loginWithGithub,
  logoutUser,
  subscribeAuth,
  initFirebase
};
