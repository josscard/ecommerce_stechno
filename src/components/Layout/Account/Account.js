import styles from "./Account.module.scss"
import {Button, Icon, Label} from "semantic-ui-react"
import {useRouter} from "next/router"
import {useAuth, useCart} from "@/hooks"
/*aca encontramos todo lo relacionado a la funcional
del carrito, que hace cuando esta logueado y que cuando no */


export function Account() {
    const {user} = useAuth();
    const router = useRouter();
    const { total } = useCart();
    
    const goToLogin = () => router.push("/join/sign-in");
    const goToAccount = () => router.push("/account");

    
    const goToCart =()=> {
        if(!user) goToLogin();
        else router.push("/cart");
    
    };
  return (
    
    <div className={styles.account}>
        <Button icon className={styles.cart}>
            <Icon name="cart" onClick={goToCart}/>
            {total > 0 && <Label circular>{total}</Label>}
        </Button>

        {!user ? (
            <Button icon>
                <Icon name="user outline" onClick= {goToLogin}/>
            </Button>
        ) :(
            <Button icon className={styles.user}>
                <Icon name="user outline" onClick= {goToAccount}/>
            </Button>
        )}
    </div>
    
  )
}
