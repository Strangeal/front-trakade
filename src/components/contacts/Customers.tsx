import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Suppliers from "./Suppliers";
import { customersColumns, customersRows, ContactToolbar } from "./rowColumns";

type Props = {};

const custombar = () => {
  return <ContactToolbar title="Customers" />;
};
const Customers = (props: Props) => {
  return (
    <>
      <Grid container sx={{ mb: 4 }} spacing={5}>
        <Grid item md={5.96}>
          <DataGrid
            rows={customersRows}
            columns={customersColumns}
            slots={{
              toolbar: custombar,
            }}
            hideFooter={true}
          />
        </Grid>
        <Grid item md={5.96}>
          <Suppliers />
        </Grid>
      </Grid>
    </>
  );
};

export default Customers;
