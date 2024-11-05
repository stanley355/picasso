"use server";
import { BPS_API_KEY, BPS_API_URL } from "@/lib/api/constant";
import { TBpsResponse } from "@/lib/api/bps/types/TBpsResponse";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";

export type TBpsDomain = {
  domain_id: string;
  domain_name: string;
  domain_url: string;
};

export const fetchBpsDomainList = async (
  type: "all" | "prov" | "kab" | "kabbyprov",
): Promise<TBpsResponse<TBpsPageAndCount | TBpsDomain[]>> => {
  const url = `${BPS_API_URL}domain/type/${type}/key/${BPS_API_KEY}/`;

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
