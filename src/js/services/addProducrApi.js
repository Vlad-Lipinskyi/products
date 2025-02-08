export const addProductApi = async (addData) => {
  try {
    return await fetch("https://67a7982f203008941f680c6c.mockapi.io/products/products", {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
  } catch (error) {
    console.log(error);
  }
};
