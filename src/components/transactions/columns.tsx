import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any, any>[] = [
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <span className={value < 0 ? "text-red-500" : "text-green-500"}>
          ${Math.abs(value).toLocaleString()}
        </span>
      );
    },
  },
  {
    header: "Category",
    accessorKey: "category",
  },
];
