import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import Loading from "../components/Loading/Loading";
import { Order } from "../types/definations";
import OrderItems from "../components/Orders/OrderItems";
import SearchOrders from "../components/Orders/SearchOrders";

const Orders = () => {
  const { user } = useUser();
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async (): Promise<Order[]> => {
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
    return <div>{error.message}</div>;
  }

  return (
    <div className="w-full py-10">
      <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto">
        <Breadcrumbs />
        <SearchOrders />
        <OrderItems orders={orders!} />
      </div>
    </div>
  );
};

export default Orders;
