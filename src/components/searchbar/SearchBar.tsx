import { BsFilter, BsSearch } from 'react-icons/bs';
import { HiOutlineFilter } from 'react-icons/hi';

const SearchBar = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-4">
      <div>
        <button
          type="button"
          title="Ascending or Descending"
          className="border bg-white p-2 text-slate-600 text-2xl rounded hover:border-slate-400 hover:bg-slate-100 transition-all duration-300 ease-in-out"
        >
          <BsFilter />
        </button>
      </div>
      <div className="flex-grow relative">
        <input
          type="search"
          name="search_item"
          id="search_item"
          placeholder="Search item"
          className="border bg-white dark:bg-slate-800 p-2 rounded w-full focus:outline-none focus:border-slate-400 transition duration-300 dark:text-slate-100 dark:border-slate-800 dark:focus:border-slate-400"
          aria-label="Search Item"
        />
        <div className="absolute top-3 right-5 text-slate-600 dark:text-slate-300">
          <BsSearch />
        </div>
      </div>
      <div>
        <button
          type="button"
          title="Ascending or Descending"
          className="border bg-white p-2 text-slate-600 text-2xl rounded hover:border-slate-400 hover:bg-slate-100 transition-all duration-300 ease-in-out"
        >
          <HiOutlineFilter />
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
