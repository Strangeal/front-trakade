type ItemProps = {
  item: {
    image: string;
    name: string;
    category: string;
    unit_price: number;
    quantity: number;
  };
};

const ItemCard = ({ item }: ItemProps) => {
  return (
    <>
      <button
        type="button"
        className="hover:shadow-lg hover:-translate-y-2 dark:hover:-translate-y-1 transition duration-300"
      >
        <div className="item-card border bg-white dark:bg-slate-800 dark:border-none p-3 rounded-md">
          <div className="flex gap-x-4 border-b pb-3">
            <div className="grid place-items-center item-img bg-slate-600 w-[7rem] h-[7rem] overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-[7rem] h-[7rem]"
              />
            </div>
            <div className="flex justify-between flex-grow">
              <div className="text-start">
                <h2 className="font-bold text-slate-800 dark:text-slate-100">
                  {item.name}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.category}
                </p>
              </div>
              <p className="font-semibold">
                $<span>{item.unit_price.toFixed(2)}</span>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            {item.quantity === 0 ? (
              <div className="item-level-badge bg-slate-200 text-sm px-3 py-1 rounded-full text-slate-500 font-bold">
                Out of Stock
              </div>
            ) : item.quantity <= 100 ? (
              <div className="item-level-badge bg-orange-100 text-sm px-3 py-1 rounded-full text-yellow-600 font-bold">
                Low
              </div>
            ) : (
              <div className="item-level-badge bg-green-200 text-sm px-3 py-1 rounded-full text-green-600 font-bold">
                In Stock
              </div>
            )}
            <div className="text-sm flex gap-x-4">
              <p className="text-indigo-600 dark:text-indigo-500 font-semibold">
                <span>{item.quantity}</span> Qty
              </p>
              <p>|</p>
              <p className="text-indigo-600 dark:text-indigo-500 font-semibold">
                <span>${(item.unit_price * item.quantity).toFixed(2)}</span> in
                total
              </p>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};
export default ItemCard;
