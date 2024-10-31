"use server";
import { BPS_API_KEY, BPS_API_URL } from "@/lib/api/constant";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";
import { TBpsResponse } from "@/lib/api/bps/types/TBpsResponse";

export type TBpsDomain = {
  domain_id: string;
  domain_name: string;
  domain_url: string;
};

type TResponse = T;

export const fetchBpsDomainList = async (): Promise<
  TBpsResponse<TBpsDomain>
> => {
  const url = `${BPS_API_URL}domain/type/all/key/${BPS_API_KEY}/`;

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
