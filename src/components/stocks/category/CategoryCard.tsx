import React, { useState } from "react";
import { BsTags } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import CategoryDialog from "../../dialog/AddCategoryDialog";
import Categories from "./Categories";
import ViewCategoryDialog from "../../dialog/ViewCategoryDialog";

type CategoryProps = {
  list: {
    name: string;
    image: string;
    category: string;
    units: number;
    amount: number;
  };
};

const CategoryCard = ({ list }: CategoryProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="bg-white p-3 border rounded-lg hover:shadow-lg transition-all">
      <div className="grid place-items-center item-img bg-slate-600 overflow-hidden rounded-md relative">
        <img alt="Category image" src={list.image} className="w-100 h-56" />
        <div className="w-60">
          <TbEdit className="absolute bottom-0 right-3 cursor-pointer top-3 text-3xl text-[#14c8ab] bg-[#e8f5f4] p-1 rounded-lg opacity-0 hover:opacity-100" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mt-3">
          <h4
            onClick={() => setVisible(true)}
            className="font-bold text-slate-800 text-lg cursor-pointer"
          >
            {list.name}
          </h4>
          <MdMoreVert className="text-xl" />
        </div>

        <p className="flex items-center gap-1 my-3 text-sm">
          <span className="border-r-2 pr-2 font-bold">{list.units} units</span>
          <span className="text-slate-500 text-xs">$ {list.amount}.00</span>
        </p>
        <p className="bg-slate-200 text-xs flex items-center py-1 px-2 w-fit rounded-full">
          <BsTags className="mr-1" />
          <span className="">{list.category}</span>
        </p>
      </div>
      {/* <CategoryDialog visible={visible} setVisible={setVisible} /> */}
      <ViewCategoryDialog visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default CategoryCard;
