import {getProductsAPI} from './services/getProductsApi'
import {createMarkup} from "./productsLayout"
import { deleteProduct } from "./deletingProducts";
import { openModal } from "./modal/edit-product-modal";

getProductsAPI().then(data=>{createMarkup(data); deleteProduct(); openModal()})