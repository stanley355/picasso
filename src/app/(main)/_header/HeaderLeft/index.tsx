import AccountHeaderSelect from "./AccountHeaderSelect";
import LanguageaiHeaderSelect from "./LanguageaiHeaderSelect";
import MainHeaderSelect from "./MainHeaderSelect";

const HeaderLeft = () => {
  return (
    <div className="flex items-center">
      <MainHeaderSelect />
      <AccountHeaderSelect />
      <LanguageaiHeaderSelect />
    </div>
  );
};

export default HeaderLeft;
