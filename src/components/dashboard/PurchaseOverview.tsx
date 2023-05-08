import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../Theme";
import Overview from "./Overview";
import { purchaseOverview } from "../../helpers/dummyData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/SalesOverview.module.css";

type Props = {};

const PurchaseOverview = (props: Props) => {
  const isTable = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid
        item
        xs={12}
        md={5.9}
        sx={{ pt: 1, borderRadius: 2, bgcolor: "#fff" }}
        className={styles.sales_grid}
      >
        <div className={styles.header_container}>
          <h3 className={styles.sales_header}>Purchase Overview</h3>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <Grid container>
          <Overview overviews={purchaseOverview} />
        </Grid>
      </Grid>

      {/* <Divider
            orientation="vertical"
            sx={{ width: 2, height: 60, mx: 2 }}
          /> */}
    </>
  );
};

export default PurchaseOverview;
