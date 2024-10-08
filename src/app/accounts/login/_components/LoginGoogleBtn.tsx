'use client'
import { loginUsersWithGmail } from "@/lib/api/author/users/loginUserWithGmail";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { decode, JwtPayload } from "jsonwebtoken";

const GoogleLoginBtn = () => {

  const handleGoogleLogin = async (credential: CredentialResponse) => {
    const credentialToken = String(credential.credential);
    const jwtPayload = decode(credentialToken) as JwtPayload;
    const userToken = await loginUsersWithGmail(jwtPayload);
    console.log("Finally", userToken);

  }

  return (
    <GoogleOAuthProvider clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}>
      <GoogleLogin
        locale="en-US"
        onSuccess={handleGoogleLogin}
        onError={() => { }}
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;