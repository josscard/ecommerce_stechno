import { useState, useEffect, createContext, Children} from "react";
import { Cart } from "@/api";

const cartCtrl = new Cart();

export const CartContext = createContext();

export function CartProvider(props) {
    const { children} = props;
    const [cart, setCar] = useState(null)
    const [total, setTotal] = useState(cartCtrl.count());

    console.log(total);

    useEffect(() => {
        const response = cartCtrl.getAll();
        setCar(response);
    }, [])
    
    const addCart = (gameId) => {
        cartCtrl.add(gameId);
        refreshTotalCart();
    };

    const changeQuantityItem =(gameId, quantity) => {
        cartCtrl.changeQuantity(gameId, quantity)
        refreshTotalCart();

    }

    const deleteItem = (gameId) =>{
        cartCtrl.delete(gameId);
        refreshTotalCart();
    }

    // nos sirve para que al agregar un producto se nos refresque el numero del carro
    const refreshTotalCart = () => {
        setTotal(cartCtrl.count());
        setCar(cartCtrl.getAll());
    }
    const data = {
        cart,
        addCart,
        total,
        deleteItem,
        deleteAllItems: () => {},
        changeQuantityItem,

    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}