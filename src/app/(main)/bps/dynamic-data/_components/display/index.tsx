"use client";
import {
  EDynamicDataDisplay,
  useDynamicDataStore,
} from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import { useShallow } from "zustand/shallow";
import DynamicDataTable from "@/app/(main)/bps/dynamic-data/_components/display/DynamicDataTable";
import DynamicDataAreaChart from "@/app/(main)/bps/dynamic-data/_components/display/DynamicDataAreaChart";

type TDynamicDataDisplay = {
  datacontent: Record<string, string | number>[];
};

const DynamicDataDisplay = ({ datacontent }: TDynamicDataDisplay) => {
  const { display } = useDynamicDataStore(
    useShallow((state) => ({
      display: state.display,
    })),
  );
  switch (display) {
    case EDynamicDataDisplay.Area:
      return <DynamicDataAreaChart data={datacontent} />;
    default:
      return <DynamicDataTable data={datacontent} />;
  }
};

export default DynamicDataDisplay;
