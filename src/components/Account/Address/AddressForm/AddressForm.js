import{ Form } from "semantic-ui-react"
import { useFormik} from "formik";
import {Address} from "@/api";
import { useAuth } from "@/hooks";
import {initialValues, validationSchema} from "./AddressForm.form"

const addressCtrl = new Address();


export function AddressForm(props) {
    const {onClose, onReload, addressId, address} = props;
    const { user } = useAuth();

   // console.log(address);
    const formik = useFormik({
        initialValues: initialValues(address),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            try {
                if (addressId) {
                   // console.log("actualizar direccion");
                   // console.log(formValue);
                   await addressCtrl.update(formValue, addressId);
                }else{
                    await addressCtrl.create(formValue, user.id);
                }
                
              
               
            } catch (error) {
                console.error(error);
        }

        formik.handleReset(); 
        onReload();
        // cuando el usuario se envie correctamente se cierra el modal
        onClose();
            }
    })
  return (

    <Form onSubmit={formik.handleSubmit}>
        <Form.Input name="title" 
                    placeholder="Titulo de la direccion" 
                    value={formik.values.title} 
                    onChange={formik.handleChange} 
                    error={formik.errors.title}/>
        
        <Form.Group widths="equal">
            <Form.Input name="name" placeholder="Nombre y apellidos"
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        error={formik.errors.name}
            />
            <Form.Input name="address" placeholder="Direccion"
                    value={formik.values.address} 
                    onChange={formik.handleChange} 
                    error={formik.errors.address} />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input name="state" placeholder="Departamento"
                        value={formik.values.state} 
                        onChange={formik.handleChange} 
                        error={formik.errors.state}
            />  
            <Form.Input name="city" placeholder="Ciudad"
                        value={formik.values.city} 
                        onChange={formik.handleChange} 
                        error={formik.errors.city}
            />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input name="postal" placeholder="Codigo postal"
                        value={formik.values.postal} 
                        onChange={formik.handleChange} 
                        error={formik.errors.postal}
            />
            <Form.Input name="phone" placeholder="Telefono"
                        value={formik.values.phone} 
                        onChange={formik.handleChange} 
                        error={formik.errors.phone}
            />
        </Form.Group>

        <Form.Button type="submit" fluid loading={formik.isSubmitting}>
            Enviar
        </Form.Button>
    </Form>
  )
}
