import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import GoogleLoginBtn from "./_components/LoginGoogleBtn";

const AccountLoginPage = () => {
  return (
    <>
      <div className="text-center text-xl font-bold py-4 sm:mb-32">AI</div>
      <h1 className="text-3xl font-semibold mb-4 text-center">Welcome back</h1>
      <div className="px-4 md:max-w-[400px] mx-auto">
        <LoginForm />
        <div className="flex items-center justify-center gap-2 my-4">
          <span>Don&apos;t have an account?</span>
          <Link className="underline" href="/accounts/register">
            Sign up
          </Link>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="flex-1 h-[1px] bg-primary" />
          <span>OR</span>
          <span className="flex-1 h-[1px] bg-primary" />
        </div>
        <div className="flex justify-center">
          <GoogleLoginBtn />
        </div>
      </div>
    </>
  );
};

export default AccountLoginPage;
