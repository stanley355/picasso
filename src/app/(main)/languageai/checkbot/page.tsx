import CheckbotDesktop from "./_components/CheckbotDesktop";
import CheckbotMobile from "./_components/CheckbotMobile";

const CheckbotPage = () => {
  return (
    <div className=" w-full h-full">
      <CheckbotMobile />
      <CheckbotDesktop />
    </div>
  );
};

export default CheckbotPage;
