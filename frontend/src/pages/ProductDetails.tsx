import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import ImageGallery from "../components/Product/ImageGallery";
import ActionButtons from "../components/Product/ActionButtons";
import ProductInfo from "../components/Product/ProductInfo";
import ProductReviews from "../components/Product/ProductReviews";
import { ProductDetailsSkelton } from "../components/Loading/Skeltons";

import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useProductById } from "../hooks/useProductById";
import { useToken } from "../hooks/useToken";

import { toast } from "react-toastify";
const ProductDetails = () => {
  const { productId } = useParams();
  const [activeImageURL, setActiveImageURL] = useState<string>("");
  const { token } = useToken();

  const cart = useAppSelector(state => state.cart.cart);
  const wishlist = useAppSelector(state => state.wishlist);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, data: productDetails, error } = useProductById(productId!);

  const isInCart = useMemo(() => {
    return cart.some(item => item.id === productDetails?.id);
  }, [cart, productDetails]);

  const isFavourite = useMemo(() => {
    return wishlist.some(item => item.id === productDetails?.id);
  }, [wishlist, productDetails]);

  useEffect(() => {
    if (productDetails?.images.length) {
      setActiveImageURL(productDetails?.images[0]);
    }
  }, [productDetails]);

  const handleImageChange = (imageUrl: string) => {
    setActiveImageURL(imageUrl);
  };

  const handleAddToCart = () => {
    if (productDetails && !isInCart) {
      dispatch(addToCart({ ...productDetails, quantity: 1 }));
      toast.success("Added to cart");
      navigate("/viewcart");
    } else {
      navigate("/viewcart");
    }
  };

  const handleAddToWishlist = () => {
    if (!isFavourite && token) {
      dispatch(addToWishlist(productDetails!));
      toast.success("Added to your wishlist");
    } else if (isFavourite) {
      dispatch(removeFromWishlist(Number(productId)));
      toast.success("Removed from your wishlist");
    } else {
      toast.error("Please login for wishlisting a product");
    }
  };

  if (isLoading) {
    return <ProductDetailsSkelton />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section className="w-full h-full flex items-center justify-center">
      {/* product images */}

      <div className="container min-h-[580px] grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-2 bg-white shadow-sm md:mt-3 mb-5">
        <div className="p-3">
          <ImageGallery
            images={productDetails?.images || []}
            activeImageURL={activeImageURL}
            onImageChange={handleImageChange}
          />
          <ActionButtons
            handleAddToCart={handleAddToCart}
            handleAddToWishlist={handleAddToWishlist}
            isInCart={isInCart}
            isFavourite={isFavourite}
          />
        </div>

        <div className="h-2 bg-[#f1f2f4] md:hidden"></div>

        {/* product Info */}
        <div className="flex flex-col p-3">
          <Breadcrumbs />
          <ProductInfo product={productDetails!} />
          {productDetails?.reviews && (
            <ProductReviews
              overallRating={productDetails?.rating}
              reviews={productDetails?.reviews}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
