// components/goals/GoalModal.tsx
import { FC, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface GoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (goal: {
    title: string;
    target: number;
    current: number;
    deadline: string;
  }) => void;
}

const GoalModal: FC<GoalModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState<number>(0);
  const [deadline, setDeadline] = useState("");

  const handleSave = () => {
    onSave({ title, target, current: 0, deadline });
    setTitle("");
    setTarget(0);
    setDeadline("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">New Savings Goal</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Goal Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Vacation Fund"
            />
          </div>
          <div>
            <Label htmlFor="target">Target Amount ($)</Label>
            <Input
              id="target"
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              placeholder="e.g., 5000"
            />
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!title || !target || !deadline}
          >
            Save Goal
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default GoalModal;
