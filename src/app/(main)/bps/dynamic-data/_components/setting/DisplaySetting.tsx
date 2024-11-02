'use client'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {EDynamicDataDisplay, useDynamicDataStore} from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import {LuAreaChart, LuTable} from "react-icons/lu";
import {useShallow} from "zustand/shallow";

const DynamicDataDisplaySetting = ()=> {
    const { updateStore} = useDynamicDataStore(
        useShallow((state) => ({
            updateStore: state.updateStore
        })),
    );

    return (
        <Select name="display" defaultValue={EDynamicDataDisplay.Table} onValueChange={(value)=> updateStore("display", value)}>
            <SelectTrigger id="display" className="h-10">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={EDynamicDataDisplay.Table}>
                    <div className="flex gap-2 items-center">
                    <LuTable />
                    {EDynamicDataDisplay.Table}
                    </div>
                </SelectItem>
                <SelectItem value={EDynamicDataDisplay.Area} className="gap-2">
                    <div className="flex gap-2 items-center">
                        <LuAreaChart/>
                        {EDynamicDataDisplay.Area}
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
};

export default DynamicDataDisplaySetting;