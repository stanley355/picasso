import TtsDesktop from "./_components/TtsDesktop";
import TtsMobile from "./_components/TtsMobile";

const TtsPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-lg font-semibold p-2 border-b">Text to Speech</h1>
      <TtsMobile />
      <TtsDesktop />
    </div>
  );
};

export default TtsPage;
