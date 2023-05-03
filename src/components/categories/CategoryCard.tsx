import React from 'react';
import { GiFruitBowl } from 'react-icons/gi';
import styles from '../../styles/Categories.module.css';

const CategoryCard = () => {
  return (
    <div className={styles.cat_card}>
      <div className={styles.cat_icon}>
        <GiFruitBowl />
      </div>
      <div className="text-center">
        <h1 className="font-bold uppercase">Fruits</h1>
        <p className="text-sm text-gray-500">fresh</p>
      </div>
      <div className="leading-[0.3rem]">
        <p className="">
          <span className="font-semibold text-2xl text-center">30</span> qty
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
