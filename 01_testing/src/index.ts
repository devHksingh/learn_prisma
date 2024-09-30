import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

interface UpdateParams{
    firstname:string;
    lastname:string;
}

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

async function getUser(email:string){
    const user = await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    console.log(user)
}

getUser("Jhone@abc.com")


async function deleteUser(email:string){
    const user = await prisma.user.delete({
        where:{
            email:email
        }
    })
    console.log(user)
}

// deleteUser("Jhone@abc.com")