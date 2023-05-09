import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Suppliers from "./Suppliers";
import { customersColumns, customersRows, contactToolbar } from "./rowColumns";

type Props = {};

const Customers = (props: Props) => {
  return (
    <div>
      <Grid container sx={{ mb: 4 }} spacing={5}>
        <Grid item md={5.96}>
          <DataGrid
            rows={customersRows}
            columns={customersColumns}
            slots={{
              toolbar: contactToolbar,
            }}
            hideFooter={true}
          />
        </Grid>
        <Grid item md={5.96}>
          <Suppliers />
        </Grid>
      </Grid>
    </div>
  );
};

export default Customers;
