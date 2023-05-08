import SaleAct from '../../components/dashboard/SaleAct';
import SalesOrder from '../../components/dashboard/SalesOrder';
import { StockSummary } from '../../components/stocks';
import Card from '../../components/stocks/Card';

const Dashboard = () => {
  return (
    <>
      <SaleAct />

      <section className="my-4 grid lg:grid-cols-2 xl:grid-cols-3 gap-7">
        {/* Inventory Summary */}
        <Card title={'Inventory Summary'}>
          <div className="card-body flex justify-between">
            <div className="bg-[#f8f8f8] rounded-xl p-5 w-[9.5rem] h-[10.5rem]">
              <div>
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  width={'60'}
                >
                  <path fill="none" d="M0 0h256v256H0z"></path>
                  <path
                    d="M229.9 70.8a.1.1 0 0 1-.1-.1 16.2 16.2 0 0 0-6-5.9l-88-49.5a16 16 0 0 0-15.6 0l-88 49.5a16.2 16.2 0 0 0-6 5.9.1.1 0 0 1-.1.1v.2a15 15 0 0 0-2.1 7.7v98.6a16.1 16.1 0 0 0 8.2 14l88 49.5a16.5 16.5 0 0 0 7.2 2h1.4a15.7 15.7 0 0 0 7-2l88-49.5a16.1 16.1 0 0 0 8.2-14V78.7a15.6 15.6 0 0 0-2.1-7.9ZM128 29.2 207.7 74l-30.6 17.4-80.7-44.5Zm.9 89.6L48.4 74 80 56.2l80.8 44.5Zm7.2 103.5.8-89.6 32.1-18.3v38.1a8 8 0 0 0 16 0v-47.2l31-17.6v89.6Z"
                    fill="#06b02a"
                    className="fill-000000"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-500 my-2">Quantity in Hand</p>
              <p className="font-extrabold text-xl">2156</p>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-5 w-[9.5rem] h-[10.5rem]">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={'60'}
                >
                  <path
                    d="M21.971 8.92 17.769 7.3a.75.75 0 1 0-.539 1.4l2.168.835a.25.25 0 0 1 0 .466l-7.309 2.924a.257.257 0 0 1-.185 0L4.569 9.989a.249.249 0 0 1 0-.466L6.763 8.7a.75.75 0 1 0-.527-1.4L1.978 8.9a.769.769 0 0 0-.479.72v8.917a.5.5 0 0 0 .277.447l10 4.969h.014a.472.472 0 0 0 .419 0h.014l10-4.969a.5.5 0 0 0 .276-.447V9.5c.001-.012.048-.359-.528-.58Z"
                    fill="#c44100"
                    className="fill-000000"
                  ></path>
                  <path
                    d="M11.2 10.1a1 1 0 0 0 1.6 0l3-4a1 1 0 0 0-.8-1.6h-1.5v-3a1.5 1.5 0 0 0-3 0v3H9a1 1 0 0 0-.8 1.6Z"
                    fill="#c44100"
                    className="fill-000000"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-500 my-2">Will be Received</p>
              <p className="font-extrabold text-xl">53</p>
            </div>
          </div>
        </Card>

        {/* Product Details */}
      <StockSummary />
      <SalesOrder />
    </>
  );
};
export default Dashboard;
