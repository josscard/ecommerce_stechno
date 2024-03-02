import styles from "./WishlistIcon.module.scss";
import classNames from "classnames";
import { Icon} from "semantic-ui-react"

// aca estamos creando el icono de los productos deseados
export function WishlistIcon(props) {

  const {gameId, className} = props;

  return (
    <Icon 
      name="heart" 
      className={classNames(styles.wishlistIcon, {
      [className]: className,
    })}/>
  )
}
