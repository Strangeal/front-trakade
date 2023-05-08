import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../Theme";
import InventSummary from "./PurchaseOverview";
import StyleIcon from "@mui/icons-material/Style";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/SalesOverview.module.css";
import Overview from "./Overview";
import { salesOverviews } from "../../helpers/dummyData";

const SaleOverview = () => {
  return (
    <>
      <Grid container spacing={4} sx={{ width: "100%", mx: 0, my: 2, gap: 2 }}>
        <Grid
          item
          xs={12}
          md={5.9}
          sx={{ pt: 1, borderRadius: 2 }}
          className={styles.sales_grid}
        >
          <div className={styles.header_container}>
            <h3 className={styles.sales_header}>Sales Overview</h3>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <Grid container>
            <Overview overviews={salesOverviews} />
          </Grid>
        </Grid>
        <>
          <InventSummary />
        </>
      </Grid>
    </>
  );
};

export default SaleOverview;
