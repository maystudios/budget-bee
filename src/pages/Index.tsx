// pages/Index.tsx
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarSign,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { BudgetProgress } from "@/components/dashboard/BudgetProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            🐝 Budget-Bee
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your personal finance companion
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3 animate-slide-in-bottom">
          <StatCard
            title="Total Balance"
            value="$12,450"
            icon={<DollarSign className="h-6 w-6 text-primary" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Monthly Savings"
            value="$2,150"
            icon={<PiggyBank className="h-6 w-6 text-primary" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Monthly Expenses"
            value="$3,200"
            icon={<Wallet className="h-6 w-6 text-primary" />}
            trend={{ value: 5, isPositive: false }}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            Budget Overview
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BudgetProgress category="Housing" spent={1200} total={1500} />
            <BudgetProgress category="Food" spent={400} total={600} />
            <BudgetProgress category="Transportation" spent={250} total={400} />
            <BudgetProgress category="Entertainment" spent={150} total={300} />
            <BudgetProgress category="Shopping" spent={300} total={500} />
            <BudgetProgress category="Utilities" spent={180} total={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
