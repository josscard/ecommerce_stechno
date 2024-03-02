import {Tab} from "semantic-ui-react"
import { useState } from "react"
import{useRouter} from "next/router"
import { BasicLayout } from "@/layouts"
import {Info, Settings, Address } from "@/components/Account"
import {useAuth} from "@/hooks"
import { Separator } from "@/components/Shared"
import styles from "./account.module.scss"

export default function AccountPage() {

    const {user,logout} = useAuth();
    const router =useRouter();
    const [reload, setReload] = useState(false)

      if (!user) {
        router.push("/join/sign-in");
        return null
      }

      const onReload = () => setReload((prevState) => !prevState);

    const onLogout= () => {
      logout();
      router.push("/")
    }
    const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis pedidos...</p>
        </Tab.Pane>
      )
    },

    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mi lista de deseos...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload}/>
          <Address.ListAddresses reload={reload} onReload={onReload}/>
          <Separator height={80}/>
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Ajustes"},
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm/>
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm/>
            <Settings.ChangePasswordForm/>
          </div>
          
          <Separator height={50}/>
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        key:21,
        icon: "log out" ,
        content: "Salir",
        onClick: onLogout,
      }
    }
  ]

   
  
  return (
    <>
      <BasicLayout isContainer relative>
        <Info/>

        <Tab menu={{ secondary: true, pointing:true }} panes={panes} className= {styles.tabs}/>
      </BasicLayout>
        
    </>
  )
}
