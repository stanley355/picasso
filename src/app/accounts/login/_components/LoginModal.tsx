"use client";
import Modal from "@/components/ui/modal";
import GoogleLoginBtn from "./LoginGoogleBtn";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useLoginStore } from "../_stores/useLoginStore";
import { useShallow } from "zustand/shallow";

const LoginModal = () => {
  const { showLoginModal } = useLoginStore(
    useShallow((state) => ({
      showLoginModal: state.showLoginModal,
    })),
  );

  if (!showLoginModal) return null;

  return (
    <Modal className="absolute top-0 left-0 rounded-md">
      <div className="bg-popover p-4 rounded-lg">
        <div className="text-xl font-semibold mb-4 text-center">
          Login to continue
        </div>
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
    </Modal>
  );
};

export default LoginModal;
