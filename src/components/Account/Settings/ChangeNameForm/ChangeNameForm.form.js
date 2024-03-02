import * as Yup from "yup";

export function initialValues(nombre, apellidos) {
    return {
        nombre,
        apellidos
    }
}

export function validationSchema(){
    return Yup.object({
        nombre: 
            Yup.string()
            .required("Debe escribir su nombre"),
        apellidos: 
            Yup.string()
            .required("Debe escribir su apellido")
    })
}