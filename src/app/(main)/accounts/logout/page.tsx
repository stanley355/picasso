import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AccountLogout = () => {
  const handleAction = async () => {
    "use server";
    cookies().delete("token");
    redirect("/accounts/login");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Logout</h1>

      <form className="flex flex-col gap-4" action={handleAction}>
        <Label>Are you sure you want to logout?</Label>
        <Button type="submit" className="w-fit">
          Logout
        </Button>
      </form>
    </div>
  );
};

export default AccountLogout;
