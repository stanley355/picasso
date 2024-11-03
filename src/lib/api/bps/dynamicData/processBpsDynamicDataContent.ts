import {
  TBpsDynamicData,
  TDynamicDataHashmap,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";

export const processBpsDynamicDataContent = (
  bpsDynamicData: TBpsDynamicData,
  isDefaultProcessing: boolean,
): Record<string, string | number>[] => {
  if (
    !bpsDynamicData?.datacontent ||
    Object.keys(bpsDynamicData.datacontent).length === 0
  ) {
    return [];
  }

  if (isDefaultProcessing) {
    return processBpsDynamicDataContentByVervar(bpsDynamicData);
  }
  return processBpsDynamicDataContentByYear(bpsDynamicData);
};

const processBpsDynamicDataContentByVervar = (
  bpsDynamicData: TBpsDynamicData,
) => {
  const { vervar, turvar, tahun, turtahun, datacontent } = bpsDynamicData;

  const newDataContent = vervar.map((vervarObj, vervarIndex) => {
    const dataContentRecord: Record<string, string | number> = {
      label: sanitizeLabel(vervarObj.label),
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
            dataContentRecord[sanitizeLabel(newDataContentKey)] =
              dataContentValue ? dataContentValue : "-";
          }
        }
      }
    }

    return dataContentRecord;
  });

  return newDataContent;
};

const combineYearAndTurYear = (
  year: TDynamicDataHashmap[],
  turyear: TDynamicDataHashmap[],
) => {
  let newTimeVervar = [];

  for (let yearIndex = 0; yearIndex < year.length; yearIndex++) {
    for (let turyearIndex = 0; turyearIndex < turyear.length; turyearIndex++) {
      newTimeVervar.push({
        val: parseInt(`${year[yearIndex].val}${turyear[turyearIndex].val}`),
        label:
          turyear[turyearIndex].val === 0
            ? year[yearIndex].label
            : `${turyear[turyearIndex].label} ${year[yearIndex].label}`,
      });
    }
  }
  return newTimeVervar;
};

const processBpsDynamicDataContentByYear = (
  bpsDynamicData: TBpsDynamicData,
) => {
  const { vervar, turvar, tahun, turtahun, datacontent } = bpsDynamicData;

  const newTimeVervar = combineYearAndTurYear(tahun, turtahun);

  const newDataContent = newTimeVervar.map((timeVervar) => {
    const dataContentRecord: Record<string, string | number> = {
      label: timeVervar.label,
    };
    for (let vervarIndex = 0; vervarIndex < vervar.length; vervarIndex++) {
      for (
        let variCount = 0;
        variCount < bpsDynamicData.var.length;
        variCount++
      ) {
        for (let turvarCount = 0; turvarCount < turvar.length; turvarCount++) {
          const vervarVal = String(vervar[vervarIndex].val);
          const varVal = String(bpsDynamicData.var[variCount].val);
          const turvarVal = String(turvar[turvarCount].val);
          const timeVervarVal = String(timeVervar.val);
          const dataContentKey = vervarVal + varVal + turvarVal + timeVervarVal;
          const dataContentValue = datacontent[dataContentKey];
          const newDataContentKey = sanitizeLabel(vervar[vervarIndex].label);
          dataContentRecord[newDataContentKey] = dataContentValue
            ? dataContentValue
            : "";
        }
      }
    }
    return dataContentRecord;
  });
  return newDataContent;
};

const sanitizeLabel = (label: string) => {
  return label.replace("&lt;b&gt;", "").replaceAll("&lt;/b&gt;", "");
};
