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

  const { vervar, turvar, tahun, turtahun, datacontent } = bpsDynamicData;
  const timeVervar = createTimeVervar(turvar, tahun, turtahun);
  if (isDefaultProcessing) {
    return processDatacontentByVervar(
      timeVervar,
      vervar,
      bpsDynamicData.var,
      datacontent,
    );
  }
  return processDatacontentByTimeVervar(
    timeVervar,
    vervar,
    bpsDynamicData.var,
    datacontent,
  );
};

export const sanitizeLabel = (label: string) => {
  return label.replace("&lt;b&gt;", "").replaceAll("&lt;/b&gt;", "");
};

const createTimeVervar = (
  turvar: TDynamicDataHashmap[],
  year: TDynamicDataHashmap[],
  turyear: TDynamicDataHashmap[],
): TDynamicDataHashmap[] => {
  let timeVervar = [];

  for (let turvarIndex = 0; turvarIndex < turvar.length; turvarIndex++) {
    for (let yearIndex = 0; yearIndex < year.length; yearIndex++) {
      for (
        let turyearIndex = 0;
        turyearIndex < turyear.length;
        turyearIndex++
      ) {
        const turvarVal = turvar[turvarIndex].val;
        const turvarLabel = turvarVal === 0 ? "" : turvar[turvarIndex].label;
        const yearVal = year[yearIndex].val;
        const yearLabel = year[yearIndex].label;
        const turyearVal = turyear[turyearIndex].val;
        const turyearLabel =
          turyearVal === 0 ? "" : turyear[turyearIndex].label;
        const val = `${turvarVal}${yearVal}${turyearVal}`;
        const label = turvarLabel + " " + yearLabel + " " + turyearLabel;

        timeVervar.push({
          val,
          label: label.trim(),
        });
      }
    }
  }
  return timeVervar;
};

const processDatacontentByVervar = (
  timeVervar: TDynamicDataHashmap[],
  vervar: TDynamicDataHashmap[],
  variable: TDynamicDataHashmap[],
  datacontent: Record<any, number>,
): Record<string, string | number>[] => {
  let newDataContent = [];

  for (let vervarIndex = 0; vervarIndex < vervar.length; vervarIndex++) {
    const vervarLabel = vervar[vervarIndex].label;
    const dataContentRecord: Record<string, string | number> = {
      label: sanitizeLabel(vervarLabel),
    };
    for (
      let variableIndex = 0;
      variableIndex < variable.length;
      variableIndex++
    ) {
      for (
        let timeVervarIndex = 0;
        timeVervarIndex < timeVervar.length;
        timeVervarIndex++
      ) {
        const vervarVal = vervar[vervarIndex].val;
        const variableVal = variable[variableIndex].val;
        const timeVervarVal = timeVervar[timeVervarIndex].val;
        const oldDatacontentKey = `${vervarVal}${variableVal}${timeVervarVal}`;
        const dataContentValue = datacontent[oldDatacontentKey];
        const newDataContentKey = timeVervar[timeVervarIndex].label;
        dataContentRecord[newDataContentKey] = dataContentValue
          ? dataContentValue
          : "-";
      }
    }

    newDataContent.push(dataContentRecord);
  }

  return newDataContent;
};

const processDatacontentByTimeVervar = (
  timeVervar: TDynamicDataHashmap[],
  vervar: TDynamicDataHashmap[],
  variable: TDynamicDataHashmap[],
  datacontent: Record<any, number>,
): Record<string, string | number>[] => {
  let newDataContent = [];

  for (
    let timeVervarIndex = 0;
    timeVervarIndex < timeVervar.length;
    timeVervarIndex++
  ) {
    const timeVervarLabel = timeVervar[timeVervarIndex].label;
    const dataContentRecord: Record<string, string | number> = {
      label: sanitizeLabel(timeVervarLabel),
    };
    for (let vervarIndex = 0; vervarIndex < vervar.length; vervarIndex++) {
      for (
        let variableIndex = 0;
        variableIndex < variable.length;
        variableIndex++
      ) {
        const vervarVal = vervar[vervarIndex].val;
        const variableVal = variable[variableIndex].val;
        const timeVervarVal = timeVervar[timeVervarIndex].val;
        const oldDatacontentKey = `${vervarVal}${variableVal}${timeVervarVal}`;
        const dataContentValue = datacontent[oldDatacontentKey];
        const newDataContentKey = sanitizeLabel(vervar[vervarIndex].label);
        dataContentRecord[newDataContentKey] = dataContentValue
          ? dataContentValue
          : "-";
      }
    }

    newDataContent.push(dataContentRecord);
  }

  return newDataContent;
};
