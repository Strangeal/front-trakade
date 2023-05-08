import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { GrSettingsOption } from 'react-icons/gr';
import { IoNotificationsSharp } from 'react-icons/io5';
import { RxCaretDown } from 'react-icons/rx';
import styles from '../../styles/Home.module.css';

const TopNavigation = () => {
  return (
    <div className={styles['top-nav']}>
      <div>
        <h1 className="font-bold text-xl">Good Morning Mafia👋</h1>
        <p className="text-gray-500 text-sm font-bold">
          Hope you have a nice day
        </p>
      </div>
      <div className="flex items-center gap-x-7">
        <div className="btn-group flex items-center gap-x-7 border-r-2 px-7">
          <button
            type="button"
            title="search"
            className="flex items-center gap-5 w-[24rem] shadow-lg hover:shadow-md transition-all duration-300 ease-in-out px-5 py-3 rounded-xl"
          >
            <span>
              <BiSearchAlt className="text-gray-600" />
            </span>
            <p className="text-sm text-gray-600">
              Search for a transaction, item, etc
            </p>
          </button>
          <button type="button" title="setting">
            <span>
              <GrSettingsOption className="fill-gray-600 text-2xl" />
            </span>
          </button>
          <button type="button" title="notification">
            <span>
              <IoNotificationsSharp className="text-gray-600 text-2xl" />
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
