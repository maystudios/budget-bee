// components/dashboard/BudgetProgress.tsx
import { FC } from "react";
import { Progress } from "@/components/ui/progress";

interface BudgetProgressProps {
  category: string;
  spent: number;
  total: number;
}

export const BudgetProgress: FC<BudgetProgressProps> = ({
  category,
  spent,
  total,
}) => {
  const percentage = Math.min((spent / total) * 100, 100);

  return (
    <div className="glass-card p-4 rounded-lg border-2 border-yellow-400">
      <h4 className="text-lg font-semibold text-foreground">{category}</h4>
      <Progress value={percentage} className="mt-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>${spent.toLocaleString()}</span>
        <span>${total.toLocaleString()}</span>
      </div>
    </div>
  );
};
