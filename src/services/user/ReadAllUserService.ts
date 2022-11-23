import prismaClient from '../../prisma';

interface UserRequest {
    nmuser: string;
    senha: string;
    perfil: string;
}
class ReadAllUserService {
    async execute() {
        return null;
    }
}
export { ReadAllUserService }