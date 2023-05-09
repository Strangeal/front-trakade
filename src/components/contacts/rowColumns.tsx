import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, IconButton, Switch } from '@mui/material';
import { GridColDef, GridToolbarContainer } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { CiCircleMore } from 'react-icons/ci';
import { IoIosPeople } from 'react-icons/io';
import { TbPencilMinus } from 'react-icons/tb';
import styles from '../../styles/Customers.module.css';

type Props = {};

export const customersColumns: GridColDef[] = [
  {
    field: 'sn',
    headerName: 'SN',
    width: 50,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'photo',
    headerName: 'Photo',
    renderCell: (params) => {
      return (
        <>
          <Avatar sx={{ bgcolor: '#DEF1E7', p: 0.5 }} src={params.row.photo} />
        </>
      );
    },
    width: 110,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 170,
    editable: false,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    renderCell: (params) => {
      const [checked, setChecked] = useState(false);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };
      return (
        <>
          <IconButton>
            <TbPencilMinus color="primary" />
          </IconButton>
          <Switch
            edge="end"
            checked={checked}
            onChange={handleChange}
            inputProps={{
              'aria-labelledby': 'switch-list-lbel-action',
            }}
          />
        </>
      );
    },
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
];

export const customersRows = [
  {
    id: 1,
    sn: '01',
    photo:
      'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
    name: 'Jon',
    actions: '',
  },
  {
    id: 2,
    sn: '02',
    photo:
      'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    name: 'Jon',
    actions: '',
  },
  {
    id: 3,
    sn: '03',
    photo:
      'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
    name: 'Jon',
    actions: '',
  },
  {
    id: 4,
    sn: '04',
    photo:
      'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    name: 'Jon',
    actions: '',
  },
];

// suppliers
export const supplierColumns: GridColDef[] = [
  {
    field: 'sn',
    headerName: 'SN',
    width: 50,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'company',
    headerName: 'Company',
    renderCell: (params) => {
      // console.log(params.row.comp.avatar);
      return (
        <>
          <Avatar
            sx={{ bgcolor: '#DEF1E7', p: 0.5 }}
            src={params.row.comp.avatar}
          />
          {params.row.comp.company}
        </>
      );
    },
    width: 300,
    editable: false,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    renderCell: (params) => {
      const [checked, setChecked] = useState(false);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };
      return (
        <>
          <IconButton>
            <TbPencilMinus color="primary" />
          </IconButton>
          <Switch
            edge="end"
            checked={checked}
            onChange={handleChange}
            inputProps={{
              'aria-labelledby': 'switch-list-lbel-action',
            }}
          />
        </>
      );
    },
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
];

export const suppliersRows = [
  {
    id: 1,
    sn: '01',
    comp: {
      company: 'Jon Company',
      avatar:
        'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
    },
    actions: '',
  },
  {
    id: 2,
    sn: '02',
    comp: {
      company: 'Jon Inc.',
      avatar:
        'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    },
    actions: '',
  },
  {
    id: 3,
    sn: '03',
    comp: {
      company: 'Jon Org',
      avatar:
        'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
    },
    actions: '',
  },
  {
    id: 4,
    sn: '04',
    comp: {
      company: 'Jon Ent',
      avatar:
        'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    },
    actions: '',
  },
];

// Customers
export const inventItemsColumns: GridColDef[] = [
  {
    field: 'itemCode',
    headerName: 'Item Code',
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'photo',
    headerName: 'Photo',
    renderCell: (params) => {
      return (
        <>
          <Avatar
            sx={{ bgcolor: '#DEF1E7', p: 0.5, mr: 2 }}
            src={params.row.photo}
          />
        </>
      );
    },
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'itemName',
    headerName: 'Item Name',
    width: 150,
    editable: false,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: 'itemGroup',
    headerName: 'Item Group',
    width: 150,
    editable: false,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: 'lastPurchase',
    headerName: 'Last Purchase',
    width: 150,
    editable: false,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: 'onHand',
    headerName: 'On Hand',
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    renderCell: (params) => {
      return (
        <>
          <IconButton>
            <TbPencilMinus color="primary" />
          </IconButton>
          <IconButton>
            <CiCircleMore color="primary" />
          </IconButton>
        </>
      );
    },
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
];

export const inventItemsRows = [
  {
    id: 1,
    itemCode: 'V09BH31',
    photo:
      'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
    itemName: 'Jon',
    itemGroup: 35,
    lastPurchase: '04 April, 2023',
    onHand: '20Kg',
    // actions: BsPersonCheck,
  },
  {
    id: 2,
    itemCode: 'V09BH32',
    photo:
      'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    itemName: 'Jon',
    itemGroup: 35,
    lastPurchase: '04 April, 2023',
    onHand: '13Kg',
    // actions: "",
  },
  {
    id: 3,
    itemCode: 'V09BH33',
    photo:
      'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
    itemName: 'Jon',
    itemGroup: 35,
    lastPurchase: '04 April, 2021',
    onHand: '0.8Kg',
    // actions: "edit",
  },
  {
    id: 4,
    itemCode: 'V09BH34',
    photo:
      'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    itemName: 'Jon',
    itemGroup: 35,
    lastPurchase: '04 April, 2023',
    onHand: '18Kg',
    // actions: "edit",
  },
  {
    id: 5,
    itemCode: 'V09BH35',
    photo:
      'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
    itemName: 'Jon',
    itemGroup: 35,
    lastPurchase: '04 April, 2023',
    onHand: '5Kg',
    // actions: "edit ",
  },
  {
    id: 6,
    itemCode: 'V09BH36',
    photo:
      'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    itemName: 'Jon',
    itemGroup: 35,
    lastPurchase: '04 April, 2023',
    onHand: '10Kg',
    // actions: "edit",
  },
];

type headerProp = {
  title: string;
};
export const ContactToolbar = ({ title }: headerProp) => {
  return (
    <div className={`${styles.customers_tb_header} dark:text-slate-100`}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ mr: 1 }} className={styles.header_icon}>
          <IoIosPeople />
        </Avatar>
        <h4>{title}</h4>
      </Box>
      <GridToolbarContainer>
        <MoreVertIcon />
      </GridToolbarContainer>
    </div>
  );
};
