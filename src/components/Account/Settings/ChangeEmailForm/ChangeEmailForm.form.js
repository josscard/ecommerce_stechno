import * as Yup from "yup";

export function initialValues() {
    return{
        email: "",
        repeatEmail: "",
    }
}

export function validationSchema() {
    return Yup.object({
        email: 
            Yup.string()
                .email("El email no tiene un formato válido")
                .required("El email es obligatorio"),
        repeatEmail: 
            Yup.string()
                .email("El email no tiene un formato válido")
                .required("El email es obligatorio")
                .oneOf([Yup.ref("email")], "Los email no coinciden"),
    })
}