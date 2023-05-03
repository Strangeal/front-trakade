import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../../styles/Categories.module.css';
import CategoryCard from './CategoryCard';

const CategorySummary = () => {
  return (
    <section className={styles.cat_container}>
      <div>
        <h1 className="font-bold text-2xl">Categories</h1>
        <p className="leading-5 font-light">
          View all your categories <br /> statistics here
        </p>
      </div>

      <div className="flex gap-x-10">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        {/* <CategoryCard /> */}
        <div className="absolute -right-[6rem] bg-[#6ebcb7] text-white flex flex-col justify-between gap-y-4 p-4 w-[9rem] h-[10rem] rounded-3xl shadow-xl">
          <h1 className="font-bold uppercase">
            Full <br /> Stats
          </h1>
          <Link
            to={'/dashboard/categories'}
            className="bg-white p-3 rounded-full w-8 h-8 text-[#6ebcb7] flex justify-center items-center text-xl hover:shadow-sm hover:shadow-slate-800 transition-all duration-300 ease-in-out"
          >
            <span>
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySummary;
