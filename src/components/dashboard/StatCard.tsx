// components/dashboard/StatCard.tsx
import { FC } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  trend: {
    value: number;
    isPositive: boolean;
  };
}

export const StatCard: FC<StatCardProps> = ({ title, value, icon, trend }) => {
  return (
    <div className="glass-card p-4 rounded-lg border-2 border-yellow-400">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-4xl text-primary">{icon}</div>
      </div>
      <div className="mt-2 flex items-center text-sm">
        {trend.isPositive ? (
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="h-4 w-4 text-red-500" />
        )}
        <span
          className={`ml-1 ${
            trend.isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend.value}%
        </span>
      </div>
      <h3 className="mt-2 text-sm text-secondary">{title}</h3>
    </div>
  );
};
