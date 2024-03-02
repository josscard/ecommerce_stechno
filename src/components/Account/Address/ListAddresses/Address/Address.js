import { useState} from "react"
import { Button, Icon} from "semantic-ui-react"
import { BasicModal, Confirm } from "@/components/Shared"
import { Address as AddressCtrl} from "@/api"
import styles from "./Address.module.scss"
import { AddressForm } from "../../AddressForm"

const addressCtrl =new AddressCtrl();

export function Address(props) {
    const{ addressId, address, onReload} = props;

    const [showEdit, setShowEdit] = useState(false);

// creamos el setState del modal confirm
    const [showConfirm, setShowConfirm] = useState(false)

    const openCloseEdit = () =>setShowEdit((prevState) => !prevState);
    const openCloseConfirm =() => setShowConfirm((prevState) => !prevState);

    const onDelete = async () => {
        try {
            await addressCtrl.delete(addressId);
            onReload();
        } catch (error) {
            console.error(error);
        }
    }
    return (
    <>
        <div className={styles.address}>
            <div>
                <p className={styles.title}>{address.title}: </p>
                <p className={styles.addressInfo}>
                    {address.name}, {address.address}, {address.state}, {address.city}, 
                    {address.postal}
                    
                </p>
            </div>

            <div className={styles.actions}>
                <Button primary icon onClick={openCloseEdit}>
                    <Icon name="pencil"/>
                </Button>
                <Button primary icon onClick={openCloseConfirm}>
                    <Icon name="delete"/>
                </Button>
            </div>

        </div>

        <Confirm 
            open = {showConfirm}
            onCancel = {openCloseConfirm}
            onConfirm = {onDelete}
            content = "¿Estas seguro que quieres eliminar la direccion?"
        />

        <BasicModal 
            show={showEdit} 
            onClose={openCloseEdit} 
            title="Editar dirección">

                <AddressForm onClose={openCloseEdit} onReload={onReload} addressId={addressId} address={address}/>

        </BasicModal>
    </>
  )
}
