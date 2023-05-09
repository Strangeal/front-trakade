import React from "react";
import SaleOverview from "./SaleOverview";
import { Avatar, Divider, Grid, SvgIconTypeMap } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/SalesOverview.module.css";
import { IconType } from "react-icons";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { classNames } from "primereact/utils";

type DummyDataProps = {
  overviews: {
    icons: IconType;
    title: string;
    num: number;
  }[];
};

const Overview = ({ overviews }: DummyDataProps) => {
  return (
    <>
      {overviews.map((overview, index) => (
        <Grid item md={5.5} sx={{ mb: 2 }} key={index}>
          <div className={styles.sales_content}>
            <Avatar sx={{ bgcolor: "#E0F4FF", borderRadius: 2, mr: 2 }}>
              {React.createElement(overview.icons, {
                className: "sales_icons",
              })}
            </Avatar>
            <div>
              <p className={styles.sales_title}>{overview?.title}</p>
              <h3 className={styles.sales_num}>{overview?.num}</h3>
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default Overview;
