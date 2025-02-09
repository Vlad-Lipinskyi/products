import { editProductApi } from "../services/editProductApi";
import { getProductsAPI } from "../services/getProductsApi";
import { createMarkup } from "../productsLayout";
import { deleteProduct } from "../deletingProducts";

export const openModal = () => {
    const editBtnArr = document.querySelectorAll('.edit-btn');
    let parentId;

    editBtnArr.forEach(editBtn => {
        editBtn.addEventListener('click', (e) => {
            // Отримуємо продукт, по якому клікнули
            const productElement = e.target.parentElement;
            parentId = productElement.id;

            // Відкриваємо модальне вікно редагування
            document.querySelector('.edit-modal').classList.remove('is-hidden');

            // Заповнюємо форму на основі даних продукту
            document.querySelector('#name-input').value = productElement.querySelector('.product-name').textContent;
            document.querySelector('#price-input').value = productElement.querySelector('.product-price').textContent;
            document.querySelector('#description-input').value = productElement.querySelector('.product-sort').textContent;
            document.querySelector('#img-input').value = productElement.querySelector('.product-img').src;
        });
    });

    const formEl = document.querySelector('.edit-form__info');
    const modalEditEl = document.querySelector('.edit-modal');

    formEl.addEventListener('submit', async (e) => {
        e.preventDefault();
        modalEditEl.classList.add('is-hidden'); // Закриваємо модальне вікно після збереження

        const productDataToEdit = {
            name: formEl.elements.name.value,
            price: formEl.elements.price.value,
            description: formEl.elements.description.value,
            img: formEl.elements.img.value,
        };

        // Викликаємо API для редагування продукту
        await editProductApi(productDataToEdit, parentId);

        // Оновлюємо список продуктів після редагування
        const data = await getProductsAPI();
        createMarkup(data);
        deleteProduct();
        openModal(); // Знову ініціалізуємо кнопки редагування
    });

    // Закриття модального вікна
    const editModalClose = document.querySelector('.close-edit-modal');
    editModalClose.addEventListener('click', () => {
        document.querySelector('.edit-modal').classList.add('is-hidden');
    });
};
