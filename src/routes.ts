import { Router, Request, Response } from "express";
import {CreateUserController} from './controllers/user/CreateUserController';
import {ReadAllUserController} from './controllers/user/ReadAllUserController';

const router = Router();
//Rotas USER ------------
router.post('/users/incls',new CreateUserController().handle)
router.get('/users/all',new ReadAllUserController().handle)
export { router };