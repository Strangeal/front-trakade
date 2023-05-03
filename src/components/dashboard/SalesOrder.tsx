import {
  Box,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import PurchaseOrder from "./PurchaseOrder";

type Props = {};
function createData(
  channel: string,
  draft: number,
  confirmed: number,
  packed: number,
  shipped: number,
  invoiced: number
) {
  return { channel, draft, confirmed, packed, shipped, invoiced };
}

const rows = [
  createData("Frozen yoghurt", 0, 159, 6, 24, 4),
  createData("Ice cream sandwich", 0, 237, 9, 37, 4),
];
const SalesOrder = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={5} lg={4}>
        <PurchaseOrder />
      </Grid>
      <Grid item md={7} lg={8}>
        <TableContainer>
          <Table sx={{ border: 1, borderColor: "#e0e0e0", boxShadow: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: 700, textTransform: "uppercase" }}
                  colSpan={3}
                >
                  Sales Order
                </TableCell>
                <TableCell sx={{}} align="right" colSpan={3}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Typography>This Month</Typography>
                    <IconButton sx={{ p: 0 }}>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Channel</TableCell>
                <TableCell align="right">Draft</TableCell>
                <TableCell align="right">Confirmed</TableCell>
                <TableCell align="right">Packed</TableCell>
                <TableCell align="right">Shipped</TableCell>
                <TableCell align="right">Invoiced</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.channel}>
                  <TableCell component="th" scope="row">
                    {row.channel}
                  </TableCell>
                  <TableCell align="right">{row.draft}</TableCell>
                  <TableCell align="right">{row.confirmed}</TableCell>
                  <TableCell align="right">{row.packed}</TableCell>
                  <TableCell align="right">{row.shipped}</TableCell>
                  <TableCell align="right">{row.invoiced}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SalesOrder;
