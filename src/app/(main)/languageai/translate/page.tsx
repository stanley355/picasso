import TranslateDesktop from "./_components/TranslateDesktop";
import TranslateMobile from "./_components/TranslateMobile";

const TranslatePage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-lg font-semibold p-2 border-b">Translate</h1>
      <TranslateMobile />
      <TranslateDesktop />
    </div>
  );
};

export default TranslatePage;
