import { Request, response, Response } from "express";
import { CreateUserController } from "./CreateUserController";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const {nmUser, senha, perfil }=req.body
        console.log(nmUser)
        return res.json({ OK: true })
    }
}
export { CreateUserController }