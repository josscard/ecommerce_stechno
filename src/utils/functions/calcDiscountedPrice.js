
// la funcion calcDiscountedPriceCart me tocó hacerla para hacer los cal-
// culos en el carrito de compra 

export function calcDiscountedPriceCart(price, discount) {

    
   // if (!discount) return price.toLocaleString("en");
   if (!discount) return price;


    const discountAmount = (price * discount) / 100;
    const finalPrice = price- discountAmount

   // return finalPrice.toLocaleString("en");
    return finalPrice;

    

}

export function calcDiscountedPrice(price, discount) {

    
   if (!discount) return price.toLocaleString("en");
  


    const discountAmount = (price * discount) / 100;
    const finalPrice = price- discountAmount

   return finalPrice.toLocaleString("en");
    

}