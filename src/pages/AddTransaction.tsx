// pages/AddTransaction.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    // Implement transaction addition logic
    console.log({ date, description, amount, category });
    navigate("/transactions");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Transaction</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Grocery Shopping"
          />
        </div>
        <div>
          <Label htmlFor="amount">Amount ($)</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="e.g., -50.00 or 3000.00"
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Food, Salary"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <Button variant="outline" onClick={() => navigate("/transactions")}>
          Cancel
        </Button>
        <Button
          onClick={handleAdd}
          disabled={!date || !description || !category}
        >
          Add Transaction
        </Button>
      </div>
    </div>
  );
};

export default AddTransaction;
