import type { Order } from "../../types/definations";

type DeliveyAdressProps = {
  order: Order;
};

const DeliveryAddress: React.FC<DeliveyAdressProps> = ({ order }) => {
  return (
    <div className="container h-max bg-white shadow-md rounded p-6 order-2 md:order-1">
      <h2 className="text-xs text-[#212121] opacity-40 md:text-base md:font-medium md:opacity-100 mb-2">
        Delivery Address
      </h2>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-[#212121] font-medium">
          {order?.customerDetails.name}
        </span>
        <div className="flex flex-col text-sm text-[#212121]">
          <span>{order?.shippingAddress.street}</span>
          <span>
            {order?.shippingAddress.city} - {order?.shippingAddress.zipCode},{" "}
            {order?.shippingAddress.state}
          </span>
        </div>
        <p className="text-sm text-[#212121] font-medium">
          Phone number{" "}
          <span className="font-normal">{order?.customerDetails.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default DeliveryAddress;
