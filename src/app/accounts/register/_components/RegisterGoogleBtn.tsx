"use client";
import { useShallow } from "zustand/shallow";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { decode, JwtPayload } from "jsonwebtoken";

import { useRegisterStore } from "../_stores/useRegisterStore";

import { loginUserWithGmail } from "@/lib/api/author/users/loginUserWithGmail";
import { sendFirebaseEvent } from "@/lib/firebase/sendFirebaseEvent";

const GoogleLoginBtn = () => {
  const { updateStore } = useRegisterStore(
    useShallow((state) => ({ updateStore: state.updateStore })),
  );

  const handleGoogleLogin = async (credential: CredentialResponse) => {
    updateStore("isLoading", true);
    updateStore("errorMsg", "");
    sendFirebaseEvent("register_gmail");

    try {
      const credentialToken = String(credential.credential);
      const jwtPayload = decode(credentialToken) as JwtPayload;
      const loginSuccess = await loginUserWithGmail(jwtPayload);
      updateStore("isLoading", false);
      if (loginSuccess) window.location.href = "/accounts";
      return;
    } catch (error: any) {
      updateStore("errorMsg", error.message);
      updateStore("isLoading", false);
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
        onError={() => {
          const failMsg = "Fail to login with gmail, please try again";
          updateStore("errorMsg", failMsg);
        }}
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;
