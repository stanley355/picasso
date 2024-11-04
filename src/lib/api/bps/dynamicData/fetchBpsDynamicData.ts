import { BPS_API_KEY, BPS_API_URL } from "@/lib/api/constant";
import { TBpsResponse } from "@/lib/api/bps/types/TBpsResponse";

export type TBpsDynamicDataRequestParam = {
  domain: string;
  var: number;
  turvar?: string;
  vervar?: string;
  th?: string;
  turth?: string;
};

export type TDynamicDataHashmap = {
  val: number;
  label: string;
};

type TDynamicDataVar = TDynamicDataHashmap & {
  unit: string;
  subj: string;
  def: string;
  decimal: string;
  note: string;
};

export type TBpsDynamicData = TBpsResponse & {
  var: TDynamicDataVar[];
  turvar: TDynamicDataHashmap[];
  labelvervar: string[];
  vervar: TDynamicDataHashmap[];
  tahun: TDynamicDataHashmap[];
  turtahun: TDynamicDataHashmap[];
  datacontent: Record<string, number>;
};

export const fetchBpsDynamicData = async (
  param: TBpsDynamicDataRequestParam,
  isBaseData: boolean,
): Promise<TBpsDynamicData> => {
  let url = `${BPS_API_URL}list/model/data/domain/${param.domain}/var/${param.var}`;

  if (param.turvar) {
    url += `/turvar/${param.turvar}`;
  }

  if (!isBaseData && !param.vervar) {
    url += `/vervar/9999;3100;3400;3578`; // Indonesia;Jakarta;Yogyakarta;Surabaya
  }

  if (param.vervar) {
    url += `/vervar/${param.vervar}`;
  }

  if (param.th) {
    url += `/th/${param.th}`;
  }

  if (param.turth) {
    url += `/turth/${param.turth}`;
  }

  url += `/key/${BPS_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
