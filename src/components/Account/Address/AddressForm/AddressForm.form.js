import * as Yup from "yup"

export function initialValues(address) {
    return {
        title: address?.title ||  "",
        name: address?.name || "",
        address: address?.address ||"",
        city: address?.city ||"",
        state: address?.state ||"",
        postal: address?.postal ||"",
        phone: address?.phone ||"",
    };
}

export function validationSchema(){
    return Yup.object({
        title: Yup.string().required(true),
        name: Yup.string().required(true),
        address: Yup.string().required(true),
        city: Yup.string().required(true),
        state: Yup.string().required(true),
        postal: Yup.string().required(true),
        phone: Yup.number().required(true),
    })
}