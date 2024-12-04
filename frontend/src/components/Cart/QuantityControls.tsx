import React from "react";

type QuantityControlsProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const QuantityControls: React.FC<QuantityControlsProps> = ({
  quantity,
  onDecrement,
  onIncrement,
}) => {
  const btnStyle =
    "h-7 w-7 flex items-center justify-center bg-white text-base text-[#212121] font-medium rounded-full border border-[#c2c2c2]";
  return (
    <div className="flex items-center gap-2">
      <button onClick={onDecrement} className={btnStyle}>
        -
      </button>
      <div className="w-[46px] h-7 border border-[#c2c2c2] rounded-sm">
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-full outline-none text-center text-sm text-[#212121] font-medium"
        />
      </div>
      <button onClick={onIncrement} className={btnStyle}>
        +
      </button>
    </div>
  );
};

export default QuantityControls;
