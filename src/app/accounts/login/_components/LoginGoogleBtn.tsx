"use client";
import { useShallow } from "zustand/shallow";
import { toast } from "react-toastify";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { decode, JwtPayload } from "jsonwebtoken";
import { useLoginStore } from "../_stores/useLoginStore";
import { sendFirebaseEvent } from "@/lib/firebase/sendFirebaseEvent";
import { loginUserWithGmail } from "@/lib/api/author/users/loginUserWithGmail";

const GoogleLoginBtn = () => {
  const { updateStore } = useLoginStore(
    useShallow((state) => ({ updateStore: state.updateStore })),
  );

  const failMsg = "Fail to login with gmail, please try again";

  const handleGoogleLogin = async (credential: CredentialResponse) => {
    updateStore("showLoginModal", false);
    updateStore("isLoading", true);
    sendFirebaseEvent("login_gmail");

    try {
      const credentialToken = String(credential.credential);
      const jwtPayload = decode(credentialToken) as JwtPayload;
      const loginSuccess = await loginUserWithGmail(jwtPayload);
      updateStore("isLoading", false);
      if (loginSuccess) window.location.reload();
      return;
    } catch (error: any) {
      updateStore("isLoading", false);
      toast("Login failed, please try again");
      console.error(error);
      return;
    }
  };

  return (
    <GoogleOAuthProvider
      clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}
    >
      <GoogleLogin
        locale="en-US"
        onSuccess={handleGoogleLogin}
        onError={() => toast(failMsg)}
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;
