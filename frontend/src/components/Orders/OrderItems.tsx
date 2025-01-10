import React from "react";
import { Order } from "../../types/definations";
import OrderItem from "./OrderItem";

type OrderItemProps = {
  orders: Order[];
};

const OrderItems: React.FC<OrderItemProps> = ({ orders }) => {
  return (
    <ul className="w-full flex flex-col gap-3 sm:mt-3">
      {orders?.map(order => {
        return order.items.map(item => (
          <OrderItem key={item._id} item={item} orderId={order.orderId} />
        ));
      })}
    </ul>
  );
};

export default OrderItems;
