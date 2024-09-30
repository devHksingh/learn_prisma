"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(email:string,password:string,firstname:string,lastname:string){
//     const res = await prisma.user.create({
//         data:{
//             email,
//             password,
//             firstname,
//             lastname,
//         },
//         select:{
//             id:true,
//             password:true,
//             email:true
//         }
//     })
//     console.log(res);
// }
// insertUser("Jhone@abc.com","password","Jhone","Doe")
// update user
// async function updateUser(email:string,{firstname,lastname}:UpdateParams){
//     const res = await prisma.user.update({
//         where:{email},
//         data:{
//             firstname,
//             lastname
//         }
//     });
//     console.log(res);
// }
// updateUser("Jhone@abc.com",{firstname:"new",lastname:"newLastName"})
// get user 
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                email: email
            }
        });
        console.log(user);
    });
}
getUser("Jhone@abc.com");
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.delete({
            where: {
                email: email
            }
        });
        console.log(user);
    });
}
// deleteUser("Jhone@abc.com")
