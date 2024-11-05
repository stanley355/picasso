const DynamicDataTooltip = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className="bg-background shadow-lg text-sm p-2 rounded-md">
        <div className="font-semibold mb-2">{label}</div>
        <div>
          {payload.map((item: any) => (
            <div key={item.dataKey} className="flex gap-4 justify-between">
              <div className="flex gap-1 items-center">
                <div
                  className="w-2.5 h-2.5 rounded border"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.dataKey}</span>
              </div>
              <span>
                {typeof item.value === "number"
                  ? Number(item.value).toLocaleString("id-ID")
                  : "-"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default DynamicDataTooltip;
