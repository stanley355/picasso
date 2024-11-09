"use client";
import { Button } from "@/components/ui/button";
import { LuImage } from "react-icons/lu";
import DynamicDataChartExport from "@/app/(main)/bps/dynamic-data/_components/export/ChartExport";
import { useCallback, useRef } from "react";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import { TBpsDynamicData } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import { toPng } from "html-to-image";

type TDynamicDataImageExport = {
  chart: EDynamicDataChart | undefined;
  dynamicData: TBpsDynamicData;
  datacontent: Record<string, string | number>[];
};
const DynamicDataImageExport = ({
  chart,
  dynamicData,
  datacontent,
}: TDynamicDataImageExport) => {
  const elementRef = useRef<any>();

  const onButtonClick = useCallback(() => {
    if (elementRef.current === null) {
      return;
    }

    toPng(elementRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${dynamicData.var[0].label}.png`;
        link.href = dataUrl;
        link.click();
      })
  }, [elementRef, dynamicData.var]);

  return (
    <div className="relative w-full">
      <Button
        className="gap-2 z-10 bg-foreground w-full"
        variant="outline"
        onClick={onButtonClick}
      >
        <LuImage />
        Image
      </Button>
      <DynamicDataChartExport
        elementRef={elementRef}
        chart={chart}
        dynamicData={dynamicData}
        datacontent={datacontent}
      />
    </div>
  );
};

export default DynamicDataImageExport;
