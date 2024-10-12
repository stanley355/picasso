"use client";
import { useEffect, createContext } from "react";
import { getAnalytics } from "firebase/analytics";
import initFirebaseApp from "@/lib/firebase/initFirebaseApp";

export const FirebaseContext = createContext({
  firebaseApp: initFirebaseApp(),
});

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const firebaseApp = initFirebaseApp();

  useEffect(() => {
    if (firebaseApp) {
      getAnalytics(firebaseApp);
    }
  }, [firebaseApp]);

  return (
    <FirebaseContext.Provider value={{ firebaseApp }}>
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseProvider;
