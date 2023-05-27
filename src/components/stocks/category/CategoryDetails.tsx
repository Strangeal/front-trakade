import {
  Box,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiPencil } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import { SiAddthis } from "react-icons/si";
import { MdMoreHoriz } from "react-icons/md";
import {
  BsFillQuestionCircleFill,
  BsFolderSymlink,
  BsImages,
  BsQrCodeScan,
} from "react-icons/bs";
import CardEffect from "./CardEffect";
import styles from "../../../styles/CategoryDetails.module.css";

type CategoryFormProps = {
  quantity: number;
  min_level: number;
  price: number;
  total_value: number;
  tags: string;
  notes: string;
  title: string;
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const CategoryDetails = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const form = useForm<CategoryFormProps>({
    defaultValues: {
      quantity: 10,
      min_level: 5,
      price: 35,
      total_value: 3500,
      tags: "Bags",
      notes: "",
      title: "Category title",
    },
  });
  const {
    register,
    formState: { errors },
  } = form;

  const handleChange = (event: SelectChangeEvent<typeof selectTag>) => {
    const {
      target: { value },
    } = event;
    setSelectTag(typeof value === "string" ? value.split(", ") : value);
  };
  return (
    <>
      <div className="grid items-center grid-cols-3 w-100 my-4">
        <div className="flex items-center gap-3 col-span-2 ">
          <TextField
            className="title_input"
            sx={{
              ".MuiInputBase-input": { fontSize: "2rem" },
              "& .MuiInputBase-root.Mui-disabled": {
                "& > fieldset": {
                  display: "none",
                },
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                },
                "&.Mui-focused": {
                  border: "2px solid red",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              },
            }}
            type="text"
            variant="outlined"
            fullWidth
            disabled={disableButton}
            {...register("title")}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setDisableButton(!disableButton)}
                >
                  <BiPencil className="text-xl" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <BsFolderSymlink className={styles.icon_large} />
          <MdMoreHoriz className={styles.icon_large} />
        </div>
      </div>
      <hr />
      <div className="flex items-center gap-5 mt-4 mb-10 text-lg">
        <p className="text-gray-400">
          Sortly ID:<span className="text-black"> SCCUCT0004</span>
        </p>
        <p className="text-gray-400">
          Quantity:
          <span className="text-[#14c8ab]"> 10 units</span>
        </p>
        <p className="text-gray-400">
          Total Value:
          <span className="text-black"> GHS 120.00</span>
        </p>
        <p className="text-gray-400">
          Updated at:
          <span className="text-black"> 18/04/2023 1:31 PM</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <form>
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
                  disabled
                  fullWidth
                  {...register("min_level")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <BsFillQuestionCircleFill className="text-gray-400" />
                      </InputAdornment>
                    ),
                  }}
                />
                <VscBellDot
                  className={`${styles.icon_large} w-fit text-gray-700`}
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
                disabled
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

            <FormControl fullWidth sx={{ mb: 3 }} size="small">
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
            </FormControl>

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
          <div>
            <h3 className="my-5 text-gray-500 text-base">QR / BARCODES</h3>
            <div className="flex items-center gap-x-6 border rounded w-fit px-3">
              <div className="">
                <h5 className="text-base font-semibold">Code Validation...</h5>
                <p className="mt-6 text-xs text-gray-500">
                  Created via{" "}
                  <span className="font-bold text-[#14c8ab] text-base">
                    Trakade
                  </span>
                </p>
              </div>
              <div>
                <BsQrCodeScan className="text-6xl mt-1" />
                <p className="text-[0.6rem] my-1">SCCUCT0004</p>
              </div>
            </div>
          </div>

          <div className="my-8">
            <button className={`${styles.btn_large} hover:bg-slate-100`}>
              Discard
            </button>
            <button
              className={`${styles.btn_large} bg-[#14c8ab] text-white opacity-90 hover:opacity-100 `}
            >
              Save
            </button>
          </div>
        </div>

        <section>
          <CardEffect />
          <div className="flex justify-center my-4 relative cursor-pointer">
            <BsImages className="text-5xl border-2 border-gray-500 rounded w-28 p-4 bg-gray-400 opacity-50" />
            <div className="absolute bottom-0">
              <SiAddthis className="text-black w-28 text-5xl p-4 rounded opacity-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryDetails;
