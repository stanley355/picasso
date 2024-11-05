import Image from "next/image";

type TBpsDynamicDataHeader = {
  title: string;
};
const BpsDynamicDataHeader = ({ title }: TBpsDynamicDataHeader) => {
  return (
    <div className="flex items-center justify-start md:justify-between p-2 border-b">
      <span className="flex items-center gap-2">
        <Image
          src="/images/bps.png"
          alt="BPS Dynamic Data"
          width={20}
          height={20}
        />
        <h1 className="text-sm">{title}</h1>
      </span>
      <span className="text-xs hidden md:block">*Courtesy of BPS WEB API</span>
    </div>
  );
};

export default BpsDynamicDataHeader;
