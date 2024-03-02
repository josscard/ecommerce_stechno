import { useState, useEffect } from "react";
import { CartLayout } from "@/layouts"
import { Game } from "@/api";
import { useCart } from "@/hooks";
import { useRouter } from "next/router"
import { Cart } from "@/components/Cart"

const gameCtrl = new Game();

// como es una pagina queda con el default

export default function CartPage() {
  const { query: {step = 1} } = useRouter();
 
  //console.log(query);
  //console.log(cart);

  const currentStep = Number(step);
  const [games, setGames] = useState(null)
  const { cart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const data = [];

        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item.id);
         // console.log(response);
         data.push({...response.data, quantity: item.quantity})
        }
      //  console.log(data);
        setGames(data)
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart])
  

  return (
    <>
        <CartLayout>
            {currentStep === 1 && <Cart.StepOne games={games}/>}
            {currentStep === 2 && <Cart.StepTwo games={games}/>}
            {currentStep === 3 && <p>Step THREE</p>}
        </CartLayout>
    </>
  )
}
