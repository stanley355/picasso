"use client";

type TDynamicDataTable = {
  data: Record<string, string | number>[];
};

const DynamicDataTable = ({ data }: TDynamicDataTable) => {
  return (
    <table className="max-h-96 h-full w-full">
      <thead>
        <tr className="border-b">
          {Object.keys(data[0]).map((header) => (
            <th key={header} className="p-2 text-sm text-left font-normal text-text-foreground">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={row.label} className="border-b">
            {Object.values(row).map((cell, cellIndex) => (
              <td
                key={`${rowIndex}_${cellIndex}_${cell}`}
                className="p-2 text-sm text-left"
              >
                {typeof cell === "number"
                  ? Number(cell).toLocaleString("id-ID")
                  : cell
                    ? cell
                    : "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicDataTable;
