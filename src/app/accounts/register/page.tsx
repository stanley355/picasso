import Link from "next/link";
import GoogleLoginBtn from "../login/_components/LoginGoogleBtn";
import RegisterForm from "./_components/RegisterForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AccountRegisterPage = async () => {
  const token = cookies().get("token");
  if (token?.value) {
    redirect("/accounts");
  }

  return (
    <>
      <div className="text-center text-xl font-bold py-4 sm:mb-20">AI</div>
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Create an account
      </h1>
      <div className="px-4 md:max-w-[400px] mx-auto">
        <RegisterForm />
        <div className="flex items-center justify-center gap-2 my-4">
          <span>Already have an account?</span>
          <Link className="underline" href="/accounts/login">
            Login
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

export default AccountRegisterPage;
