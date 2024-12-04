import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section className="w-full h-[calc(100vh - 120px)] md:h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-fit h-fit p-20 bg-white flex flex-col items-center justify-center gap-y-5">
        <img
          src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
          alt="order success"
          className="h-20 w-20"
        />

        <h2 className="text-2xl text-[#212121] font-semibold">
          Thank you for ordering!
        </h2>
        <p className="text-sm text-[#212121]">
          Now you can view your Orders or continue Shopping with us
        </p>
        <div className="flex items-center gap-x-5">
          <Link to={"/orders"}>
            <button className="w-52 h-12 rounded border text-sm uppercase font-semibold hover:border-[#212121] duration-300">
              View Orders
            </button>
          </Link>
          <Link to={"/"}>
            <button className="w-52 h-12 rounded bg-[#2874f0] text-slate-100 text-sm uppercase font-semibold hover:bg-[#2874f0]/70 duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
