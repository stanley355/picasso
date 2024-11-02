"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useShallow } from "zustand/shallow";
import { useDynamicDataStore } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";

type TDynamicDataTable = {
  data: Record<string, string | number>[];
};

const DynamicDataTable = ({ data }: TDynamicDataTable) => {
  const columns = [
    {
      accessorKey: "label",
      header: "Year",
    },
    ...Object.keys(data[0])
      .filter((key) => key !== "label")
      .map((time) => ({
        accessorKey: time,
        header: time,
      })),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="max-h-96 h-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-2 text-sm">
                {String(header.column.columnDef.header)}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 text-sm text-center">
                {String(cell.getValue())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicDataTable;
