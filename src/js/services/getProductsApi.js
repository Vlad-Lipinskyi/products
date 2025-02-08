export const getProductsAPI = async ()=>{
    let response
    
    try{
     response = await fetch('https://67a7982f203008941f680c6c.mockapi.io/products/products').then(data=> data.json())
    } catch(error) {
       response = error
    }
    return response
}