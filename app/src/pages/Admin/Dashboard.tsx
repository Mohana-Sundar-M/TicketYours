import { useState } from 'react';
import Sidebar from '../../components/Admin/Dashboard/Sidebar';
import DashboardContent from '../../components/Admin/Dashboard/DashboardContent';
import MoviesComponent from '../../components/Admin/Movies/MoviesComponent';
import TheatersComponent from '../../components/Admin/Theaters/TheatersComponent';
import TicketsComponent from '../../components/Admin/Tickets/TicketComponent';
import CustomerSupportComponent from '../../components/Admin/CustomerSupport/CustomerSupportComponent'; // Import Customer Support Component
import UsersComponent from '../../components/Admin/Users/UsersComponnet';
import PromotionComponent from '../../components/Admin/Promotion/PromotionComponnet';
import AnalyticsComponent from '../../components/Admin/Analytics/AnalyticsComponent'; // Import AnalyticsComponent

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Dashboard');

  const renderContent = () => {
    switch (selectedItem) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Theaters':
        return <TheatersComponent />;
      case 'Movies':
        return <MoviesComponent />;
      case 'Tickets':
        return <TicketsComponent />;
      case 'Customer Support':
        return <CustomerSupportComponent />;
      case 'Users':
        return <UsersComponent />;
      case 'Promotion':
        return <PromotionComponent />;
      case 'Analytics': // Analytics case added here
        return <AnalyticsComponent />;
      default:
        return <DashboardContent />; // Default to Dashboard if no match
    }
  };

  return (
    <div className="flex">
      <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <div className="flex-1 p-10">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
