import Icon from "@mui/material/Icon";
import { BiPackage } from "react-icons/bi";
import {
  BsCheck2All,
  BsFillBasket2Fill,
  BsFillPersonVcardFill,
} from "react-icons/bs";
import { FaFileInvoice, FaHome, FaTools } from "react-icons/fa";
import { MdCategory, MdFavorite, MdShoppingBag } from "react-icons/md";
import { RiBillFill, RiShoppingCartFill } from "react-icons/ri";
import { TiChartLine } from "react-icons/ti";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

import React from "react";

const SideBar = () => {
  const navItem = [
    {
      icon: FaHome,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: MdCategory,
      name: "Categories",
      path: "/dashboard/categories",
    },
    {
      icon: BsFillBasket2Fill,
      name: "Items",
      path: "/dashboard/items",
    },
    {
      icon: RiShoppingCartFill,
      name: "Sales orders",
      path: "/dashboard/sales",
    },
    {
      icon: BiPackage,
      name: "Packages",
      path: "/",
    },
    {
      icon: FaFileInvoice,
      name: "Invoices",
      path: "/",
    },
    {
      icon: MdShoppingBag,
      name: "Purcahase Orders",
      path: "/",
    },
    {
      icon: RiBillFill,
      name: "Bills",
      path: "/",
    },
    {
      icon: FaTools,
      name: "Integrations",
      path: "/",
    },
    {
      icon: TiChartLine,
      name: "Reports",
      path: "/",
    },
  ];
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "white",
          height: "100vh",
          width: "15.5rem",
          position: "fixed",
          zIndex: 100,
        },
      }}
    >
      {/* Showing my tailwind skills 🤣🤣 */}
      <h2 className="p-4 uppercase text-center font-bold text-3xl text-teal-500">
        Trakade
      </h2>
      <Menu>
        {/* {navItem.map(({ icon, name, path }) => (
          <MenuItem
            component={<Link to="/" />}
            icon={React.createElement(MdFavorite)}
          >
            Favorite
          </MenuItem><MenuItem icon={React.createElement(BsCheck2All)}>All</MenuItem></>
        </SubMenu> */}

        {navItem.map(({ icon, name, path }) => (
          <MenuItem
            key={name}
            component={<Link to={`${path}`} />}
            icon={React.createElement(icon)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};
export default SideBar;
