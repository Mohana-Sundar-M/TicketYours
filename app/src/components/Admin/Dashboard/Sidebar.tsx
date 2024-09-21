import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTicketAlt, faFilm, faUsers, faClipboardList, faBullhorn, faChartLine, faCog, faSignOut } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedItem, setSelectedItem }) => {
  const menuItems = [
    { icon: faHome, label: 'Dashboard' },
    { icon: faFilm, label: 'Theaters' },
    { icon: faTicketAlt, label: 'Movies' },
    { icon: faTicketAlt, label: 'Tickets' },
    { icon: faUsers, label: 'Customer Support' },
    { icon: faClipboardList, label: 'Users' },
    { icon: faBullhorn, label: 'Promotion' },
    { icon: faChartLine, label: 'Analytics' },
    { icon: faCog, label: 'Settings' },
    { icon: faSignOut, label: 'Logout' },
  ];

  return (
    <div className="fixed top-0 left-0 w-64 bg-gray-100 h-screen p-6 pt-10">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center p-2 rounded-md cursor-pointer ${
              selectedItem === item.label ? 'bg-gray-300' : 'hover:bg-gray-200'
            }`}
            onClick={() => setSelectedItem(item.label)}
          >
            <FontAwesomeIcon icon={item.icon} className="mr-3" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
