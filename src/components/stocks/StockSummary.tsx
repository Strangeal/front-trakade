import { useState } from 'react';
import { default as ReactApexChart } from 'react-apexcharts';
import styles from '../../styles/Categories.module.css';
import StockLevels from './StockLevels';

const StockSummary = () => {
  const chart = {
    series: [
      {
        name: 'Sales',
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: 'Purchases',
        data: [12, 11, 14, 18, 17, 13, 13],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: 'straight',
        width: 2,
      },
      title: {
        text: 'Sales And Purchase Statistics',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'normal',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    },
  };

  return (
    <section className={styles.cat_container}>
      <div className="w-[25rem]">
        <StockLevels />
      </div>
      <div className={styles.cat_summary}>
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="line"
          height={350}
        />
      </div>
    </section>
  );
};

export default StockSummary;
