import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { VscBellDot } from "react-icons/vsc";
import ImageUpload from "../../Upload/ImageUpload";

type Props = {};
type CategoryFormProps = {
  name: string;
  quantity: number;
  min_level: number;
  price: number;
  total_value: number;
  tags: string;
  notes: string;
  title: string;
};

const AddCategory = (props: Props) => {
  const form = useForm<CategoryFormProps>();

  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <form>
        AddCategory
        <TextField
          sx={{ mb: 4 }}
          type="number"
          size="small"
          label="Name *"
          variant="outlined"
          fullWidth
          {...register("name", {
            required: "Invalid input",
          })}
          error={!!errors.quantity}
          helperText={errors.quantity?.message}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
          <TextField
            type="number"
            size="small"
            label="Quantity *"
            variant="outlined"
            fullWidth
            {...register("quantity", {
              required: "Invalid input",
            })}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
          />
          <div className="flex gap-3">
            <TextField
              type="number"
              size="small"
              label="Min Level"
              variant="outlined"
              fullWidth
              {...register("min_level")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {/* <BsFillQuestionCircleFill className="text-gray-400" /> */}
                  </InputAdornment>
                ),
              }}
            />
            <VscBellDot
              className={`text-4xl border p-1.5 h-fit rounded cursor-pointer w-fit text-gray-700`}
            />
          </div>
          <TextField
            type="number"
            size="small"
            label="Price"
            variant="outlined"
            fullWidth
            {...register("price", {
              required: "Invalid input",
            })}
            error={!!errors.min_level}
            helperText={errors.quantity?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span className="text-xs">USD</span>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="number"
            size="small"
            label="Total value"
            variant="outlined"
            fullWidth
            {...register("total_value", {
              required: "Invalid input",
            })}
            error={!!errors.total_value}
            helperText={errors.quantity?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span className="text-xs">USD</span>
                </InputAdornment>
              ),
            }}
          />
        </div>
        {/* <FormControl fullWidth sx={{ mb: 3 }} size="small">
        <Select
          multiple
          value={selectTag}
          {...register("tags")}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
        <TextField
          sx={{
            mb: 2,
            color: "#ddd",
          }}
          type="text"
          size="small"
          label="Notes"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          {...register("notes", {
            required: "notes must be valid",
          })}
          helperText={errors.notes?.message}
        />
      </form>
      <ImageUpload />
    </>
  );
};

export default AddCategory;
