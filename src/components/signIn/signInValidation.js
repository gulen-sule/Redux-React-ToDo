import {object, string, number, date, InferType} from 'yup';

let signInSchema = object({
    firstName: string().required(),
    username: string().required().min(8),
    lastName: string().required(),
    email: string().email(),
    password: string().required().min(8),
    createdOn: date().default(() => new Date()),
});