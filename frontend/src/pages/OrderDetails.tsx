import type { Order } from "../types/definations";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import DeliveryAddress from "../components/OrderDetails/DeliveryDetails";
import OrderItem from "../components/OrderDetails/OrderItem";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error";

const OrderDetails = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const itemId = searchParams.get("item_id");

  const {
    isLoading,
    data: order,
    error,
    refetch,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: async (): Promise<Order> => {
      const response = await fetch(
        `https://hari-ecommerce-backend.vercel.app/api/orders/order/${orderId}`
      );
      if (!response.ok) throw new Error("Failed to fetch orders.");

      return response.json();
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error.message} refetch={refetch} />;
  }

  const item = order?.items?.find(item => item._id === itemId);

  return (
    <section className="w-full h-full flex flex-col items-center gap-2 md:gap-6 pt-2 md:pt-10">
      <DeliveryAddress order={order!} />
      <OrderItem item={item!} deliveredDate={order?.createdAt as string} />
    </section>
  );
};

export default OrderDetails;
