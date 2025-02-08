import { deleteProductApi } from "./services/deleteProductApi"
import { getProductsAPI } from "./services/getProductsApi"
import {createMarkup} from "./productsLayout"
import { deleteProduct } from "./deletingProducts";
import { openModal } from "./modal/edit-product-modal";
export const deleteProduct = () =>{
    const deleteBtnArr = document.querySelectorAll('.delete-btn')
    deleteBtnArr.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', async ()=>{
            await deleteProductApi(deleteBtn.parentElement.id).then(data => data)
            await getProductsAPI().then(data=>{createMarkup(data); deleteProduct(); openModal()}) 
        })
    })
}