import {object, string, number, date, InferType} from 'yup';

let signInSchema = object({
    firstName: string().required(),
    userName: string().required().min(3),
    lastName: string().required(),
    email: string().email().required(),
    password: string().required().min(8),
});

export default signInSchema;