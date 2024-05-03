import * as yup  from "yup"


export const bookSchema=yup.object({

title:yup.string().required("Title PLEASE"),
isbn: yup.string().required("ISBN PLEASE"),
birth: yup.string().required("BIRTH PLEASE"),
author: yup.string().required("AUTHOR PLEASE"),
publication: yup.string().required("PUBLICATION PLEASE"),
notes: yup.string().required("NOTES PLEASE"),


})