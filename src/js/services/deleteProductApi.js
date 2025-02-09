export const deleteProductApi = async (id) => {
  try {
    return await fetch(`https://67a7982f203008941f680c6c.mockapi.io/products/products/${id}`, {
      method: "DELETE",
    })
    then((data) => data.json());
  } catch (error) {
    console.log(error.message);
  }
};
