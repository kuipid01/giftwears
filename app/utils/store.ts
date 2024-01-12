import { create } from "zustand";
import { persist } from "zustand/middleware";
// create type for our cart

type Cart = {
  items: Item[];
  totalPrice: number;
};

type Item = {
  name: string;
  price: number;
  qty: number;
  img: string;
  size?: string;
  color?: string;
  id: string;
};
const initialState: Cart = {
  items: [],
  totalPrice: 0,
};

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: "cartStore",
  })
);

export default function useCartServices() {
  const { items, totalPrice } = cartStore();
  return {
    items,
    totalPrice,
    increase: (item: Item) => {
      const exist = items.find((x) => x.id === item.id);
      console.log(exist, item.id);
      const updatedCartItems = exist
        ? items.map((x) =>
            x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];

      const { totalPrice } = calcPrice(updatedCartItems);
      cartStore.setState({
        items: updatedCartItems,
        totalPrice,
      });
    },
    init: () => cartStore.setState(initialState),
  };
}
const calcPrice = (items: Item[]) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  return {
    totalPrice,
  };
};
