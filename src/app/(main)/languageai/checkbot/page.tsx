import CheckbotDesktop from "./_components/CheckbotDesktop";
import CheckbotMobile from "./_components/CheckbotMobile";

const CheckbotPage = () => {
  return (
    <div className=" w-full h-full flex flex-col">
      <h1 className="text-lg font-semibold p-2 border-b">Checkbot</h1>
      <CheckbotMobile />
      <CheckbotDesktop />
    </div>
  );
};

export default CheckbotPage;
