import { Address } from "@/api"
import { useAuth } from "@/hooks";
import styles from "./Addresses.module.scss";
import { useEffect, useState } from "react";
import { map } from "lodash"
import classNames from "classnames"

const addressCtrl = new Address();

export function Addresses(props) {

    const {addressSelected, setAddressSelected} = props;
    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();
    //console.log(addresses);

    useEffect(() => {
      (async () => {
        try {
            const response = await addressCtrl.getAll(user.id);
            setAddresses(response.data)
        } catch (error) {
            console.error(error);
        }
      })()
    }, [])
    
  return (
    <div className={styles.addresses}>
        <h2>Dirección</h2>

        {map(addresses, (address) => (
            <div key={address.id} 
                    className={classNames(styles.address, {
                        [styles.active]: address.id === addressSelected?.id,
                    } )} 
                    onClick={() => setAddressSelected(address)}>
                <p>
                    {address.attributes.name} 
                    ({address.attributes.title})
                </p>
            </div>
        ))}
    </div>
  )
}
