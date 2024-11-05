import {BPS_API_KEY, BPS_API_URL} from "@/lib/api/constant";
import {TBpsResponse} from "@/lib/api/bps/types/TBpsResponse";
import {TBpsPageAndCount} from "@/lib/api/bps/types/TBpsPageAndCount";

type TBpsDynamicDataVarListRequestParam = {
    domain?: string;
    subject?: number;
    page?: number;
}

export type TBpsDynamicDataVar = {
    var_id: number
    title: string
    sub_id: number
    sub_name: string
    subcsa_id: number
    subcsa_name: string
    def: string
    notes: string
    vertical: number
    unit: string
    graph_id: number
    graph_name: string
}

export const fetchBpsDynamicDataVarList =  async (param: TBpsDynamicDataVarListRequestParam): Promise<TBpsResponse<TBpsPageAndCount | TBpsDynamicDataVar[]>> => {
    const domain = param?.domain ? param.domain : "0000"; //PUSAT
    let url = `${BPS_API_URL}list/model/var/domain/${domain}`;

   if (param.subject) {
       url += `/subject/${param.subject}`
   }

    if (param.page) {
        url += `/page/${param.page}`
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
}