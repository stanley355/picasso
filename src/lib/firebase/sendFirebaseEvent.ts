import { getAnalytics, logEvent } from "firebase/analytics";

export const sendFirebaseEvent = (name: string) => {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV;
  if (appEnv === "production") {
    const analytics = getAnalytics();
    logEvent(analytics, name);
  }
};
