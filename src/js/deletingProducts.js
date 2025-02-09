import { deleteProductApi } from "./services/deleteProductApi";
import { getProductsAPI } from "./services/getProductsApi";
import { createMarkup } from "./productsLayout";
import { openModal } from "./modal/edit-product-modal";

export const deleteProduct = () => {
    const deleteBtnArr = document.querySelectorAll(".delete-btn");

    deleteBtnArr.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", async () => {
            const productId = deleteBtn.parentElement.id;
            
            try {
                await deleteProductApi(productId);
                
                const data = await getProductsAPI();
                createMarkup(data); 
                deleteProduct(); 
                openModal(); 
            } catch (error) {
                console.error("Error while deleting the product:", error);
                alert("Не вдалося видалити продукт. Спробуйте ще раз.");
            }
        });
    });
};
