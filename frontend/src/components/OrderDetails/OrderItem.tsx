import type { OrderItem } from "../../types/definations";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";

type OrderItemProps = {
  item: OrderItem;
};

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div className="container h-max bg-white shadow-md rounded p-4 order-1 md:order-2">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center gap-2">
          <Link to={`/products/${item.productId}`} className="w-[120px] h-full">
            <img src={item.thumbnail} alt={item.title} className="md:-mt-6" />
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
        <div className="w-full h-full flex flow-row justify-between md:w-max md:flex-col md:gap-2 mx-auto text-sm font-medium cursor-pointer">
          <div className="flex items-center gap-2 text-[#2874f0]">
            <FaStar className="h-4 w-4" />
            <span>Rate & Review Product</span>
          </div>
          <div className="flex items-center gap-2">
            <IoChatbubblesOutline className="h-4 w-4" />
            <span className="text-[#2874f0]">Chat with us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
