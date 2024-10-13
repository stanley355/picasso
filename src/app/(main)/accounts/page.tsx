import { Label } from "@/components/ui/label";
import { getUserById } from "@/lib/api/author/users/getUserById";

const AccountProfilePage = async () => {
  const user = await getUserById();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Profile</h1>

      <div>
        <Label>Fullname</Label>
        <div className="mb-4">{user.fullname}</div>
        <Label>Email</Label>
        <div className="mb-4">{user.email}</div>
      </div>
    </div>
  );
};

export default AccountProfilePage;
