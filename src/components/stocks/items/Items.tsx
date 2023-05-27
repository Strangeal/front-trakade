import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

import { useState } from 'react';
import AddItemDialog from '../../dialog/AddItemDialog';
import SearchBar from '../../searchbar/SearchBar';
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
  const [visible, setVisible] = useState<boolean>(false);

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
            onClick={() => setVisible(true)}
          >
            <AddIcon />
          </Button>
        </div>
      </div>

      <section className="my-6">
        {/* Filter Section */}
        <SearchBar />

        <div className="all-items my-7 grid grid-cols-3 gap-8">
          {items &&
            items.map((item) => {
              return <ItemCard key={item.name} item={item} />;
            })}
        </div>
      </section>

      <AddItemDialog visible={visible} setVisible={setVisible} />
    </section>
  );
};
export default Items;
