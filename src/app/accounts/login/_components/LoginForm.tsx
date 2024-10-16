"use client";
import Link from "next/link";
import { useShallow } from "zustand/shallow";
import { useLoginStore } from "../_stores/useLoginStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/lib/api/author/users/loginUser";
import { sendFirebaseEvent } from "@/lib/firebase/sendFirebaseEvent";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { isLoading, updateStore } = useLoginStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );

  const handleSubmit = async (formData: FormData) => {
    updateStore("showLoginModal", false);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast("Email and password can't be empty");
      return;
    }

    updateStore("isLoading", true);
    sendFirebaseEvent("login");
    try {
      const user = await loginUser(email, password);
      updateStore("isLoading", false);
      if (user.token) window.location.reload();
      return;
    } catch (error: any) {
      updateStore("isLoading", false);
      toast(error.message);
      return;
    }
  };

  return (
    <form action={handleSubmit}>
      <Label htmlFor="emailInput">Email address</Label>
      <Input type="email" id="emailInput" name="email" className="mb-4" />
      <div className="flex items-center justify-between mb-1">
        <Label htmlFor="passInput">Password</Label>
        <Link className="underline text-xs" href="/accounts/forgot-password">
          forgot password
        </Link>
      </div>
      <Input type="password" id="passInput" name="password" className="mb-4" />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
