import { useSelector } from "react-redux";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { BarChart } from "../../../components/admin/Charts";
import { RootState } from "../../../redux/store";
import toast from "react-hot-toast";
import { CustomError } from "../../../types/api-types";
import { useBarQuery } from "../../../redux/api/dashboardAPI";
import { SkeletonLoader } from "../../../components/loader";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Barcharts = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);

  const { isLoading, data, error, isError } = useBarQuery(user?._id!);

  const products = data?.charts.product || [];
  const orders = data?.charts.order || [];
  const users = data?.charts.user || [];

  if (isError) {
    const err = error as CustomError;
    toast.error(err.data.message);
  }
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        {isLoading ? (
          <SkeletonLoader length={6} />
        ) : (
          <>
            <section>
              <BarChart
                data_1={products}
                data_2={users}
                title_1="Products"
                title_2="Users"
                bgColor_1={`hsl(260, 50%, 30%)`}
                bgColor_2={`hsl(360, 90%, 90%)`}
              />
              <h2>Top Products & Top Customers</h2>
            </section>

            <section>
              <BarChart
                horizontal={true}
                data_1={orders}
                data_2={[]}
                title_1="Orders"
                title_2=""
                bgColor_1={`hsl(180, 40%, 50%)`}
                bgColor_2=""
                labels={months}
              />
              <h2>Orders throughout the year</h2>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Barcharts;
