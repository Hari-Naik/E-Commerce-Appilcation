import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import Loading from "../components/Loading/Loading";
import { Order } from "../types/definations";
import OrderItems from "../components/Orders/OrderItems";
import SearchOrders from "../components/Orders/SearchOrders";

const Orders = () => {
  const { user } = useUser();
  console.log(user);

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async (): Promise<{ orders: Order[] }> => {
      const response = await fetch(
        `https://hari-ecommerce-backend.vercel.app/api/orders/${user?.email}`
      );
      if (!response.ok) throw new Error("Failed to fetch orders.");
      return response.json();
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="w-full h-[calc(100vh-124px)] md:h-[calc(100vh-66px)] flex justify-center">
        <div className=" flex flex-col items-center gap-2">
          <img
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
            className="mt-10"
            alt="not-found"
          />
          <p className="text-base text-[#212121]">{error?.message}</p>
          <p className="text-sm text-[#878787]">Please try again.</p>
          <button
            onClick={() => refetch()}
            className="bg-[#2847f0] text-sm text-white font-medium px-5 py-2 rounded shadow-md">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full sm:py-10 p-3">
      <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto flex flex-col gap-3">
        <Breadcrumbs />
        <SearchOrders />
        {data && data?.orders?.length > 0 && (
          <OrderItems orders={data?.orders} />
        )}
      </div>
    </div>
  );
};

export default Orders;
