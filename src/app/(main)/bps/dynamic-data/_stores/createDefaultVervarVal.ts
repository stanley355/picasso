import {TDynamicDataHashmap} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";

export const createDefaultVervarVal = (vervar: TDynamicDataHashmap[]) => {
    if (vervar.length > 3) {
       const defaulltVervars = vervar.slice(0, 3);
       return defaulltVervars.map((ver)=> ver.val).join(";")
    }

    return String(vervar[0].val);
}