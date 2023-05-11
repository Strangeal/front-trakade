import {
  Avatar,
  Box,
  Button,
  Collapse,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../../styles/Categories.module.css";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { AccountCircle } from "@mui/icons-material";

type Props = {};

function createData(
  tag: string,
  name: string,
  quantity: number,
  price: number
  // carbs: number
  // protein: number
  // price: number
) {
  return {
    tag,
    name,
    quantity,
    price,
    // carbs,
    // protein,
    // price,
    // history: [
    //   {
    //     date: "2020-01-05",
    //     customerId: "11091700",
    //     amount: 3,
    //   },
    //   {
    //     date: "2020-01-02",
    //     customerId: "Anonymous",
    //     amount: 1,
    //   },
    // ],
  };
}

const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* <TableCell>Hello</TableCell> */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.tag}</TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.quantity}</TableCell>
        <TableCell align="left">{row.price}</TableCell>
      </TableRow>
      <TableRow sx={{ my: 12 }}>
        <TableCell
          // className={`shadow-md`}
          style={{ paddingBottom: 0, paddingTop: 0, width: "100%" }}
          colSpan={6}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            className={`${styles.cat_table_dropdown} shadow-md`}
          >
            <Box
              sx={{
                display: "flex",
                py: 8,
                px: 8,
                justifyContent: "space-between",
              }}
            >
              <>
                <>
                  <Box>
                    <Avatar
                      alt=""
                      src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png"
                      sx={{
                        width: "100px",
                        height: "100px",
                        p: 1,
                        borderRadius: "5px",
                        border: 1,
                        borderColor: "##212F3C",
                        mr: 2,
                      }}
                    />
                    <Button>Add image</Button>
                  </Box>
                  <Box
                    component="form"
                    autoComplete="off"
                    noValidate
                    sx={{}}
                    className={styles.mui_textField}
                  >
                    <Box
                      sx={{
                        mr: 1,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        position: "relative",
                      }}
                    >
                      <TextField
                        className={styles.mui_textField}
                        sx={{ position: "absolute", width: "40%" }}
                        label="Name:"
                        type="text"
                        defaultValue="Office Supplies (Sample Items)"
                        variant="standard"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Box>

                    {/* ////////// */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ mt: 10 }}>
                        <Box sx={{ mb: 0, mt: 0 }}>
                          <TextField
                            sx={{ mr: 2, width: "10%" }}
                            label="Tag:"
                            type="text"
                            defaultValue="#0012"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            sx={{ mx: 2 }}
                            label="Barcode:"
                            type="text"
                            defaultValue="0936683009624"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            sx={{}}
                            label="No. of Vendor:"
                            type="text"
                            defaultValue="586"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <br />
                        </Box>

                        <Box sx={{ mt: 3 }}>
                          <TextField
                            sx={{ mr: 2, width: "10%" }}
                            label="Site:"
                            type="text"
                            defaultValue="World"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            sx={{ mx: 2 }}
                            label="Reserved:"
                            type="text"
                            defaultValue="56"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            sx={{}}
                            label="Stocks:"
                            type="text"
                            defaultValue="783 Boxes"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Box>
                      </Box>

                      {/* ///////// */}
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{}}>
                          <TextField
                            sx={{ mr: 2, width: "15%" }}
                            label="Price:"
                            type="number"
                            defaultValue="45"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            sx={{}}
                            label="Collection:"
                            type="text"
                            defaultValue="Flex Cosmetics"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <br />
                        </Box>
                        <Box sx={{ my: 4 }}>
                          <TextField
                            sx={{ mr: 2, width: "15%" }}
                            label="Cost:"
                            type="text"
                            defaultValue="78,000"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <TextField
                            sx={{}}
                            label="Country:"
                            type="text"
                            defaultValue="Ghana"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          <br />
                        </Box>

                        <Box sx={{ width: "fit-content" }}>
                          <TextField
                            sx={{ mr: 2 }}
                            label="Vendor:"
                            type="text"
                            defaultValue="Flex"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          {/* <TextField
                            sx={{}}
                            label="Stocks:"
                            type="text"
                            defaultValue="Hello World"
                            variant="standard"
                            InputProps={{
                              readOnly: true,
                            }}
                          /> */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </>
              </>
            </Box>
            <TableCell
              sx={{
                display: "flex",
                borderTop: 1,
                borderColor: "#e0e0e0",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Typography className={styles.cat_dropdown_footer}>
                <AutoAwesomeMotionIcon sx={{ mr: 1, color: "#212F3C" }} />
                Advance Edit
              </Typography>
              <Typography className={styles.cat_dropdown_footer}>
                <FolderDeleteIcon sx={{ mr: 1, color: "#212F3C" }} />
                Delete
              </Typography>
            </TableCell>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const rows = [
  createData("#001", "Frozen yoghurt", 159, 6.0),
  createData("#002", "Ice cream sandwich", 237, 9.0),
  createData("#003", "Eclair", 262, 16.0),
  createData("#004", "Cupcake", 305, 3.7),
  // createData("002", "Gingerbread", 356, 16.0),
];

const drawerWidth = 210;

const Catgories = (props: Props) => {
  return (
    <Grid container>
      <Grid item md={10} sx={{ width: "100%" }}>
        <TableContainer
          component={Paper}
          elevation={0}
          className={styles.cat_table}
        >
          <Table aria-label="collapsible table">
            <TableHead sx={{}}>
              <TableRow sx={{}}>
                <TableCell colSpan={6} sx={{ border: 0 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button className={styles.add_category_btn}>
                      <AddIcon sx={{ fontSize: 18 }} />
                      <span>Add Category</span>
                    </Button>
                    <Box
                      className={styles.cat_header_form}
                      component="form"
                      noValidate
                      sx={{ display: "flex", width: "60%", gap: 2 }}
                    >
                      <FormControl fullWidth>
                        <label className={styles.header_label}>Search</label>
                        <Input
                          className={styles.header_input}
                          type="text"
                          placeholder="Search..."
                          id="my-input"
                          aria-describedby="my-helper-text"
                          startAdornment={
                            <InputAdornment
                              position="start"
                              sx={{ bgcolor: "#ddd" }}
                            >
                              <SearchIcon sx={{ ml: 1 }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      <FormControl
                        variant="filled"
                        fullWidth
                        size="small"
                        focused={false}
                      >
                        <label className={styles.header_label}>Category</label>

                        <Select sx={{ pt: 0 }}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        variant="filled"
                        fullWidth
                        size="small"
                        focused={false}
                      >
                        <label className={styles.header_label}>Filter</label>

                        <Select sx={{ pt: 0 }}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell align="left">Tag</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item md={2}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          Comming soon
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Catgories;
