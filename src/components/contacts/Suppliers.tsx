import React from "react";
import { contactToolbar, supplierColumns, suppliersRows } from "./rowColumns";
import { DataGrid } from "@mui/x-data-grid";

type Props = {};

const Suppliers = (props: Props) => {
  return (
    <>
      <DataGrid
        rows={suppliersRows}
        columns={supplierColumns}
        slots={{
          toolbar: contactToolbar,
        }}
        hideFooter={true}
      />
    </>
  );
};

export default Suppliers;
