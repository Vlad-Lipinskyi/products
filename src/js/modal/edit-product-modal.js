import { editProductApi } from "../services/editProductApi"
import { getProductsAPI } from "../services/getProductsApi"
import {createMarkup} from "../productsLayout"
import { deleteProduct } from "../deletingProducts";

export const openModal = () => {
    const editBtnArr = document.querySelectorAll('.edit-btn')
    let parentId
    editBtnArr.forEach(editBtn => {
        editBtn.addEventListener('click', (e) => {
            document.querySelector('.edit-modal').classList.remove('is-hidden')
            parentId = e.target.parentElement.id
        })
    })
    const formEl = document.querySelector('.edit-form__info')
    const modalEditEl = document.querySelector('.edit-modal')

    formEl.addEventListener('submit', async (e) => {
        e.preventDefault()
        modalEditEl.classList.add('is-hidden')
        const productDataToEdit = {
            name: `${formEl.elements.name.value}`,
            price: `${formEl.elements.price.value}`,
            description: `${formEl.elements.description.value}`,
            img: `${formEl.elements.img.value}`,
        }
        await editProductApi(productDataToEdit, parentId).then((post) => console.log(post));
        await getProductsAPI().then(data=>{createMarkup(data); deleteProduct(); openModal()}) 
    })
    const editModalClose = document.querySelector('.close-edit-modal')
    editModalClose.addEventListener('click', () => {
        document.querySelector('.edit-modal').classList.add('is-hidden')
    })
}