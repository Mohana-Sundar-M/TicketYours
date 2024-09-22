import {
  faHome,
  faTicketAlt,
  faFilm,
  faUsers,
  faClipboardList,
  faBullhorn,
  faChartLine,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export const adminMenus = [
  { icon: faHome, label: "Dashboard", route: "/admin/dashboard" },
  { icon: faFilm, label: "Theaters", route: "/admin/theaters" },
  { icon: faTicketAlt, label: "Movies", route: "/admin/movies" },
  { icon: faTicketAlt, label: "Tickets", route: "/admin/tickets" },
  {
    icon: faUsers,
    label: "Customer Support",
    route: "/admin/customer-support",
  },
  { icon: faClipboardList, label: "Users", route: "/admin/users" },
  { icon: faBullhorn, label: "Promotion", route: "/admin/promotionn" },
  { icon: faChartLine, label: "Analytics", route: "/admin/dashboard" },
  { icon: faCog, label: "Settings", route: "/admin/settings" },
];
