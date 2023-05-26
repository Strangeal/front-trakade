import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { IoNotificationsSharp } from 'react-icons/io5';
import { RxCaretDown } from 'react-icons/rx';
import styles from '../../styles/Home.module.css';

type ThemeProps = 'light' | 'dark';

type TopNavProps = {
  setVisibleRight: Dispatch<SetStateAction<boolean>>;
  setMode: (value: ThemeProps) => void;
};

const TopNavigation = ({ setVisibleRight, setMode }: TopNavProps) => {
  const [theme, setTheme] = useState<string | null>();
  const element = document.documentElement;
  const root = document.querySelector(':root');

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
      setMode('dark');
      root?.setAttribute('color-scheme', 'dark');
    } else {
      setTheme('light');
      setMode('light');
      root?.setAttribute('color-scheme', 'light');
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('app_theme');
    setTheme(theme!);
    setMode(theme!);
  }, []);

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('app_theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('app_theme', 'light');
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <div
      className={`${styles['top-nav']} bg-white dark:bg-slate-900 dark:border-none relative z-10`}
    >
      <div>
        <h1 className="font-bold text-xl">Good Morning Mafia👋</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold">
          Hope you have a nice day
        </p>
      </div>
      <div className="flex items-center gap-x-7">
        <div className="btn-group flex items-center gap-x-3 border-r-2 px-7">
          <button
            type="button"
            title="search"
            className="flex items-center gap-5 w-[24rem] border border-white shadow-md hover:shadow-sm hover:border-gray-200 dark:border-none dark:bg-slate-800 hover:dark:bg-slate-700 transition-all duration-300 ease-in-out px-5 py-3 rounded-xl"
          >
            <span>
              <BiSearchAlt className="text-gray-600 dark:text-gray-300" />
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Search for a transaction, item, etc
            </p>
          </button>
          <button
            type="button"
            title="theme"
            onClick={handleThemeChange}
            className="p-3 rounded-full text-gray-600 bg-white hover:bg-slate-400 hover:text-white transition-all duration-300 ease-in-out text-md dark:bg-slate-900 dark:hover:bg-white dark:text-gray-300 dark:hover:text-slate-900"
          >
            {theme === 'light' ? (
              <span>
                <BsFillMoonFill />
              </span>
            ) : (
              <span>
                <BsFillSunFill />
              </span>
            )}
          </button>
          <button
            type="button"
            title="notification"
            className="p-3 rounded-full text-gray-600 bg-white hover:bg-slate-400 hover:text-white transition-all duration-300 ease-in-out text-md dark:bg-slate-900 dark:hover:bg-white dark:text-gray-300 dark:hover:text-slate-900"
            onClick={() => setVisibleRight(true)}
          >
            <span>
              <IoNotificationsSharp className="" />
            </span>
          </button>
        </div>

        <div className="profile">
          <button
            type="button"
            title="profile"
            className="flex items-center gap-x-3"
          >
            <div className="avatar flex justify-center items-center font-bold border p-2 rounded-full w-14 h-14">
              <span>MI</span>
            </div>
            <div>
              <p className="text-sm font-bold leading-3">Mafia Ingolo</p>
              <p className="text-sm text-gray-500 text-start">Admin</p>
            </div>
            <span>
              <RxCaretDown className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
