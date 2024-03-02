import  * as Yup from "yup"


export function initialValues() {
  return {
    password: "",
    repeatPassword: ""
  }
}

export function validatonSchema(){
    return Yup.object({
        password: Yup.string().required("Ingrese el password min 8 caracteres"),
        repeatPassword: Yup.string()
        .required("Ingrese el password")
        .min(8, 'Password es muy corto - debe tener 8 caracteres min.')
        .oneOf([Yup.ref("password"),null], "Las contraseñas no coinciden"),
    });
}