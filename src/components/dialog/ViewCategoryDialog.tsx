import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "@mui/material";
import CardEffect from "../stocks/category/CardEffect";

type Props = {};

type AddCategoryDialogProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const ViewCategoryDialog = ({
  visible,
  setVisible,
}: AddCategoryDialogProps) => {
  return (
    <>
      <div className="card flex justify-content-center">
        <Dialog
          header="Category Title"
          visible={visible}
          style={{ width: "40vw" }}
          onHide={() => setVisible(false)}
        >
          <div>
            <img
              src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227464/samples/ecommerce/shoes.png"
              alt="Category image"
              className="w-80 mx-auto"
            />
            <div className="grid grid-cols-4 gap-5 my-8 text-lg">
              <p className="text-gray-400">
                Sortly ID:<p className="text-black"> SCCUCT0004</p>
              </p>
              <p className="text-gray-400">
                Quantity:
                <p className="text-[#14c8ab]"> 10 units</p>
              </p>
              <p className="text-gray-400">
                Total Value:
                <p className="text-black"> GHS 120.00</p>
              </p>
              <p className="text-gray-400">
                Updated at:
                <p className="text-black"> 18/04/2023 </p>
              </p>
            </div>
          </div>

          <div className="my-5">
            <Button type="submit" variant="contained" fullWidth color="success">
              Advance & Edit
            </Button>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default ViewCategoryDialog;
