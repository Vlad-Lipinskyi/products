import { editProductApi } from "../services/editProductApi";
import { getProductsAPI } from "../services/getProductsApi";
import { createMarkup } from "../productsLayout";
import { deleteProduct } from "../deletingProducts";

export const openModal = () => {
  const editBtnArr = document.querySelectorAll(".edit-btn");
  let parentId;

  editBtnArr.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
      const productElement = e.target.parentElement;
      parentId = productElement.id;

      document.querySelector(".edit-modal").classList.remove("is-hidden");

      document.querySelector("#name-input").value =
        productElement.querySelector(".product-name").textContent;
      document.querySelector("#price-input").value =
        productElement.querySelector(".product-price").textContent;
      document.querySelector("#description-input").value =
        productElement.querySelector(".product-sort").textContent;
      document.querySelector("#img-input").value =
        productElement.querySelector(".product-img").src;
    });
  });

  const formEl = document.querySelector(".edit-form__info");
  const modalEditEl = document.querySelector(".edit-modal");

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    modalEditEl.classList.add("is-hidden");

    const productDataToEdit = {
      name: formEl.elements.name.value,
      price: formEl.elements.price.value,
      description: formEl.elements.description.value,
      img: formEl.elements.img.value,
    };

    await editProductApi(productDataToEdit, parentId);

    const data = await getProductsAPI();
    createMarkup(data);
    deleteProduct();
    openModal();
  });

  const editModalClose = document.querySelector(".close-edit-modal");
  editModalClose.addEventListener("click", () => {
    document.querySelector(".edit-modal").classList.add("is-hidden");
  });
};
