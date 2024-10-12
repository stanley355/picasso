import { cookies } from "next/headers";
import AccountHeaderSelect from "./AccountHeaderSelect";
import LanguageaiHeaderSelect from "./LanguageaiHeaderSelect";
import MainHeaderSelect from "./MainHeaderSelect";

const HeaderLeft = () => {
  const token = cookies().get('token');
  return (
    <div className="flex items-center">
      <MainHeaderSelect />
      {token?.value && <AccountHeaderSelect />}
      <LanguageaiHeaderSelect />
    </div>
  );
};

export default HeaderLeft;
