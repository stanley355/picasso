'use client'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginBtn = () => {
  return (
    <GoogleOAuthProvider clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)}>
      <GoogleLogin
        locale="en-US"
        onSuccess={(credential) => { }}
        onError={() => { }}
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;