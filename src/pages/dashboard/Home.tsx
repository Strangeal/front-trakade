import { Outlet } from 'react-router-dom';
import { SideBar, TopNavigation } from '../../components/dashboard';
import styles from '../../styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <SideBar />

      <div className={styles['main-content']}>
        <TopNavigation />

        <div className="mt-4 mb-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
export default Home;
