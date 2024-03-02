import styles from "./Panel.module.scss";
import { Button, Container, Icon, Image } from "semantic-ui-react";
import { WishlistIcon } from "@/components/Shared";
import { useCart } from "@/hooks";
import { fn, ENV } from "@/utils";
import { useState } from "react";
import { set } from "lodash";

export function Panel(props) {
  console.log(props);
  const { gameId, game } = props;
  console.log(game.stock);
  const [loading, setLoading] = useState(false);
  const { addCart } = useCart();

  const platform = game.platform.data;
  const buyPrice = fn.calcDiscountedPrice(game.price, game.discount);
  const gameStock = game.stock

  console.log(gameStock);

  const addCartWrapper = () => {
    setLoading(true);
    addCart(gameId);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src={`${ENV.SERVER_HOST}${game.cover.data.attributes.url}`} />
      </div>

      <div className={styles.actionsContainer}>
        <div>
          <h2>{game.title}</h2>

          <div className={styles.moreInfo}>
            <span>
              <Image
                src={`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`}
              />
              {platform.attributes.Title}
            </span>

{/* LA SIGUIENTES LINEAS ES PARA CONDICIONAR EL ICONO QUE SALE SI HAY O NO HAY STOCK */}

            {game.stock > 0 && (
              <span>
                <Icon name="check" />
                {game.stock} unidades disponibles
              </span>
            )}

            {game.stock <= 0 && (
              <span>
                <Icon name="x" />
                {game.stock} unidades disponibles
              </span>
            )}
          </div>

          <div className={styles.price}>
            {game.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />$ {game.price.toLocaleString("en")}{" "}
                  {/*casteamos precio para que salga con los puntos de mil */}
                </span>

                <span className={styles.discount}>-{game.discount}%</span>
              </>
            )}

            <span className={styles.price}>$ {buyPrice}</span>
          </div>

          {game.stock > 0 && (
            <Button primary fluid onClick={addCartWrapper} loading={loading}>
              Comprar ahora
            </Button>
          )}

          {game.stock <= 0 && <span className={styles.agotado}>Agotado</span>}

          <WishlistIcon gameId={gameId} className={styles.heart} />
        </div>
      </div>
    </Container>
  );
}
