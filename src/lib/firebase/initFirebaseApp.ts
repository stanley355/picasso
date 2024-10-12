import { initializeApp } from "firebase/app";

const initFirebaseApp = () => {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

  if (appEnv === "production") {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    const app = initializeApp(firebaseConfig);
    return app;
  }

  return null;
};

export default initFirebaseApp;
