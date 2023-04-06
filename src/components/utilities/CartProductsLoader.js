import { getShoppingCart } from "./fakedb";

const cartProductsLoader = async () => {
  const res = await fetch("products.json");
  const result = await res.json();

  const savedProducts = getShoppingCart();
  const cartProducts = [];
  for (let id in savedProducts) {
    const matchedProduct = result.find((product) => product.id === id);
    matchedProduct["quantity"] = savedProducts[id];
    cartProducts.push(matchedProduct);
  }
  return cartProducts;
};

export { cartProductsLoader };
