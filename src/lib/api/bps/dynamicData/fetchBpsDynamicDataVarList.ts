"use server";
import { BPS_API_KEY, BPS_API_URL } from "@/lib/api/constant";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";
import { TBpsResponse } from "@/lib/api/bps/types/TBpsResponse";

export type TBpsDynamicDataVar = {
  var_id: number;
  title: string;
  sub_id: number;
  sub_name: string;
  subcsa_id: number;
  subcsa_name: string;
  def: string;
  notes: string;
  vertical: number;
  unit: string;
  graph_id: number;
  graph_name: string;
};

type TResponse = (TBpsPageAndCount | TBpsDynamicDataVar[])[];

export const fetchBpsDynamicDataVarList = async (
  keyword: string,
  page: number,
): Promise<TBpsResponse<TResponse>> => {
  const url = `${BPS_API_URL}list/model/var/domain/0000/page/${page}/key/${BPS_API_KEY}/keyword/${keyword}/`;

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
    console.error(err);
    return {
      status: "ERROR",
      "data-availability": "list-not-available",
      data: "",
    };
  }
};
