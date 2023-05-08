import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Divider, Grid, IconButton } from "@mui/material";
import InventSummary from "./PurchaseOverview";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/SalesOverview.module.css";
import Overview from "./Overview";
import { salesOverviews } from "../../helpers/dummyData";

const SaleOverview = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ width: "100%", mx: 0, mb: 2, gap: 4, position: "relative" }}
      >
        <Grid
          item
          xs={12}
          md={5.7}
          sx={{ pt: 1, borderRadius: 2, bgcolor: "#fff" }}
          className={styles.sales_grid}
        >
          <div className={styles.header_container}>
            <h3 className={styles.sales_header}>Sales Overview</h3>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Overview overviews={salesOverviews} />
          </Grid>
          <Divider
            orientation="vertical"
            sx={{
              width: 2,
              height: 60,
              mx: 2,
              position: "absolute",
              top: "3rem",
              left: "14rem",
            }}
          />
        </Grid>
        <>
          <InventSummary />
        </>
      </Grid>
    </>
  );
};

export default SaleOverview;
