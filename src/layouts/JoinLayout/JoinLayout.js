import Link from "next/link";
import {Icon, Image} from "semantic-ui-react"
import {useAuth} from "@/hooks"
import { useRouter } from "next/router";
import styles from "./JoinLayout.module.scss"
import React from "react";

export function JoinLayout(props){
    const { children} = props;
    const router = useRouter();
    const {user} = useAuth();

    if(user) {
        router.push("/");
        return null;
    }

    

    return(
        <div className={styles.container}>
            <div className={styles.topBar}>
                <Link href="/">
                    <Image src="/images/stechno.png"/>

                    
                </Link>

                <Link href="/">
                    <Icon name="close" />
                </Link>
            </div>
            <div className={styles.blockLeft}>{children}</div>

            <div className={styles.blockRight}/>
            
        </div>
    )
}

