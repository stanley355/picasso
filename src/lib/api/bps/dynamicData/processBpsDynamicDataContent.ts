import { TBpsDynamicData } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";

export const processBpsDynamicDataContent = (
  bpsDynamicData: TBpsDynamicData,
) => {
  const { vervar, turvar, tahun, turtahun, datacontent } = bpsDynamicData;

  const newDynamicData = vervar.map((vervarObj, vervarIndex) => {
    const dataContentRecord: Record<string, string | number> = {
      label: vervarObj.label,
    };
    for (
      let variCount = 0;
      variCount < bpsDynamicData.var.length;
      variCount++
    ) {
      for (let turvarCount = 0; turvarCount < turvar.length; turvarCount++) {
        for (let thCount = 0; thCount < tahun.length; thCount++) {
          for (let turthCount = 0; turthCount < turtahun.length; turthCount++) {
            const vervarVal = String(vervar[vervarIndex].val);
            const varVal = String(bpsDynamicData.var[variCount].val);
            const turvarVal = String(turvar[turvarCount].val);
            const tahunVal = String(tahun[thCount].val);
            const turtahunVal = String(turtahun[turthCount].val);
            const dataContentKey =
              vervarVal + varVal + turvarVal + tahunVal + turtahunVal;
            const dataContentValue = datacontent[dataContentKey];
            // 0 means no turtahun
            const newDataContentKey =
              turtahun[0].val === 0
                ? tahun[thCount].label
                : turtahun[turthCount].label + " " + tahun[thCount].label;
            dataContentRecord[newDataContentKey] = dataContentValue;
          }
        }
      }
    }

    return dataContentRecord;
  });
  return newDynamicData;
};
