import express from 'express';
import { getUserById, getUsers, removeUser, signin, signup, updatePassword, updateUser } from '../Controllers/User';

const route = express.Router();

route.post('/signup', signup)
route.post('/signin', signin)
route.get('/users', getUsers)
route.get('/users/:id', getUserById)
route.delete('/users/:id', removeUser)
route.put('/users/:id', updateUser)
route.put('/users/:id/password', updatePassword)


export default route