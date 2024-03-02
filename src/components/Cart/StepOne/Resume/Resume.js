import Link from "next/link";
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { forEach } from "lodash";
import { fn } from "@/utils";
import styles from "./Resume.module.scss"

export function Resume(props) {
    console.log(props);
    const { games} = props;
    const router = useRouter();
    const [ totals, setTotals] = useState(null);

    


    useEffect(() => {
     let totals = {
        original: 0,
        discount: 0,
        price: 0,
        priceTotal: 0,
        iva: 0
     };

     forEach(games, (game) => {
        // hicimos esta funcion para usarla en el carrito y no me interfiera en el tolocalstring para poner decimales
        const price = fn.calcDiscountedPriceCart(
            game.attributes.price, 
            game.attributes.discount
            );
          

            totals= {
                original: totals.original + (game.attributes.price * game.quantity),
                discount: totals.discount + (game.attributes.price - price) * game.quantity,
                price: totals.price + price * game.quantity-(price * 19/100)* game.quantity , 
                priceTotal: totals.priceTotal + price * game.quantity,
                iva: totals.iva + (price * 19/100)* game.quantity
                
            };

     });
     setTotals(totals)
     console.log(totals);
    
    }, [games]);

    const goToStepTwo = () => {
        router.replace({ query: {...router.query, step: 2}})
    }
    
    if(!totals) return null
  return (
    <div className={styles.resume}>
        <h2>
            Resumen
        </h2>

        <div className={styles.block}>
            <div className={styles.prices}>
                <div>
                    <span>Total sin Descuento</span>
                    <span>$ {totals.original.toLocaleString("en")}</span>
                </div>
                <div>
                    <span>Descuento</span>
                    <span>-$ {totals.discount.toLocaleString("en")}</span>
                </div>
                <div>
                    <span>Total antes de iva</span>
                    <span>$ {totals.price.toLocaleString("en")}</span>
                </div>
                <div>
                    <span>Iva</span>
                    <span>$ {totals.iva.toLocaleString("en")}</span>
                </div>
                
                <div>
                    <span>Total a pagar</span>
                    <span>$ {totals.priceTotal.toLocaleString("en")}</span>
                </div>
            </div>

            <Button primary fluid onClick={goToStepTwo}>
                Proceder con el pago
                
            </Button>

            <Link href="/">
                Continuar comprando
            </Link>
        </div>
    </div>
  )
}
