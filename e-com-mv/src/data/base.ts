export const baseUrl = "https://api.escuelajs.co/api/v1/products";

export async function ProductsData() {
  const res = await fetch(baseUrl, {
    method: "GET",
  });
  return await res.json();
}
export const ProductsD = async () => {
  const res = await fetch(baseUrl, {
    method: "GET",
  });
  return await res.json();
};

export const SingleProduct = async (id: number) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "GET",
  });
  return await res.json();
};
