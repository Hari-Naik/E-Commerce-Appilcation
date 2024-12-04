import EmptyPageView from "../components/EmptyPageView";
import { useAppSelector } from "../app/hooks";
import WishlistItem from "../components/Wishlist/WishlistItem";

const Wishlist = () => {
  const wishlist = useAppSelector(state => state.wishlist);
  return (
    <main className="py-2 sm:p-5">
      {wishlist.length ? (
        <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto bg-white">
          <div className="border-b border-[#e0e0e0] px-[30px] py-[20px]">
            <h1 className="text-[17px] text-[#212121] font-medium capitalize">
              my wishlist ({wishlist.length})
            </h1>
          </div>
          <ul>
            {wishlist.map(product => (
              <WishlistItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      ) : (
        <EmptyPageView
          title="Empty Wishlist"
          description="You have no items in your wishlist. Start adding!"
        />
      )}
    </main>
  );
};

export default Wishlist;
