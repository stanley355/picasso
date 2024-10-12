"use client";
import { Tooltip } from "react-tooltip";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = () => {
    window.navigator.clipboard.writeText("winatastanley355@gmail.com");
    setIsCopied(true);
  };

  return (
    <div>
      <div className="text-center text-xl font-bold py-4 sm:mb-32">AI</div>

      <h1 className="text-3xl font-semibold mb-4 text-center">
        Reset Password
      </h1>
      <div className="px-4 md:max-w-[400px] mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-2">Email the system admin at:</div>
        <Button id="adminEmail" onClick={onClick} className="mb-4">
          winatastanley355@gmail.com
        </Button>
        <Tooltip anchorSelect="#adminEmail">
          {isCopied ? "Copied to clipboard" : "Click to copy"}
        </Tooltip>
        <ol className="leading-8 list-decimal list-inside mb-4 text-justify">
          <li>
            Please use your <b>registered email account</b>{" "}
          </li>
          <li>
            Put the subject <b>&quot;Reset password&quot; </b>{" "}
          </li>
          <li>
            System admin will reply with a new password, and please{" "}
            <b>change your password after login </b>{" "}
          </li>
          <li>
            We don&apos;t to use automatic password reset because of{" "}
            <b>(1) security reasons</b>, and by sending us an email,{" "}
            <b> (2) we can know that it&apos;s you</b>!{" "}
          </li>
        </ol>
        <Link className="underline" href="/accounts/login">
          Back to login page
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
