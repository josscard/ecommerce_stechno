import styles from "./Basket.module.scss"
import { Icon, Image, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { ENV, fn } from "@/utils";
import { useCart } from "@/hooks";
import { Panel } from "@/components/Game/Panel";




export function Basket(props) {
   
    const { games} = props;
     
    
   const { changeQuantityItem, deleteItem} = useCart();
 

  // console.log(stocko);
    

   /* const options = [
        {key: 1, text: "1", value: 1},
        {key: 2, text: "2", value: 2},
        {key: 3, text: "3", value: 3},
        {key: 4, text: "4", value: 4},
        {key: 5, text: "5", value: 5}
    ]*/

    const options = Array.from({length: 10}, (_, index) =>{
        const number = index + 1
        return { key: number, text: String(number), value: number}
    })

    

  return (
    <div className={styles.basket}>
        <h2>Carrito</h2>

        <div className={styles.block}>
            {map(games, (game) => (
            
                <div key={game.id} className={styles.product}>
                  <Image href={`/${game.attributes.slug}`} src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} className={styles.imagen}/>
                    <div>
                        <div className={styles.info}>
                            <div>
                                <p>{game.attributes.title}</p>
                                <p>{game.attributes.platform.data.attributes.Title}</p>
                            </div>

                            <Icon name="trash alternate" link onClick={() => deleteItem(game.id)} />
                        </div>

                        <div className={styles.quantity}>
                            <Dropdown 
                                className="number" 
                                options={options} 
                                selection 
                                value={game.quantity} 
                                compact
                                    onChange={(_,data) => changeQuantityItem(game.id, data.value)}
                                />

                                

                                <span>
                                
                                    $ {fn.calcDiscountedPrice(
                                        game.attributes.price, 
                                        game.attributes.discount
                                        )}
                                </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
