// components/navigation/NavigationBar.tsx
import { NavLink } from "react-router-dom";
import { Home, List, Target, Settings, LogOut } from "lucide-react";

export const NavigationBar = () => {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/transactions", label: "Transactions", icon: List },
    { path: "/goals", label: "Goals", icon: Target },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    // Implement logout functionality
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-sidebar-primary shadow-lg">
      <div className="flex justify-around p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-${
                isActive ? "primary-foreground" : "sidebar-foreground"
              }`
            }
          >
            <item.icon className="h-6 w-6" />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-sidebar-foreground"
        >
          <LogOut className="h-6 w-6" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </nav>
  );
};
