import useCartServices from "../utils/store";

type Item = {
  name: string;
  price: number;
  qty: number;
  size?: string;
  color?: string;
  id: string;
  img: string;
};

export const addToCart = (item: Item) => {
  const { increase, items, remove } = useCartServices();
  return increase(item);
};

export const removeFromCart = (item: Item) => {
  const { increase, items, remove } = useCartServices();
  console.log("clicked");
  return remove(item);
};
