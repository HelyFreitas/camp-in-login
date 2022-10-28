import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import * as C from "./sidebar-styles"

import { SidebarItem } from "../SidebarItem";

export const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <C.Container sidebar={active}>
      <FaTimes className="button-sidebar" onClick={closeSidebar} />
      <C.Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </C.Content>
    </C.Container>
  );
};
