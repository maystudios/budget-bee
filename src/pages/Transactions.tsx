// pages/Transactions.tsx
import { useState } from "react";
import { DataTable } from "@/components/transactions/DataTable";
import { columns } from "@/components/transactions/columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
}

const Transactions = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      date: "2021-09-01",
      description: "Grocery Shopping",
      amount: -50.0,
      category: "Food",
    },
    {
      id: "2",
      date: "2021-09-05",
      description: "Paycheck",
      amount: 3000.0,
      category: "Salary",
    },
    {
      id: "3",
      date: "2021-09-10",
      description: "Dinner",
      amount: -30.0,
      category: "Food",
    },
    {
      id: "4",
      date: "2021-09-15",
      description: "Electricity Bill",
      amount: -100.0,
      category: "Utilities",
    },
    {
      id: "5",
      date: "2021-09-20",
      description: "Paycheck",
      amount: 3000.0,
      category: "Salary",
    },
    {
      id: "6",
      date: "2021-09-25",
      description: "Lunch",
      amount: -15.0,
      category: "Food",
    },
    {
      id: "7",
      date: "2021-09-30",
      description: "Internet Bill",
      amount: -50.0,
      category: "Utilities",
    },
  ]);

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    setTransactions([
      ...transactions,
      { ...transaction, id: Date.now().toString() },
    ]);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button onClick={() => navigate("/add-transaction")}>
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
      </div>
      <DataTable columns={columns} data={transactions} />
    </div>
  );
};

export default Transactions;
