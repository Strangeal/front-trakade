import {
  Box,
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

type Props = {};

const PurchaseOrder = (props: Props) => {
  return (
    <TableContainer>
      <Table>
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
        </TableHead>

        <TableRow>
          <TableCell colSpan={10} sx={{ py: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Ouantity Ordered</Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 900, color: "#5DADE2" }}
              >
                80.90
              </Typography>
            </Box>
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default PurchaseOrder;
