import { SideBar, TopNavigation } from "../../components/dashboard";
import SaleAct from "../../components/dashboard/SaleAct";
import SalesOrder from "../../components/dashboard/SalesOrder";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <SideBar />

      <div className={styles["main-content"]}>
        <TopNavigation />

        <div className="my-8">
          <SaleAct />
          <SalesOrder />
        </div>
      </div>
    </section>
  );
};
export default Home;
