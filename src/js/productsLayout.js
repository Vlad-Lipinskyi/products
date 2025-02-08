const productsList = document.querySelector('.products-list')

export const createMarkup = (productsData)=>{
    const makrup = productsData.map(obj=>
        `<li class="product-item" id="${obj.id}">
            <p class="product-name">${obj.name}</p>
            <p class="product-price">${obj.price}</p>
            <p class="product-sort">${obj.description}</p>
            <img src="${obj.image}" class="product-img"></img>
            <button class="delete-btn" type="button">delete</button>
            <button class="edit-btn" type="button">edit</button>
        </li>`
    ).join('')
    productsList.innerHTML = makrup
}