import { useState } from "react";
import Sidebar from "../../components/Admin/Dashboard/Sidebar";
import DashboardContent from "../../components/Admin/Dashboard/DashboardContent";
import MoviesComponent from "../../components/Admin/Movies/MoviesComponent";
import TheatersComponent from "../../components/Admin/Theaters/TheatersComponent";
import TicketsComponent from "../../components/Admin/Tickets/TicketComponent";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Dashboard");

  const renderContent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return <DashboardContent />;
      case "Theaters":
        return <TheatersComponent />;
      case "Movies":
        return <MoviesComponent />;
      case "Tickets": // Add case for Tickets
        return <TicketsComponent />;
      default:
        return <DashboardContent />; // Default to Dashboard if no match
    }
  };

  return (
    <div className="flex">
      {/* <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> */}
      <div className="flex-1 p-10">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
