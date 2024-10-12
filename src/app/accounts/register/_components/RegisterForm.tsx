"use client";
import { useShallow } from "zustand/shallow";
import { useRegisterStore } from "../_stores/useRegisterStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/lib/api/author/users/registerUser";
import { sendFirebaseEvent } from "@/lib/firebase/sendFirebaseEvent";

const RegisterForm = () => {
  const { isLoading, updateStore } = useRegisterStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );

  const handleSubmit = async (formData: FormData) => {
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const repassword = formData.get("repassword") as string;

    if (!fullname || !password || !email || !repassword) {
      updateStore("errorMsg", "Please fill all field");
      return;
    }

    if (fullname.length < 4) {
      updateStore("errorMsg", "Invalid fullname: 4 characters minimum");
      return;
    }

    const hasSymbolRegex = /[^A-Za-z0-9\s]/g;
    if (hasSymbolRegex.test(fullname)) {
      updateStore(
        "errorMsg",
        "Invalid fullname: Fullname can't contain symbol",
      );
      return;
    }

    const validEmailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    if (!validEmailRegex.test(email)) {
      updateStore("errorMsg", "Invalid email: format");
      return;
    }

    if (String(password).length < 4) {
      updateStore("errorMsg", "Invalid password: 4 characters minimum");
      return;
    }

    if (password !== repassword) {
      updateStore(
        "errorMsg",
        "Invalid password: Password is not similar to retype password",
      );
      return;
    }

    updateStore("isLoading", true);
    sendFirebaseEvent("register");
    try {
      const requestBody = {
        fullname,
        email,
        password,
        password_again: repassword,
      };
      const user = await registerUser(requestBody);
      updateStore("isLoading", false);
      if (user?.token) window.location.href = "/accounts/";
      return;
    } catch (error: any) {
      updateStore("isLoading", false);
      updateStore("errorMsg", error.message);
      return;
    }
  };

  return (
    <form action={handleSubmit}>
      <Label htmlFor="fullnameInput">Fullname</Label>
      <Input type="text" id="fullnameInput" name="fullname" className="mb-4" />
      <Label htmlFor="emailInput">Email address</Label>
      <Input type="email" id="emailInput" name="email" className="mb-4" />
      <Label htmlFor="passInput">Password</Label>
      <Input type="password" id="passInput" name="password" className="mb-4" />
      <Label htmlFor="repassInput">Retype Password</Label>
      <Input
        type="password"
        id="repassInput"
        name="repassword"
        className="mb-4"
      />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
