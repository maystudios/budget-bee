// pages/Settings.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import PasswordModal from "@/components/settings/PasswordModal"; // New Component

const Settings = () => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    budgetAlerts: true,
    billReminders: false,
    goalUpdates: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card className="border-2 border-yellow-400">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="budget-alerts">Budget Alerts</Label>
            <Switch
              id="budget-alerts"
              checked={notifications.budgetAlerts}
              onCheckedChange={() => toggleNotification("budgetAlerts")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="bill-reminders">Bill Reminders</Label>
            <Switch
              id="bill-reminders"
              checked={notifications.billReminders}
              onCheckedChange={() => toggleNotification("billReminders")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="goal-updates">Goal Updates</Label>
            <Switch
              id="goal-updates"
              checked={notifications.goalUpdates}
              onCheckedChange={() => toggleNotification("goalUpdates")}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-400">
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full">
            Export Data
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setIsPasswordModalOpen(true)}
          >
            Change Password
          </Button>
          <Button variant="destructive" className="w-full">
            Delete Account
          </Button>
        </CardContent>
      </Card>

      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
};

export default Settings;
