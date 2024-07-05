export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};

export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};

export type CartItems = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

export type OrderItems = Omit<CartItems, "stock"> & { _id: string };

export type Order = {
  orderItems: OrderItems[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};

type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};

type LatestTransaction = {
  _id: string;
  discount: number;
  amount: number;
  quantity: number;
  status: string;
};

export type Stats = {
  categoryCount: Record<string, number>[];
  changePercent: CountAndChange;
  count: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransactions: LatestTransaction[];
};

type RevenueDistribution = {
  netMargin: number;
  discount: number;
  prodcutionCost: number;
  burn: number;
  marketingCost: number;
};

type OrderFullfillment = {
  processing: number;
  shipped: number;
  delivered: number;
};

export type Pie = {
  orderFullfillment: OrderFullfillment;
  productCategories: Record<string, number>[];
  stockAvailability: {
    inStock: number;
    outOfStock: number;
  };
  revenueDistribution: RevenueDistribution;
  usersAgeGroup: {
    teen: number;
    adult: number;
    old: number;
  };
  adminCustomer: {
    admin: number;
    customer: number;
  };
};

export type Bar = {
  user: number[];
  product: number[];
  order: number[];
};

export type Line = {
  user: number[];
  product: number[];
  discount: number[];
  revenue: number[];
};
