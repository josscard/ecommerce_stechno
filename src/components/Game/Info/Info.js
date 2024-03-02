import { Container } from "semantic-ui-react"
import styles from "./Info.module.scss"

// recuperamos props 
export function Info( props ) {
    // hacemos el destructuring de los props el cual se hicieron en game.js

    const { game } = props;
    console.log(game);

  return (
    <Container className={styles.info}>
        <div className={styles.summary}>
            <p>{game.summary}</p>
        </div>

        <div className={styles.more}>
            <ul>
                <li>
                    <span>Fecha de lanzamiento:</span> {game.releasedate}
                    
                </li>
                <li>
                    <span>Plataforma:</span> {game.platform.data.attributes.Title}
                </li>
            </ul>
        </div>
    </Container>
  )
}
