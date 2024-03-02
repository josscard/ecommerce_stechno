import { useState, useEffect} from "react";
import { Container, Image} from "semantic-ui-react";
import {ENV, fn} from "../../../utils"
import { DateTime } from "luxon";
import Link from "next/link"
import { Game } from "@/api"
import { Label} from "@/components/Shared"
import styles from "./BannerLastGamePublished.module.scss";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
    const [game, setGame] = useState(null);

    useEffect(() => {
      (async () => {
        try {
            const response = await gameCtrl.getLastPublished();
    setGame(response.data[0]);
            
        } catch (error) {
            console.error(error);
        }
      })()
    }, []);

    if (!game) return null;

    // hace mas facil buscar la ubicacion de la imagen
    const wallpaper = game.attributes.wallpaper.data[0];
    const releasedate = new Date(game.attributes.releasedate).toISOString();
    const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)

console.log(wallpaper);
    
  return (
    <div className={styles.container}>
        <Image src={`${ENV.SERVER_HOST}${wallpaper.attributes.url}`}className={styles.wallpaper}/>

    <Link className={styles.infoContainer} href={`/${game.attributes.slug}`}>


        <Container>
            <span className={styles.date}>{DateTime.fromISO(releasedate).minus({days: 1}).toRelative()}</span>

            <h2>{game.attributes.title}</h2>

            <p className={styles.price}>
                <Label.Discount>-{game.attributes.discount}%</Label.Discount>
                
                <span className={styles.finalPrice}>
                
               $ {price}
                </span>
            </p>
        </Container>
    </Link>
    </div>
)
}
