import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { BsFilter, BsSearch } from 'react-icons/bs';
import { HiOutlineFilter } from 'react-icons/hi';
import ItemCard from './ItemCard';

const items = [
  {
    image:
      'https://res.cloudinary.com/dskl0qde4/image/upload/v1677227464/samples/ecommerce/shoes.png',
    name: 'Reebok',
    category: 'Footwear',
    unit_price: 259.9,
    quantity: 100,
  },
  {
    image:
      'https://res.cloudinary.com/dskl0qde4/image/upload/v1677227469/samples/ecommerce/leather-bag-gray.jpg',
    name: 'Leather Bag',
    category: 'Bags',
    unit_price: 150,
    quantity: 120,
  },
  {
    image:
      'https://res.cloudinary.com/dskl0qde4/image/upload/v1677227466/samples/animals/three-dogs.jpg',
    name: 'BullDogs',
    category: 'Dogs',
    unit_price: 500,
    quantity: 50,
  },
  {
    image:
      'https://res.cloudinary.com/dskl0qde4/image/upload/v1677227459/samples/ecommerce/analog-classic.jpg',
    name: 'Rollex',
    category: 'Wrist Watches',
    unit_price: 500,
    quantity: 0,
  },
];

const Items = () => {
  return (
    <section>
      <div className="items-header flex items-center gap-x-3">
        <h2 className="font-bold text-2xl tracking-wider">Items</h2>
        <div>
          <Button
            aria-label="add"
            variant="outlined"
            color="info"
            className="!min-w-0 !p-1"
            title="Add Item"
          >
            <AddIcon />
          </Button>
        </div>
      </div>

      <section className="my-6">
        {/* Filter Section */}
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
              className="border bg-white p-2 rounded w-full focus:outline-none focus:border-slate-400 transition duration-300"
              aria-label="Search Item"
            />
            <div className="absolute top-3 right-5 text-slate-600">
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

        <div className="all-items my-7 grid grid-cols-3 gap-8">
          {items &&
            items.map((item) => {
              return <ItemCard item={item} />;
            })}
        </div>
      </section>
    </section>
  );
};
export default Items;
