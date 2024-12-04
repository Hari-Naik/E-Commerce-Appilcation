import { toast } from "react-toastify";
import { useAppSelector } from "../app/hooks";
import CartItems from "../components/Cart/CartItems";
import PriceDetails from "../components/Cart/PriceDetails";
import EmptyPageView from "../components/EmptyPageView";

import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { user } = useAuth();
  const cart = useAppSelector(state => state.cart.cart);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (user) {
      const stripe = await loadStripe(
        "pk_test_51NzBPUSHYAbQKEXuV30nPsssHXMZY1KLc13VZKY4stSaTtA2awnjeZ6IgmDHk4N1i0WFyTvZW6a1iDVio34acOBX00LlmvyzA3"
      );

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cart }),
      };

      const response = await fetch(
        "http://localhost:7000/api/create-checkout-session",
        options
      );

      const session = await response.json();
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      console.log("checkout session", session);
      console.log("checkout result", result);

      if (result?.error) {
        toast.error("Failed to checkout. Please try again.");
        return;
      }
    } else {
      toast.error("Please login to checkout");
      navigate("/account/login");
    }
  };

  return (
    <main className="py-2 sm:p-5">
      {cart.length ? (
        <div className="flex flex-col md:flex-row gap-3 w-full max-w-[1120px] mx-auto">
          <CartItems cart={cart} handleCheckout={handleCheckout} />
          <PriceDetails cart={cart} />
        </div>
      ) : (
        <EmptyPageView
          title="Your cart is empty!"
          description="Add items to it now."
        />
      )}
    </main>
  );
};

export default Cart;
