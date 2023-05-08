import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const StockLevels = () => {
  const columns = [
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  const header = (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="text-xl text-900 font-bold">Low Stock Levels</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  const items = [
    {
      name: "Orange",
      quantity: 50,
      category: "Fruits",
    },
    {
      name: "Laptops",
      quantity: 120,
      category: "Electronics",
    },
    {
      name: "Cabbages",
      quantity: 320,
      category: "Vegetables",
    },
    {
      name: "Laptops",
      quantity: 120,
      category: "Electronics",
    },
    {
      name: "Cabbages",
      quantity: 320,
      category: "Vegetables",
    },
  ];

  return (
    <div className="overflow-hidden border border-slate-200 rounded-3xl">
      <DataTable value={items} header={header} showGridlines>
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
};
export default StockLevels;
