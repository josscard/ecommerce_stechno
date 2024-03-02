import Link, {} from "next/link"
import { JoinLayout } from "@/layouts"
import styles from "./sign-in.module.scss"
import {LoginForm} from "@/components/Auth"


export default function SignInPage(){
    return(
        <>
            <JoinLayout>
                <div className={styles.signIn}>
                    <h2>Iniciar sesion</h2>

                    <LoginForm/>

                    <div className={styles.actions}>
                        <Link href="/join/sign-up">
                            ¿No tienes una cuenta?
                        </Link>
                    </div>
                </div>
            </JoinLayout>
        </>
    )
}