import { addProductApi } from "../services/addProducrApi";
import { getProductsAPI } from "../services/getProductsApi"
import {createMarkup} from "../productsLayout"
import { deleteProduct } from "../deletingProducts";
import { openModal } from "../modal/edit-product-modal";

const formEl = document.querySelector('.form-info')
const modalEl = document.querySelector('.modal')

formEl.addEventListener('submit', async (e) => {
    e.preventDefault()
    modalEl.classList.add('is-hidden')
    const productDataToAdd = {
        name: `${formEl.elements.name.value}`,
        price: `${formEl.elements.price.value}`,
        description: `${formEl.elements.description.value}`,
        img: `${formEl.elements.img.value}`,
    }
    await addProductApi(productDataToAdd).then((data) => data)   
    await getProductsAPI().then(data=>{createMarkup(data); deleteProduct(); openModal()}) 
})