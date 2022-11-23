import { Request, response, Response } from "express";
import { ReadAllUsercontrole } from './ReadAllUsercontrole';

class ReadAllUserController {
    async handle(req: Request, res: Response) {
        return res.json({ OK: true })
    }
}
export { ReadAllUserController }