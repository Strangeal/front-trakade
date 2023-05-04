import SaleAct from '../../components/dashboard/SaleAct';
import SalesOrder from '../../components/dashboard/SalesOrder';
import { StockSummary } from '../../components/stocks';

const Dashboard = () => {
  return (
    <>
      <SaleAct />

      <StockSummary />
      <SalesOrder />
    </>
  );
};
export default Dashboard;
