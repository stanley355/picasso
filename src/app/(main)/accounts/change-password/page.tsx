import React from "react";
import ChangePasswordForm from "./_components/ChangePasswordForm";

const AccountChangePassword = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Change Password</h1>

      <ChangePasswordForm />
      {/* <form className="flex flex-col gap-4" action={handleAction}>
      <Label>Are you sure you want to logout?</Label>
      <Button type="submit" className="w-fit">
        Logout
      </Button>
    </form> */}
    </div>
  );
};

export default AccountChangePassword;
