import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Outlet } from 'react-router-dom';
import { SideBar, TopNavigation } from '../../components/dashboard';
import { Notification } from '../../components/notifications';
import styles from '../../styles/Home.module.css';

const Home = () => {
  const [visibleRight, setVisibleRight] = useState<boolean>(false);

  return (
    <section className={styles.home}>
      <SideBar />

      <div className={styles['main-content']}>
        <TopNavigation setVisibleRight={setVisibleRight} />

        {/* Notifications */}
        <section className="relative">
          <Sidebar
            visible={visibleRight}
            position="right"
            onHide={() => setVisibleRight(false)}
            closeIcon="pi pi-angle-right"
            blockScroll={true}
            // showCloseIcon={false}
          >
            <div className="absolute top-[1.4rem] flex items-center gap-x-2 text-slate-900">
              <span>
                <IoNotificationsOutline />
              </span>
              <h2 className="font-semibold text-lg">Notifications</h2>
            </div>
            <Notification
              title="New Category"
              message="A new category has been added"
              icon="https://res.cloudinary.com/dskl0qde4/image/upload/v1683642999/new-items_ba4bw8.svg"
              created_at="21 Apr, 2023"
            />
            <Notification
              title="New Item"
              message="A new item has been added"
              icon="https://res.cloudinary.com/dskl0qde4/image/upload/v1683642999/new-items_ba4bw8.svg"
              created_at="09 May, 2023"
            />
            <Notification
              title="New Order"
              message="A new order just came in"
              icon="https://res.cloudinary.com/dskl0qde4/image/upload/v1683642999/new-items_ba4bw8.svg"
              created_at="26 Jan, 2023"
            />
          </Sidebar>
        </section>

        <div className="p-4 mt-4 mb-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
export default Home;
