'use client';

import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { Dialog } from 'primereact/dialog';
import * as Yup from 'yup';

interface AddItemDialogProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

interface FormValues {
  name: string;
  sku: string;
  price: string;
  quantity: number;
  category: string;
}

const initialValues = {
  name: '',
  sku: '',
  price: '',
  quantity: 1,
  category: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  sku: Yup.string().required('Sku is required'),
  price: Yup.string().required('Price is required'),
  quantity: Yup.number().required('Quantity is required'),
  category: Yup.string().required('Category is required'),
});

const AddItemDialog: React.FC<AddItemDialogProps> = ({
  visible,
  setVisible,
}) => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Add a new item"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: '40vw' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        <div className="add-item-form my-5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              // console.log(formik);
              return (
                <Form>
                  <div className="flex justify-between gap-x-5">
                    <div className="mb-5 w-full">
                      <Field name="name">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <TextField
                              id="name"
                              label="Name"
                              fullWidth
                              {...field}
                              placeholder="Name of item"
                              color="success"
                              variant="outlined"
                              required
                              error={meta.touched && meta.error ? true : false}
                              helperText={<ErrorMessage name="name" />}
                              InputProps={{
                                style: {
                                  borderColor: 'white',
                                },
                              }}
                            />
                          );
                        }}
                      </Field>
                    </div>
                    <div className="mb-5 w-full">
                      <Field name="sku">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <TextField
                              id="sku"
                              label="SKU"
                              fullWidth
                              {...field}
                              placeholder="SKU"
                              color="success"
                              variant="outlined"
                              required
                              error={meta.touched && meta.error ? true : false}
                              helperText={<ErrorMessage name="sku" />}
                            />
                          );
                        }}
                      </Field>
                    </div>
                  </div>
                  <div className="flex justify-between gap-x-5">
                    <div className="mb-5 w-full">
                      <Field name="price">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <TextField
                              id="price"
                              label="Unit Price"
                              fullWidth
                              {...field}
                              placeholder="What is the unit price? Eg: 25.00"
                              color="success"
                              variant="outlined"
                              required
                              error={meta.touched && meta.error ? true : false}
                              helperText={<ErrorMessage name="price" />}
                            />
                          );
                        }}
                      </Field>
                    </div>
                    <div className="mb-5 w-full">
                      <Field name="quantity">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <TextField
                              id="quantity"
                              type="number"
                              label="Quantity"
                              fullWidth
                              {...field}
                              placeholder="Quantity"
                              color="success"
                              variant="outlined"
                              required
                              error={meta.touched && meta.error ? true : false}
                              helperText={<ErrorMessage name="quantity" />}
                            />
                          );
                        }}
                      </Field>
                    </div>
                  </div>
                  <div className="mb-5 w-full">
                    <Field name="category">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <Select
                            id="category"
                            color="success"
                            displayEmpty
                            inputProps={{ 'aria-label': 'Category' }}
                            fullWidth
                            required
                            {...field}
                            error={meta.touched && meta.error ? true : false}
                          >
                            <MenuItem value="">
                              <em>Select a category *</em>
                            </MenuItem>
                            <MenuItem value={1}>Foods & Drinks</MenuItem>
                            <MenuItem value={2}>Furniture</MenuItem>
                            <MenuItem value={3}>Hardware</MenuItem>
                          </Select>
                        );
                      }}
                    </Field>
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="success"
                  >
                    Add Item
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Dialog>
    </div>
  );
};

export default AddItemDialog;
