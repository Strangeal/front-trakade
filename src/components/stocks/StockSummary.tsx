import { useState } from "react";
import { default as ReactApexChart } from "react-apexcharts";
import styles from "../../styles/Categories.module.css";
import StockLevels from "./StockLevels";

const StockSummary = () => {
  const options = {
    series: [
      {
        data: [21200, 29042, 36110, 27185, 15169, 25410, 18933, 30809],
      },
    ],
    options: {
      title: {
        text: "Category Summary",
        style: {
          fontFamily: "Nunito",
          fontSize: "18px",
        },
      },
      chart: {
        height: 350,
        type: "bar",
        background: "#e9f5f4",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Fruits"],
          ["Vegetables"],
          ["Drinks"],
          "Toiletries",
          ["Furniture"],
          ["Pastries"],
          ["Skin", "Care"],
          ["Electronics"],
        ],
        labels: {
          style: {
            // colors: colors,
            fontSize: "12px",
          },
        },
        title: {
          text: "Category",
        },
      },
      yaxis: {
        show: true,
        showAlways: true,
        title: {
          text: "Quantity",
          offsetX: -5,
        },
      },
    },
  };

  return (
    <section className={styles.cat_container}>
      <div className="">
        <StockLevels />
      </div>
      <div className={styles.cat_summary}>
        <ReactApexChart
          options={options.options}
          series={options.series}
          type="bar"
          height={350}
        />
      </div>
    </section>
  );
};

export default StockSummary;
