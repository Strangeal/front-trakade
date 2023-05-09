import React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";
import { BsBoxSeamFill } from "react-icons/bs";
import styles from "../../styles/Customers.module.css";
import { inventItemsColumns, inventItemsRows } from "./rowColumns";

type Props = {};

const InventItems = (props: Props) => {
  const customToolbar = () => {
    return (
      <div className={styles.customers_tb_header}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ p: 0 }} className={styles.header_icon}>
            <BsBoxSeamFill className={styles.header_icon} />
          </Avatar>
          <h4>Inventory Items</h4>
        </Box>
        <GridToolbarContainer>
          <GridToolbarQuickFilter />
          <GridToolbarExport
            sx={{
              fontSize: 12,
              fontWeight: 500,
              py: 0.8,
              px: 1.5,
            }}
            className={styles.header_icon}
          />
        </GridToolbarContainer>
      </div>
    );
  };
  return (
    <>
      <Box>
        <DataGrid
          disableColumnFilter
          rows={inventItemsRows}
          columns={inventItemsColumns}
          slots={{
            toolbar: customToolbar,
          }}
          checkboxSelection
          // initialState={{
          //   pagination: {
          //     paginationModel: {
          //       pageSize: 5,
          //     },
          //   },
          // }}
        />
      </Box>
    </>
  );
};

export default InventItems;
