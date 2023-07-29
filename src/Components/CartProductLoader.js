import { getShoppingCart } from "../fakedb";

const cartProductLoader = async () => {
    const loadPorduct = await fetch('products.json');
    const products = await loadPorduct.json();

    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
        // console.log(id);
        const addedProducts = products.find(pd => pd.id === id)
        if (addedProducts) {
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            saveCart.push(addedProducts);
        }
    }

    return saveCart;
}
export default cartProductLoader;