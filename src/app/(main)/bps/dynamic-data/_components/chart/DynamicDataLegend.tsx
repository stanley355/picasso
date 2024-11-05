const DynamicDataLegend = ({ payload }: any) => {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {payload.map((item: any) => (
        <div key={item.dataKey} className="flex gap-1 items-center">
          <div
            className="w-2.5 h-2.5 rounded border"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default DynamicDataLegend;
