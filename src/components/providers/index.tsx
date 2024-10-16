"use client";
import { useTheme } from "next-themes";
import FirebaseProvider from "./FirebaseProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type TProviders = {
  children: React.ReactNode;
};

const Providers = ({ children }: TProviders) => {
  const { resolvedTheme } = useTheme();

  return (
    <FirebaseProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <ToastContainer
          position="top-center"
          theme={resolvedTheme === "dark" ? "dark" : "light"}
        />
      </ThemeProvider>
    </FirebaseProvider>
  );
};

export default Providers;
