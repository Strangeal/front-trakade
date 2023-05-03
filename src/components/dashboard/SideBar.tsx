import { Link } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Icon from "@mui/material/Icon";
import {
  BsFillPersonVcardFill,
  BsFillBasket2Fill,
  BsCheck2All,
} from "react-icons/bs";
import { MdCategory, MdShoppingBag, MdFavorite } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";
import { FaFileInvoice, FaTools } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { TiChartLine } from "react-icons/ti";

import React from "react";

// #14C8AB
// #8888B92
const SideBar = () => {
  return (
    <div style={{ display: "flex", height: "100vh", position: "fixed" }}>
      <Sidebar style={{ backgroundColor: "#FFF", position: "relative" }}>
        {/* Showing my tailwind skills 🤣🤣 */}
        <h2 className="p-4 text-center font-bold text-3xl text-teal-500">
          Sidebar
        </h2>
        <Menu style={{ backgroundColor: "#FFF" }}>
          <SubMenu
            label="Contacts"
            icon={React.createElement(BsFillPersonVcardFill)}
          >
            <MenuItem
              component={<Link to="/" />}
              icon={React.createElement(MdFavorite)}
            >
              Favorite
            </MenuItem>
            <MenuItem icon={React.createElement(BsCheck2All)}>All</MenuItem>
          </SubMenu>
          <MenuItem icon={React.createElement(MdCategory)}>Categories</MenuItem>
          <MenuItem icon={React.createElement(BsFillBasket2Fill)}>
            Items
          </MenuItem>
          <MenuItem icon={React.createElement(RiShoppingCartFill)}>
            Sales orders
          </MenuItem>
          <MenuItem icon={React.createElement(BiPackage)}>Packages</MenuItem>
          <MenuItem icon={React.createElement(FaFileInvoice)}>
            Invoices
          </MenuItem>
          <MenuItem icon={React.createElement(MdShoppingBag)}>
            Purcahase Orders
          </MenuItem>
          <MenuItem icon={React.createElement(RiBillFill)}>Bills</MenuItem>
          <MenuItem icon={React.createElement(FaTools)}>Integrations</MenuItem>
          <MenuItem icon={React.createElement(TiChartLine)}>Reports</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideBar;
