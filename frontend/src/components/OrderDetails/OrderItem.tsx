import type { OrderItem } from "../../types/definations";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import { format } from "date-fns";

type OrderItemProps = {
  item: OrderItem;
  deliveredDate: string;
};

const OrderItem: React.FC<OrderItemProps> = ({ item, deliveredDate }) => {
  return (
    <div className="w-full md:max-w-[90%] h-max bg-white shadow-md rounded order-1 md:order-2 p-4">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-3">
          <Link
            to={`/products/${item.productId}`}
            className="w-[120px] h-[120px]">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </Link>
          <div className="flex flex-col gap-1 h-full">
            <Link to={`/products/${item.productId}`}>
              <span className="text-sm text-[#212121] hover:text-[#2847f0]">
                {item.title}
              </span>
            </Link>
            <span className="text-sm text-[#212121] font-medium">
              ${item.price}
            </span>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-1 md:w-max mx-auto text-sm font-medium cursor-pointer">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 bg-[#009300] rounded-full"></div>
            <span>
              Delivered on {format(new Date(deliveredDate), "MMM dd, yyyy")}
            </span>
          </div>
          <span className="text-xs text-[#212121] font-normal">
            Your item has been delivered.
          </span>

          <div className="flex items-center gap-2 text-[#2874f0]">
            <FaStar className="h-4 w-4" />
            <span>Rate & Review Product</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
