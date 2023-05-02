import { SideBar, TopNavigation } from '../../components/dashboard';
import styles from '../../styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <SideBar />

      <div className={styles['main-content']}>
        <TopNavigation />

        <div className="my-8">
          <h1 className="font-bold text-xl">Dashboard</h1>
        </div>
      </div>
    </section>
  );
};
export default Home;
