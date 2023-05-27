import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "../../searchbar/SearchBar";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import CategoryDialog from "./CategoryDialog";
import { useState } from "react";

type Props = {};

const categoryList = [
  {
    image:
      "https://res.cloudinary.com/dskl0qde4/image/upload/v1677227464/samples/ecommerce/shoes.png",
    name: "Reebok Fashions",
    category: "Footwear",
    units: 10,
    amount: 500,
  },
  {
    image:
      "https://res.cloudinary.com/dskl0qde4/image/upload/v1677227469/samples/ecommerce/leather-bag-gray.jpg",
    name: "Leather Bag",
    category: "Bags",
    units: 20,
    amount: 1000,
  },
  {
    image:
      "https://res.cloudinary.com/dskl0qde4/image/upload/v1677227466/samples/animals/three-dogs.jpg",
    name: "BullDogs",
    category: "Dogs",
    units: 50,
    amount: 800,
  },
  {
    image:
      "https://res.cloudinary.com/dskl0qde4/image/upload/v1677227459/samples/ecommerce/analog-classic.jpg",
    name: "Rollex",
    category: "Watches",
    units: 15,
    amount: 750,
  },
];

const Categories = (props: Props) => {
  return (
    <>
      <div className="items-header flex items-center gap-x-3">
        <h2 className="font-bold text-2xl tracking-wider">Category</h2>
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
      <div className="my-6">
        <SearchBar />
      </div>
      <h1>Category</h1>
      <div className="grid grid-cols-4 gap-8">
        {categoryList &&
          categoryList.map((list) => {
            return <CategoryCard list={list} />;
          })}
      </div>
    </>
  );
};

export default Categories;
