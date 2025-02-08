export const editProductApi = async (data, editedProductId) => {
  console.log(data, editedProductId)
  try {
    return await fetch(`hhttps://67a7982f203008941f680c6c.mockapi.io/products/products${editedProductId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
  } catch (error) {
    console.log(error.message);
  }
};
