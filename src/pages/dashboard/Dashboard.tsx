import SaleOverview from "../../components/dashboard/SaleOverview";
import SalesOrder from "../../components/dashboard/SalesOrder";
import { StockSummary } from "../../components/stocks";
import Card from "../../components/stocks/Card";

const Dashboard = () => {
  return (
    <>
      <SaleOverview />

      <section className="my-4 grid lg:grid-cols-2 xl:grid-cols-3 gap-7">
        {/* Inventory Summary */}
        <Card title={"Inventory Summary"}>
          <div className="card-body flex justify-between">
            <div className="bg-[#f8f8f8] rounded-xl p-5 w-[9.5rem] h-[10.5rem]">
              <div>
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  width={"60"}
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
                  width={"60"}
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
        <Card title={"Product Details"}>
          <ul>
            <li className="flex justify-between items-center py-3">
              <p className="text-gray-600">Low Stock Items</p>
              <p className="font-extrabold text-2xl">12</p>
            </li>
            <li className="flex justify-between items-center py-3 border-t border-b">
              <p className="text-gray-600">Item Category</p>
              <p className="font-extrabold text-2xl">04</p>
            </li>
            <li className="flex justify-between items-center py-3">
              <p className="text-gray-600">Number of Items</p>
              <p className="font-extrabold text-2xl">1042</p>
            </li>
          </ul>
        </Card>

        {/* Number of Users */}
        <Card title={"No. of Users"}>
          <div className="card-body flex justify-between">
            <div className="bg-[#f8f8f8]  rounded-xl p-5 w-[9.5rem] h-[10.5rem]">
              <div>
                <svg
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width={"75"}
                >
                  <path
                    d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                    fill="#38e079"
                    className="fill-000000"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-500 my-2">Total Customers</p>
              <p className="font-extrabold text-xl">256</p>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-5 w-[9.5rem] h-[10.5rem]">
              <div>
                <svg
                  viewBox="0 0 16 16"
                  width={"60"}
                  // xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 16 16"
                >
                  <path
                    d="M7.516 11.094C7.688 10.609 9 8.938 9 6a3 3 0 1 0-6 0c0 2.938 1.313 4.609 1.484 5.094C2.953 11.234 0 12.211 0 14c0 .422.336 1 1 1h10c.664 0 1-.578 1-1 0-1.789-2.953-2.766-4.484-2.906zm5.132-3.055C12.889 7.311 14 5.273 14 4a3 3 0 0 0-5.143-2.098A5 5 0 0 1 11 6c0 1.521-.297 2.779-.645 3.748.775.307 1.527.723 2.146 1.252H15c.578 0 1-.453 1-1 0-1.258-2.422-1.789-3.352-1.961z"
                    fill="#3392ff"
                    className="fill-000000"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-500 my-2">Total Suppliers</p>
              <p className="font-extrabold text-xl">27</p>
            </div>
          </div>
        </Card>
      </section>

      <StockSummary />
      <SalesOrder />
    </>
  );
};
export default Dashboard;
