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
import { toast } from "react-toastify";
import { useLoginStore } from "../../login/_stores/useLoginStore";

const GoogleLoginBtn = () => {
  const { updateStore } = useRegisterStore(
    useShallow((state) => ({ updateStore: state.updateStore })),
  );
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({ updateLoginStore: state.updateStore })),
  );

  const handleGoogleLogin = async (credential: CredentialResponse) => {
    updateLoginStore('showLoginModal', false);
    updateStore("isLoading", true);
    sendFirebaseEvent("register_gmail");

    try {
      const credentialToken = String(credential.credential);
      const jwtPayload = decode(credentialToken) as JwtPayload;
      const loginSuccess = await loginUserWithGmail(jwtPayload);
      updateStore("isLoading", false);
      if (loginSuccess) window.location.href = "/accounts";
      return;
    } catch (error: any) {
      toast(error.message);
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
          toast(failMsg);
        }}
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;
