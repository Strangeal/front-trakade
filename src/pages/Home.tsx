import vite_logo from '/vite.svg';
import Packages from '../components/Packages';
import styles from '../styles/Home.module.css';

type Props = {};
const Home = (props: Props) => {
  return (
    <section className={styles.home}>
      <img src={vite_logo} alt="Vite Logo" />
      <h1>Vite</h1>
      <h1>Project Starter</h1>
      <p className="mt-4">
        This is a project template created with{' '}
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-700 font-bold underline"
        >
          vite!!
        </a>
      </p>
      <p>A React.js Boilerplate application for building static websites.</p>
      <Packages />
    </section>
  );
};
export default Home;
