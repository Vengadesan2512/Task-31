import * as Yup from 'yup'

export const signupValidation = Yup.object({
    name:Yup.string().min(3).required("please enter the name"),
    email:Yup.string().email("please enter the mail").required("please enter the validmail"),
    instruction:Yup.string().required("please enter the instrction"),
})