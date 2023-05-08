import SaleOverview from "../../components/dashboard/SaleOverview";
import SalesOrder from "../../components/dashboard/SalesOrder";
import { StockSummary } from "../../components/stocks";

const Dashboard = () => {
  return (
    <>
      <SaleOverview />

      <StockSummary />
      <SalesOrder />
    </>
  );
};
export default Dashboard;
