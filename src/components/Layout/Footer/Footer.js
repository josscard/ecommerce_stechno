import Link from "next/link";
import{ Container, Image, Button} from "semantic-ui-react"
import styles from "./Footer.module.scss"


export function Footer() {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.columns}>
                <div>
                    <Link href="/">
                        <Image src="/images/stechno.png" alt="Stechno"/>
                    </Link>
                </div>

                <div>
                    <ul>
                        <Link href="#">Términos y condiciones</Link>
                        <Link href="#">Politica de privacidad</Link>
                        <Link href="#">Contacto</Link>
                        <Link href="#">FAQs</Link>

                    </ul>
                </div>

                <div className={styles.social}>
                    <Button as="a" href="#" circular color="facebook" icon="facebook"/>
                    <Button as="a" href="#" circular color="twitter" icon="twitter"/>
                    <Button as="a" href="#" circular color="pink" icon="instagram"/>
                    <Button as="a" href="#" circular name="whatsapp" color='green' icon="whatsapp"/>
                    
                </div>
            </div>
            <div className={styles.copyright}>
                <span>Copyright &copy; 2023 Stechno computer - All rights reserved </span>
                <span className={styles.phrase}>Developed by <p>Josscard</p></span>
            </div>
        </Container>
    
    </div>
  )
}
