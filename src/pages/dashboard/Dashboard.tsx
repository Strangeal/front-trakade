import { CategorySummary } from '../../components/categories';
import SaleAct from '../../components/dashboard/SaleAct';
import SalesOrder from '../../components/dashboard/SalesOrder';

const Dashboard = () => {
  return (
    <>
      <SaleAct />

      <CategorySummary />
      <SalesOrder />
    </>
  );
};
export default Dashboard;
