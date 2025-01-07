export interface FormData {
  username?: string;
  email: string;
  password: string;
}

export interface ReviewsType {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewsType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
  quantity?: number;
}

export interface CategoryType {
  slug: string;
  name: string;
  url: string;
}

export interface OrderItem {
  productId: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  quantity: number;
  _id: string;
}
export interface Order {
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  _id: string;
  stripeSessionId: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "completed" | "failed";
  customerDetails: {
    email: string;
    name: string;
    phone: string;
  };
  orderId: string;
  createdAt: string;
  updatedAt: string;
}
