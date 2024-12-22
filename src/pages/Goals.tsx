// pages/Goals.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import GoalModal from "@/components/goals/GoalModal"; // New Component

interface Goal {
  id: number;
  title: string;
  target: number;
  current: number;
  deadline: string;
}

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: "Emergency Fund",
      target: 10000,
      current: 6500,
      deadline: "2024-12-31",
    },
    {
      id: 2,
      title: "New Car",
      target: 25000,
      current: 8000,
      deadline: "2025-06-30",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoal = (goal: Omit<Goal, "id">) => {
    setGoals([...goals, { ...goal, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Savings Goals</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> New Goal
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            className="hover-scale border-2 border-yellow-400"
          >
            <CardHeader>
              <CardTitle className="text-lg text-foreground">
                {goal.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Progress value={(goal.current / goal.target) * 100} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${goal.current.toLocaleString()}</span>
                <span>${goal.target.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Target Date: {new Date(goal.deadline).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <GoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addGoal}
      />
    </div>
  );
};

export default Goals;
