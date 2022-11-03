import * as yup from 'yup'

const bookFormValidationSchema = yup.object({
    date:yup.date()
    .required('Date is required'),
    title:yup.string()
    .required(' Title is required'),
    tags:yup.string()
    .required('Tag is required'),
    description:yup.string()
    .required('Description is required'),
   
})



export default bookFormValidationSchema