import styles from "./ChangeNameForm.module.scss"
import{ Form, Icon ,Header } from "semantic-ui-react";
import{ useFormik} from "formik"
import { useAuth } from "@/hooks"
import {User} from "@/api"
import {initialValues, validationSchema} from "./ChangeNameForm.form"

const userCtrl = new User();

export function ChangeNameForm() {
  
  const {user} = useAuth();
  const formik = useFormik({
  
    
    initialValues: initialValues(user.nombre, user.apellidos),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit:async(formValue)=> {
      try {
        await userCtrl.updateMe(user.id, formValue)
      } catch (error) {
        console.error(error);
      }
    }
  })
  
  return (
    <Form onSubmit={formik.handleSubmit}>

    <Header className={styles.setHeader}
    as='h2'
    content='Configuración de cuenta'
    subheader='Edita tu información personal'
  />
    <Icon name="edit" className={styles.edit}/>
    
        <label >Nombre y apellidos</label>

        <div className={styles.content}>
          <Form.Input 
            name="nombre" placeholder="Nombre" 
            value={formik.values.nombre} 
            onChange={formik.handleChange} 
            error={formik.errors.nombre}/>

            <Form.Input 
            name="apellidos" placeholder="apellidos" 
            value={formik.values.apellidos} 
            onChange={formik.handleChange} 
            error={formik.errors.apellidos}/>

          <Form.Button  type="submit" loading={formik.isSubmitting}>Enviar</Form.Button>
        </div>
    </Form>
  )
}
