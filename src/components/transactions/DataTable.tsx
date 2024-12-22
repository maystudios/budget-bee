// components/transactions/DataTable.tsx
import { FC } from "react";

interface DataTableProps {
  columns: string[];
  data: any[];
}

export const DataTable: FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-yellow-400">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 border-b border-yellow-400 text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-yellow-50">
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 border-b border-yellow-400">
                  {row[col.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
