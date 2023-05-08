import Icon from '@mui/material/Icon';
import { BiPackage } from 'react-icons/bi';
import {
  BsCheck2All,
  BsFillBasket2Fill,
  BsFillPersonVcardFill,
} from 'react-icons/bs';
import { FaFileInvoice, FaTools } from 'react-icons/fa';
import { MdCategory, MdFavorite, MdShoppingBag } from 'react-icons/md';
import { RiBillFill, RiShoppingCartFill } from 'react-icons/ri';
import { TiChartLine } from 'react-icons/ti';
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  sidebarClasses,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import styles from '../../styles/Home.module.css';

import React from 'react';

// #14C8AB
// #8888B92
const SideBar = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'white',
          height: '100vh',
          width: '15.5rem',
          position: 'fixed',
          zIndex: 100,
        },
      }}
    >
      {/* Showing my tailwind skills 🤣🤣 */}
      <h2 className="p-4 text-center font-bold text-3xl text-teal-500">
        Sidebar
      </h2>
      <Menu>
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
        <MenuItem icon={React.createElement(BsFillBasket2Fill)}>Items</MenuItem>
        <MenuItem icon={React.createElement(RiShoppingCartFill)}>
          Sales orders
        </MenuItem>
        <MenuItem icon={React.createElement(BiPackage)}>Packages</MenuItem>
        <MenuItem icon={React.createElement(FaFileInvoice)}>Invoices</MenuItem>
        <MenuItem icon={React.createElement(MdShoppingBag)}>
          Purcahase Orders
        </MenuItem>
        <MenuItem icon={React.createElement(RiBillFill)}>Bills</MenuItem>
        <MenuItem icon={React.createElement(FaTools)}>Integrations</MenuItem>
        <MenuItem icon={React.createElement(TiChartLine)}>Reports</MenuItem>
      </Menu>
    </Sidebar>
  );
};
export default SideBar;
