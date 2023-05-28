import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import AddCategory from "../stocks/category/AddCategory";
import { Button } from "@mui/material";

type AddCategoryDialogProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const AddCategoryDialog = ({ visible, setVisible }: AddCategoryDialogProps) => {
  return (
    <>
      <div className="card flex justify-content-center">
        <Dialog
          header="Add a new category"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <AddCategory />
          <div className="my-5">
            <Button type="submit" variant="contained" fullWidth color="success">
              Add Category
            </Button>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default AddCategoryDialog;
