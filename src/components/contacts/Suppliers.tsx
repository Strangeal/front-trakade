import React from "react";
import { ContactToolbar, supplierColumns, suppliersRows } from "./rowColumns";
import { DataGrid } from "@mui/x-data-grid";

type Props = {};

const custombar = () => {
  return <ContactToolbar title="Suppliers" />;
};

const Suppliers = (props: Props) => {
  return (
    <>
      <DataGrid
        rows={suppliersRows}
        columns={supplierColumns}
        slots={{
          toolbar: custombar,
        }}
        hideFooter={true}
      />
    </>
  );
};

export default Suppliers;
