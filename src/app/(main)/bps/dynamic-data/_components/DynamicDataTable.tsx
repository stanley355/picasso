'use client'
import {getCoreRowModel, useReactTable} from '@tanstack/react-table';

type TDynamicDataTable = {
    data: Record<string, string | number>[]
}

const DynamicDataTable = ({data}: TDynamicDataTable) => {

    const columns = [
        {
            accessorKey: 'label',
            header: 'Wilayah',
        },
        ...Object.keys(data[0])
            .filter(key => key !== 'label')
            .map(time => ({
                accessorKey: time,
                header: time,
            })),
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
            <table>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} className="border-b">
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="p-2">{String(header.column.columnDef.header)}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className="border-b">
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="p-2">{String(cell.getValue())}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
    );
};

export default DynamicDataTable;
