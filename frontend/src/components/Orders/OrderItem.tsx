import { Link } from "react-router-dom";
import type { OrderItem } from "../../types/definations";

type OrderItemProps = {
  orderId: string;
  item: OrderItem;
};

const OrderItem: React.FC<OrderItemProps> = ({ orderId, item }) => {
  return (
    <Link to={`/order_details?order_id=${orderId}&item_id=${item._id}`}>
      <li className="w-full flex gap-8 bg-white px-10 py-4 border border-gray-300 hover:shadow-md cursor-pointer rounded">
        {/* image */}
        <div className="h-[75px] w-[75px]">
          <img
            loading="lazy"
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#212121] font-medium">
            {item.title}
          </span>
          <span className="text-sm text-[#212121]">${item.price}</span>
          {/* price */}
        </div>
      </li>
    </Link>
  );
};

export default OrderItem;
