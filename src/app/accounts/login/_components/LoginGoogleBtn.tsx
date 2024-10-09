'use client'
import { useShallow } from "zustand/shallow";
import { loginUsersWithGmail } from "@/lib/api/author/users/loginUserWithGmail";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { decode, JwtPayload } from "jsonwebtoken";
import { useLoginStore } from "../_stores/useLoginStore";

const GoogleLoginBtn = () => {
  const { updateStore } = useLoginStore(
    useShallow((state) => ({ updateStore: state.updateStore })),
  )

  const failMsg = "Fail to login with gmail, please try again";


  const handleGoogleLogin = async (credential: CredentialResponse) => {
    updateStore('isLoading', true)

    const credentialToken = String(credential.credential);
    const jwtPayload = decode(credentialToken) as JwtPayload;
    const userToken = await loginUsersWithGmail(jwtPayload);

    updateStore('isLoading', false)

    if (!userToken) {
      updateStore('errorMsg', false);
      return;
    }
  }

  return (
    <GoogleOAuthProvider clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}>
      <GoogleLogin
        locale="en-US"
        onSuccess={handleGoogleLogin}
        onError={() =>
          updateStore('errorMsg', failMsg)
        }
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;