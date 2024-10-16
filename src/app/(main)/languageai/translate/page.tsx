import TranslateDesktop from "./_components/TranslateDesktop";
import TranslateMobile from "./_components/TranslateMobile";

const TranslatePage = () => {
  return (
    <div className="w-full h-full">
      <TranslateMobile />
      <TranslateDesktop />
    </div>
  );
};

export default TranslatePage;
