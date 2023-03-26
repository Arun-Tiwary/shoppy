import axios from "axios";

export const productsData = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products/");
  console.log(data);
  return data;
};
