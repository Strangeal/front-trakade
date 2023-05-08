import StyleIcon from "@mui/icons-material/Style";
import { HiCurrencyDollar } from "react-icons/hi";
import { ImPriceTags } from "react-icons/im";
import { FaChartLine } from "react-icons/fa";
import {
  BsBarChartLineFill,
  BsFillHandbagFill,
  BsFillBoxFill,
} from "react-icons/bs";

export const salesOverviews = [
  {
    icons: ImPriceTags,
    title: "Total Sales",
    num: 789,
  },
  {
    icons: FaChartLine,
    title: "Revenue",
    num: 789,
  },
  {
    icons: HiCurrencyDollar,
    title: "Cost",
    num: 789,
  },
  {
    icons: BsBarChartLineFill,
    title: "Profit",
    num: 789,
  },
];

export const purchaseOverview = [
  {
    icons: BsFillHandbagFill,
    title: "No of Purchase",
    num: 36,
  },
  {
    icons: BsFillBoxFill,
    title: "Canceled Order",
    num: 30,
  },
  {
    icons: HiCurrencyDollar,
    title: "Cost",
    num: 498,
  },
  {
    icons: ImPriceTags,
    title: "Return",
    num: 11,
  },
];
